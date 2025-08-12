import { H3Event } from "h3";
import crypto from "node:crypto";

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig();
  const { apiKey, listId, dc } = config.mailchimp as {
    apiKey?: string;
    listId?: string;
    dc?: string;
  };

  if (!apiKey || !listId || !dc) {
    throw createError({
      statusCode: 500,
      statusMessage: "Mailchimp no está configurado",
    });
  }

  const body = await readBody<Body>(event);

  if (!body?.email || !/^\S+@\S+\.\S+$/.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: "Email inválido" });
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();
  const lang = (body.language || "").trim();
  const status = body.status || "pending"; // usa 'pending' para double opt‑in

  const emailLower = body.email.toLowerCase();
  const subscriberHash = crypto
    .createHash("md5")
    .update(emailLower)
    .digest("hex");

  // Header Basic Auth: usuario cualquiera, pass = API key
  const authHeader =
    "Basic " + Buffer.from(`anystring:${apiKey}`).toString("base64");

  // 1) Upsert del contacto en la lista con merge fields
  const memberUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

  const merge_fields: Record<string, string> = {};
  if (firstName) merge_fields.FNAME = firstName;
  if (lastName) merge_fields.LNAME = lastName;
  if (phone) merge_fields.PHONE = phone;
  //   if (emailLower) merge_fields.EMAIL = emailLower;
  if (message) merge_fields.MESSAGE = message;
  if (lang) merge_fields.LANG = lang;

  const upsertPayload = {
    email_address: emailLower,
    status_if_new: status, // 'pending' envía email de confirmación (double opt-in)
    merge_fields,
    tags: ["webform", "nuxt4"], // opcional: tags para segmentar
  };

  const upsertRes = await $fetch<any>(memberUrl, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: upsertPayload,
  }).catch((err: any) => {
    const msg =
      err?.data?.detail || err?.message || "Error en Mailchimp (upsert)";
    throw createError({ statusCode: 502, statusMessage: msg });
  });

  // 2) Agregar el "mensaje" como nota del contacto (si viene)
  if (message) {
    const notesUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}/notes`;
    await $fetch(notesUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: { note: message },
    }).catch(() => {
      // No romper si falla la nota; solo loguea
      console.warn("No se pudo guardar la nota en Mailchimp");
    });
  }

  return {
    ok: true,
    id: upsertRes?.id,
    status,
    message:
      status === "pending"
        ? "¡Hemos enviado un correo para confirmar tu suscripción!"
        : "¡Suscripción realizada!",
  };
});

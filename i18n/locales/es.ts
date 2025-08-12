export default defineI18nLocale(async (locale) => {
  return {
    menu: ["Experiencias", "Noticias", "Contacto"],
    home: {
      hero: {
        id: "hero",
        tags: [
          "Coach ejecutivo",
          "Emprendedora social",
          // "Líder en gobernanza y transformación humana",
        ],
        image: "/Banner_2.jpg",
        title:
          "Acompañando líderes y organizaciones hacia su transformación más auténtica",
        buttons: [
          {
            label: "Conoce mi historia",
            hash: "#experiencias",
          },
          {
            label: "Contáctame",
            hash: "#contacto",
          },
        ],
      },
      experiences: {
        id: "experiencias",
        uppertitle: "Sobre mí",
        title: "Una vida guiada por el propósito y la transformación",
        intro: `Coach ejecutiva certificada por <b>INSEAD</b> con una profunda vocación por el desarrollo humano. Mi enfoque psicodinámico permite descubrir y trabajar las dinámicas invisibles que influyen en las decisiones, los vínculos y los resultados dentro de organizaciones y equipos.`,
        years: `Años <br class="hidden lg:block"> de experiencia`,
        text: `He desempeñado roles clave en el mundo corporativo, el emprendimiento y el impacto social. Mi trayectoria incluye <b>CHANEL</b> en París, la Delegación Dominicana ante la <b>UNESCO</b>, y un rol activo en instituciones como <b>PACAM</b>, <b>ICF</b> y <b>Fundación Dimitrova</b>.`,
        features: [
          {
            icon: `idiomas.svg`,
            label: ` Idiomas<br class="hidden md:block">Español, Inglés y Francés`,
          },
          {
            icon: `acompanamiento.svg`,
            label: `Acompañamiento<br class="hidden md:block">en persona o remoto`,
          },
          {
            icon: `coach.svg`,
            label: `Coach corporativo<br class="hidden md:block">individual y grupal`,
          },
        ],
      },
      quote: {
        id: "cita",
        image: "https://placehold.co/1024x720",
        quote: `"Mi trabajo no trata solo de metas y resultados, sino de lo que ocurre debajo: las emociones, las historias no contadas, los sistemas que nos forman."`,
        author: "Mimi Grullón",
      },
      move: {
        id: "move",
        image: "_GRAPH_es.png",
        uppertitle: "Qué me mueve",
        title: "Gobernanza con propósito, coaching con sentido humano",
        intro: "",
        keys: [
          `<b>Transformación humana:</b> Acompañamiento profundo y estratégico a líderes y equipos para lograr cambios sostenibles.`,
          `<b>Enfoque psicodinámico:</b> Una mirada integral que va más allá de la superficie, conectando emociones, sistemas y cultura.`,
          `<b>Impacto social real:</b> Compromiso activo con poblaciones vulnerables, especialmente jóvenes con autismo.`,
          `<b>Educación y liderazgo ético:</b> Formación constante en las mejores escuelas del mundo con enfoque en sostenibilidad, lujo consciente y gobernanza.`,
        ],
        list: [
          "Miembros de la familia",
          "Propietarios (accionistas)",
          "Personas que trabajan en la empresa",
          "Miembros de la familia que son propietarios",
          "Propietarios que trabajan en la empresa",
          "Miembros de la familia que trabajan en la empresa",
          "Propietarios que son miembros de la familia y trabajan en la empresa",
        ],
      },
      projects: {
        id: "projects",
        image: "/IMG_1486.webp",
        uppertitle: "Proyectos e Iniciativas",
        title: "Donde convergen la acción, la compasión y el liderazgo",
        intro: "",
        keys: [
          `<b>Nuestra Casita RD:</b> Centro pionero en la atención a adolescentes dentro del espectro autista en República Dominicana. Una iniciativa que une inclusión, innovación educativa y sensibilidad humana.`,
          `<b>Consejos directivos y mentorías:</b> Miembro activa en varias fundaciones y ONGs. Aporta visión estratégica en temas de gobernanza, liderazgo femenino e innovación social.`,
          `<b>Coach y facilitadora:</b> Diseña e implementa procesos de coaching individual y grupal, con impacto medible en la cultura organizacional.`,
        ],
      },
      news: {
        id: "noticias",
        uppertitle: "Lo último",
        title: "Actualidad y participación",
      },
      contact: {
        id: "contacto",
      },
    },
    footer: {
      image: "/9R8A2918-EDIT-web.webp",
      title: "Estoy a un mensaje de distancia",
      nameField: "Nombres",
      lastnameField: "Apellidos",
      emailField: "Correo electrónico",
      phoneField: "Teléfono",
      messageField: "Mensaje",
      btnSubmit: "Enviar",
      btnSubmitting: "Enviando...",
      btnSubmitted: "Enviado",
      submitError: "Error, intente de nuevo.",
      copyright: "Todos los derechos reservados",
      poweredBy: "Desarrollador por",
    },
  };
});

<script setup lang="ts">
const { locales, locale, t, messages } = useI18n();

const translatedItems = computed(() => messages.value[locale.value]?.footer || {});
const languague = computed(() => locales.value.filter(i => i.code === locale.value)[0].name)
const formData = ref({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    message: null,
})

const pending = ref(false)
const error = ref(null)
const ok = ref(false)
const serverMessage = ref('')

// const enabled = computed(() => {
//     const { firstName, lastName, email, phone, message } = formData.value

//     return !!firstName && !!lastName && !!email && !!phone && !!message
// })

const onSubmit = async () => {
    error.value = null
    ok.value = false
    serverMessage.value = ''
    pending.value = true

    try {
        const res = await $fetch('/api/mailchimp/subscribe', {
            method: 'POST',
            body: {
                firstName: formData?.value?.firstName,
                lastName: formData?.value?.lastName,
                email: formData?.value?.email,
                phone: formData?.value?.phone,
                message: formData?.value?.message,
                language: languague.value,
                status: 'subscribed' // o 'subscribed'
            }
        })

        console.log(res)
        ok.value = true
        serverMessage.value = (res as any)?.message || 'Hecho'
        // Limpia el formulario si quieres
        // firstName.value = lastName.value = email.value = phone.value = message.value = ''
    } catch (e) {
        error.value = e?.data?.statusMessage || e?.message || 'Error al suscribirte'
    } finally {
        pending.value = false
    }
}
</script>

<template>
    <form class="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5" @submit.prevent="onSubmit">
        <div>
            <input id="name" type="text" name="name" required autocomplete="name"
                class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                v-model="formData.firstName" :placeholder="translatedItems?.nameField">
        </div>

        <div>
            <input id="lastname" type="text" name="lastname" required autocomplete="family-name"
                class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                v-model="formData.lastName" :placeholder="translatedItems?.lastnameField">
        </div>

        <div class="">
            <input id="email" type="email" name="email" required autocomplete="email"
                class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                v-model="formData.email" :placeholder="translatedItems?.emailField">
        </div>
        <div>
            <input id="phone" required type="tel" name="phone" autocomplete="tel"
                class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                v-model="formData.phone" :placeholder="translatedItems?.phoneField">
        </div>

        <div class="sm:col-span-2">
            <textarea id="message" required name="message" rows="4"
                class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                v-model="formData.message" :placeholder="translatedItems?.messageField" />
        </div>

        <div>
            <button type="submit"
                class="inline-flex items-center justify-center w-full md:w-4/5 px-6 py-3 text-base md:text-lg lg:text-xl font-semibold border border-transparent rounded-sm shadow-sm disabled:opacity-75 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer font-monserrat transition-colors duration-300 ease-in-out"
                :class="[
                    { 'bg-primary-3 focus:ring-primary-3 pointer-events-none':  ok },
                    { 'bg-secondary-1 focus:ring-secondary-1 text-primary-1 hover:bg-primary-2 hover:text-secondary-2': !ok }
                ]">
                <span v-if="!pending || error">
                    {{ translatedItems?.btnSubmit }}
                </span>
                <span v-if="pending" class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>

                    {{ translatedItems?.btnSubmitting }}
                </span>
            </button>
        </div>
        <div class="md:col-span-2">
            <p v-if="error" class="text-secondary-1">{{ error }}</p>
            <p v-if="ok" class="text-secondary-1">{{ serverMessage }}</p>
        </div>
    </form>
</template>
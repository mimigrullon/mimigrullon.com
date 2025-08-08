<script setup>
const store = useMainStore();
const { locales, locale, t, messages } = useI18n();

const translatedItems = computed(() => messages.value[locale.value]?.footer || {});

const formData = ref({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    message: null,
    lang: computed(() => locales.value.filter(i => i.code === locale.value)[0].name)
})

const enabled = computed(() => {
    const { firstName, lastName, email, phone, message } = formData.value

    return !!firstName && !!lastName && !!email && !!phone && !!message
})

const { error, data, execute, status } = useFetch(`/api/contact`, {
    method: "POST",
    body: formData.value,
    immediate: false,
    watch: false,
    transform(data) {
        return data
    },
    onResponse(res) {
        // console.log('onResponse', res.response)
    },
    onRequestError(err) {
        console.log('onRequestError', err)
    },
    onResponseError(err) {
        formData.value = {}

        document.getElementById("name").focus()
        console.log('onResponseError', err)
    }
})
</script>

<template>
    <footer :id="$t('home.contact.id')" class="bg-secondary-1 pt-16">
        <div class="px-5">
            <div class="p-5 md:p-8 lg:px-16 lg:py-16 rounded-xl bg-primary-1">
                <div class="max-w-full mx-auto">
                    <div class="grid grid-cols-1 grid-rows-1 gap-16 lg:grid-rows-1 lg:grid-cols-2">
                        <div
                            class="row-start-2 lg:row-start-1 bg-secondary-1 flex items-end pb-10 justify-center rounded-xl relative overflow-hidden min-h-96">
                            <img :src="translatedItems?.image"
                                class="absolute inset-0 object-[50%_18%] transform object-cover h-full w-full" :alt="translatedItems?.title">
                            <div class="flex flex-col items-start justify-start max-w-sm relative">
                                <!-- <Logo class="text-white h-24" />

                                <div class="flex items-center justify-center mt-10 w-full space-x-12">
                                    <a :href="item.link" target="_blank" rel="noopener noreferrer"
                                        v-for="(item, index) in store.socials" :key="index"
                                        class="text-primary-1 bg-white size-8 flex items-center justify-center rounded-md hover:bg-secondary-3 hover:text-primary-3 transition-colors duration-300 ease-in-out">
                                        <Icon :name="item.icon" size="24px" />
                                    </a>
                                </div> -->
                            </div>
                            <!-- <div>
                                <div class="flex items-center justify-start space-x-5">
                                    <LangSwitcher size="size-14" />
                                </div>

                            </div> -->
                        </div>

                        <div class="row-start-1 lg:row-start-auto">
                            <h3
                                class="block text-4xl font-bold font-montserrant tracking-wide md:text-3xl lg:text-5xl leading-tight text-white mb-10">
                                {{ translatedItems?.title }}
                            </h3>

                            <form class="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5" @submit.prevent="">
                                <div>
                                    <input id="name" type="text" name="name" required autocomplete="name"
                                        class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                                        :placeholder="translatedItems?.nameField">
                                </div>

                                <div>
                                    <input id="lastname" type="text" name="lastname" required autocomplete="family-name"
                                        class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                                        :placeholder="translatedItems?.lastnameField">
                                </div>

                                <div class="">
                                    <input id="email" type="email" name="email" required autocomplete="email"
                                        class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                                        :placeholder="translatedItems?.emailField">
                                </div>
                                <div>
                                    <input id="phone" required type="tel" name="phone" autocomplete="tel"
                                        class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                                        :placeholder="translatedItems?.phoneField">
                                </div>

                                <div class="sm:col-span-2">
                                    <textarea id="message" required name="message" rows="4"
                                        class="block w-full px-4 py-3 text-xl font-medium rounded-sm ring-2 ring-secondary-1 focus:ring-secondary-3 placeholder-secondary-1 text-secondary-1 outline-none"
                                        :placeholder="translatedItems?.message" />
                                </div>

                                <div>
                                    <button type="submit"
                                        class="inline-flex items-center justify-center w-full md:w-4/5 px-6 py-3 text-base md:text-lg lg:text-xl font-semibold border border-transparent rounded-sm shadow-sm disabled:opacity-75 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer font-monserrat transition-colors duration-300 ease-in-out"
                                        :class="[
                                            { 'bg-primary-3 focus:ring-primary-3 pointer-events-none': !error && status === 'success' },
                                            { 'bg-secondary-1 focus:ring-secondary-1 text-primary-1 hover:bg-primary-2 hover:text-secondary-2': !data }
                                        ]">
                                        <span v-if="status === 'idle' || error">
                                            {{ translatedItems?.btnSubmit }}
                                        </span>
                                        <span v-if="status === 'pending'" class="flex items-center justify-center">
                                            <svg class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4" />
                                                <path class="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>

                                            {{ translatedItems?.btnSubmitting }}
                                        </span>
                                        <span v-if="status === 'success'">
                                            {{ translatedItems?.btnSubmitted }}
                                        </span>
                                    </button>
                                    <p v-if="error" class="mt-2 text-white">
                                        {{ translatedItems?.submitError }}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-12 items-center justify-around w-full py-8">
                <p class="text-base text-center md:text-left text-primary-1 whitespace-nowrap">
                    <strong>Mimi Grullón ®</strong> <span class="hidden lg:inline">-</span><br class="lg:hidden">
                    {{translatedItems?.copyright }} <span class="hidden lg:inline">-</span><br class="lg:hidden">
                    {{translatedItems?.poweredBy }} <a href="https://holistika.co" target="_blank" rel="noopener noreferrer"
                        class="font-bold hover:underline underline-offset-2 hover:text-primary-1">Holistika</a>
                </p>

                <div class="flex items-center justify-end space-x-6">
                    <a :href="item.link" target="_blank" rel="noopener noreferrer"
                        v-for="(item, index) in store.socials" :key="index"
                        class="text-secondary-1 bg-primary-1 size-8 flex items-center justify-center rounded-md hover:bg-secondary-3 hover:text-primary-3 transition-colors duration-300 ease-in-out">
                        <Icon :name="item.icon" size="24px" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
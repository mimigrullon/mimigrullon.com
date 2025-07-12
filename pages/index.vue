<script setup>
// const store = useMainStore();
// const runtimeConfig = useRuntimeConfig();

// const { data, status } = await useAsyncData(`page-home`, async () => {
//     const [pages] = await Promise.all([
//         $fetch(`${runtimeConfig.public.wp.apiUrl}/pages/`, {
//             query: { slug: 'inicio' },
//             params: {
//                 _fields: 'yoast_head_json'
//             }
//         }),
//     ])   

//     return pages[0] || {}
// });
// useYoastSeo(data.value?.yoast_head_json, `${runtimeConfig.public.baseUrl}/`)
</script>

<template>
    <!-- Hero -->
    <section id="hero" class="p-5 h-screen">
        <div class="relative bg-primary-1 rounded-xl h-full overflow-hidden">
            <img src="/images/bg-2.jpeg" alt="Hero background for desktop"
                class="hidden object-cover object-center w-full pointer-events-none lg:inline">
            <!-- <img src="/images/mimi-4.webp" alt="Hero background for mobile"
                class="object-cover object-center w-full pointer-events-none lg:hidden"> -->

            <div class="absolute bottom-0 left-0 right-0 h-full top-16 lg:top-0">
                <div class="container h-full px-6 mx-auto lg:px-0">
                    <div class="grid h-full grid-cols-1 gap-0 lg:grid-cols-7">
                        <div class="hidden lg:col-span-4 lg:block" />
                        <div class="lg:col-span-3">
                            <div
                                class="flex items-start justify-center w-full h-full text-center lg:items-center lg:text-left">
                                <div class="w-full">
                                    <div class="mb-6 space-x-3 flex items-center justify-start flex-wrap">
                                        <span
                                            class="bg-primary-1 text-secondary-1 font-semibold px-2.5 py-1.5 text-xs rounded-md">Executive
                                            Coach</span>
                                        <span
                                            class="bg-primary-1 text-secondary-1 font-semibold px-2.5 py-1.5 text-xs rounded-md">Emprendedora
                                            Social</span>
                                        <span
                                            class="bg-primary-1 text-secondary-1 font-semibold px-2.5 py-1.5 text-xs rounded-md">Líder
                                            en Gobernanza y Transformación Humana</span>
                                    </div>
                                    <h2
                                        class="block text-3xl font-light tracking-widest md:text-4xl lg:text-5xl leading-tight text-white">
                                        Acompañando líderes y organizaciones hacia su transformación más auténtica
                                    </h2>
                                    <div class="flex items-center justify-start space-x-6 mt-5 lg:mt-12">
                                        <!-- <a href="#"
                                            class="text-lg font-medium lg:text-2xl hover:text-primary-1 text-secondary-1 hover:underline underline-offset-8 transition ease-in-out duration-100">Conoce
                                            mi historia</a> -->

                                        <a href="#"
                                            class="bg-primary-3 hover:bg-primary-2 text-secondary-3 hover:text-secondary-2 font-semibold px-2.5 py-1.5 text-lg rounded-md inline-block transition-color ease-in-out duration-300 font-monserrat">
                                            Conoce mi historia
                                        </a>

                                        <a href="#"
                                            class="text-lg font-medium hover:text-primary-2 text-primary-3 hover:underline underline-offset-8 transition ease-in-out duration-100 font-monserrat inline-flex items-center justify-start gap-x-3">
                                            Contáctame
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
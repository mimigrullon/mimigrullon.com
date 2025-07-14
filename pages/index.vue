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

const news = [
    {
        title: "Liderazgo con sentido: cómo gestionar desde lo humano",
        date: "Junio 2025",
        source: "Revista XYZ",
        intro: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
    },
    {
        title: "Participación en el Foro Latinoamericano de Coaching Transformacional",
        date: "Mayo 2025",
        source: "Santo Domingo",
        intro: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde."
    },
    {
        title: "Mimi Grullón: el poder de escuchar lo no dicho",
        date: "Abril 2025",
        source: 'Podcast "Liderazgos que Transforman"',
        intro: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat."
    }
]
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
                                        class="block text-xl font-black tracking-wide md:text-4xl lg:text-5xl leading-tight text-white font-walkway">
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

    <section id="" class="py-24">
        <div class="container px-5 lg:px-0 mx-auto">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div class="flex items-start justify-start">
                    <div>
                        <div>

                            <h2 class="text-base/7 font-semibold text-primary-3 font-montserrat">Sobre mí</h2>
                            <p
                                class="block text-xl font-black tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-walkway mt-2">
                                Una vida guiada por
                                el propósito y la transformación
                            </p>

                            <div
                                class="text-lg !leading-relaxed lg:text-2xl text-primary-1 font-monserrat space-y-12 mt-10">
                                <p>Coach ejecutiva certificada por INSEAD con una profunda vocación por el desarrollo
                                    humano.
                                    Mi enfoque psicodinámico permite descubrir y trabajar las dinámicas invisibles que
                                    influyen
                                    en las decisiones, los vínculos y los resultados dentro de organizaciones y equipos.
                                </p>
                            </div>
                        </div>

                        <div class="flex justify-start w-full mt-16"><a
                                href="https://www.linkedin.com/in/mimigrull%C3%B3n/" target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center justify-start text-xl font-bold underline underline-offset-4 lg:text-xl text-primary-2 hover:text-secondary-2"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-10 h-10 mr-3 text-primary-dark hover:text-primary" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                                    </path>
                                </svg> Mimi Gruñllón </a></div>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-between mt-10">
                    <div class="text-lg !leading-relaxed lg:text-2xl text-primary-1 font-monserrat space-y-12">

                        <div class="flex items-center justify-start text-primary-2 font-monserrat"><span
                                class="text-6xl font-bold lg:text-8xl">+15</span>
                            <p class="ml-5 text-xl font-normal">Años <br class="hidden lg:block"> de experiencia
                            </p>
                        </div>

                        <p>He desempeñado roles clave en el mundo corporativo, el
                            emprendimiento y el impacto social. Mi trayectoria incluye CHANEL en París, la Delegación
                            Dominicana ante la UNESCO, y un rol activo en instituciones como PACAM, ICF y Fundación
                            Dimitrova.</p>

                        <div class="flex items-start justify-around w-full lg:space-y-0 mt-16 space-x-6">
                            <div class="flex flex-col items-start justify-center w-1/2 text-left lg:w-1/3">
                                <IconIdioma />
                                <h3 class="mt-2 text-sm font-medium lg:text-lg text-primary-1 font-monserrat">
                                    Idiomas
                                    <br> Español,
                                    Inglés
                                    y Frances
                                </h3>
                            </div>
                            <div class="flex flex-col items-start justify-center w-1/2 text-left lg:w-1/3">
                                <IconAcompanamiento />
                                <h3 class="mt-2 text-sm font-medium lg:text-lg text-primary-1 font-monserrat">
                                    Acompañamiento <br>
                                    en persona o remoto
                                </h3>
                            </div>
                            <div class="flex flex-col items-start justify-center w-1/2 text-left lg:w-1/3 lg:mt-0">
                                <IconCoach />
                                <h3 class="mt-2 text-sm font-medium lg:text-lg text-primary-1 font-monserrat">
                                    Coach corporativo <br>
                                    individual y grupal</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 lg:py-32 relative">

        <div class="relative h-[50vh] flex items-center justify-center w-full bg-no-repeat bg-fixed bg-cover container rounded-xl mx-auto drop-shadow-2xl drop-shadow-primary-1/15"
            style="background-image: url('https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=')">
            <div class="relative max-w-7xl mx-auto">
                <h3
                    class="text-4xl lg:text-5xl font-black tracking-wide leading-tight sm:text-balance text-white font-walkway">
                    "Mi trabajo no trata solo de metas y resultados, sino de lo que ocurre debajo: las emociones, las
                    historias no contadas, los sistemas que nos forman"
                </h3>
                <!-- <p class="text-right text-white mt-6 text-lg"><b>Rumi</b>
            </p> -->
            </div>
        </div>
    </section>

    <section class="overflow-hidden bg-white py-24">
        <div class="mx-auto container md:px-5 lg:px-0">
            <div class="grid grid-cols-1 gap-16 sm:gap-20 lg:grid-cols-2 lg:items-start">
                <div class="px-5 lg:px-0">

                    <h2 class="text-base/7 font-semibold text-primary-3 font-montserrat">Qué me mueve</h2>
                    <p
                        class="block text-xl font-black tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-walkway mt-2">
                        Gobernanza con propósito, coaching con sentido humano
                    </p>
                    <!-- <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                        </p> -->
                    <dl class="mt-10 container space-y-8 text-base font-monserrat text-primary-1 px-5 lg:px-0">
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>🌱</span>
                                Transformación Humana
                            </dt>
                            <dd class="inline">Acompañamiento profundo y estratégico a líderes y equipos para lograr
                                cambios sostenibles.</dd>
                        </div>
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>🧠</span>
                                Enfoque Psicodinámico
                            </dt>
                            <dd class="inline">Una mirada integral que va más allá de la superficie, conectando
                                emociones, sistemas y cultura.</dd>
                        </div>
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>🌍</span>
                                Impacto Social Real
                            </dt>
                            <dd class="inline">Compromiso activo con poblaciones vulnerables, especialmente jóvenes con
                                autismo.</dd>
                        </div>
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>🧭</span>
                                Educación y Liderazgo Ético
                            </dt>
                            <dd class="inline">Formación constante en las mejores escuelas del mundo con enfoque en
                                sostenibilidad, lujo consciente y gobernanza.</dd>
                        </div>
                    </dl>

                </div>
                <div class="sm:px-5 lg:px-0 h-full">
                    <div
                        class="relative isolate overflow-hidden h-full bg-secondary-2 rounded-xl drop-shadow-2xl drop-shadow-primary-1/15">

                        <img src="https://img.freepik.com/free-photo/people-high-five-library-close-up_23-2149204761.jpg"
                            alt="" class="object-cover object-center h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="overflow-hidden bg-white py-24">
        <div class="mx-auto container md:px-5 lg:px-0">
            <div class="grid grid-cols-1 gap-16 sm:gap-20 lg:grid-cols-2 lg:items-start">
                <div class="sm:px-5 lg:px-0 h-full">
                    <div
                        class="relative isolate overflow-hidden h-full bg-secondary-2 rounded-xl drop-shadow-2xl drop-shadow-primary-1/15">

                        <img src="https://static.wixstatic.com/media/782b72fcacf9403594939a4586ef1042.jpg/v1/fill/w_3200,h_818,fp_0.50_0.39,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ni%C3%B1os%20leyendo%20la%20Santa%20Biblia.jpg"
                            alt="" class="object-cover object-center h-full w-full" />
                    </div>
                </div>
                <div class="px-5 lg:px-0">

                    <h2 class="text-base/7 font-semibold text-primary-3 font-montserrat">Proyectos e Iniciativas</h2>
                    <p
                        class="block text-xl font-black tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-walkway mt-2">
                        Donde convergen la acción, la compasión y el liderazgo
                    </p>
                    <!-- <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                        </p> -->
                    <dl class="mt-10 container space-y-8 text-base font-monserrat text-primary-1 px-5 lg:px-0">
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>🎯</span>
                                Nuestra Casita RD
                            </dt>
                            <dd class="inline">Centro pionero en la atención a adolescentes dentro del espectro autista
                                en República Dominicana. Una iniciativa que une inclusión, innovación educativa y
                                sensibilidad humana.</dd>
                        </div>
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>💼</span>
                                Consejos Directivos y Mentorías
                            </dt>
                            <dd class="inline">Miembro activa en varias fundaciones y ONGs. Aporta visión estratégica en
                                temas de gobernanza, liderazgo femenino e innovación social.</dd>
                        </div>
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-primary-2">
                                <span>🤝</span>
                                Coach y Facilitadora
                            </dt>
                            <dd class="inline">Diseña e implementa procesos de coaching individual y grupal, con impacto
                                medible en la cultura organizacional.</dd>
                        </div>
                    </dl>

                </div>

            </div>
        </div>
    </section>


    <div class="bg-secondary-1 py-24">
        <div class="mx-auto container px-5 lg:px-0">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-base/7 font-semibold text-primary-2 font-montserrat">Lo último</h2>
                <p
                    class="block text-xl font-black tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-walkway mt-2">
                    Actualidad y participación
                </p>
                <p class="mt-2 text-lg/8 text-primary-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                    eaque qui molestias, omnis officia cum?</p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-primary-2 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="(item, index) in news" :key="index"
                    class="flex max-w-xl flex-col items-start justify-between transition-colors duration-300 ease-in-out hover:bg-white p-5 rounded-xl">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time datetime="" class="text-primary-1">{{ item.date }}</time>
                        <span
                            class="relative z-10 rounded-full bg-gray-50 px-3 py-0.5 text-xs font-medium text-secondary-1 bg-primary-1">{{
                                item.source }}</span>
                    </div>
                    <div class="group relative grow">
                        <h3 class="mt-3 text-lg/6 font-semibold text-primary-1 group-hover:text-primary-2">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                {{ item.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-primary-1">
                            {{ item.intro }}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </div>


</template>
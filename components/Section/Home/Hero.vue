<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <section :id="content?.id" class="p-5 h-screen">
        <div class="relative bg-primary-1 rounded-xl h-full overflow-hidden">
            <img :src="content?.image" :alt="content?.title"
                class="object-cover object-right lg:object-center w-full h-full pointer-events-none">
            <!-- <img src="/images/mimi-4.webp" alt="Hero background for mobile"
                class="object-cover object-center w-full pointer-events-none lg:hidden"> -->

            <div class="absolute md:bottom-0 left-0 right-0 h-full top-1/2 md:top-0 transform -translate-y-1/2 md:translate-0">
                <div class="container h-full px-6 mx-auto lg:px-0">
                    <div class="grid h-full grid-cols-1 gap-0 lg:grid-cols-7">
                        <div class="hidden lg:col-span-4 lg:block" />
                        <div class="md:col-span-3">
                            <div
                                class="flex items-center justify-center w-full h-full text-center md:text-left">
                                <div class="w-full">
                                    <div class="mb-6 gap-3 flex items-center md:justify-start justify-center flex-wrap">
                                        <span v-for="(tag, index) in content?.tags" :key="index"
                                            class="bg-primary-1 text-secondary-1 md:px-2.5 px-1 py-0.5 md:py-1.5 font-normal md:font-semibold text-xs rounded-md">
                                            {{ tag }}
                                        </span>
                                    </div>
                                    <h2
                                        class="block text-2xl font-black tracking-wide md:text-4xl xl:text-5xl leading-tight text-white font-walkway">
                                        {{ content?.title }}
                                    </h2>
                                    <div class="flex items-center justify-center md:justify-start flex-col md:flex-row space-y-6 md:space-y-0 space-x-6 mt-5 lg:mt-12">
                                        <!-- <a href="#"
                                            class="text-lg font-medium lg:text-2xl hover:text-primary-1 text-secondary-1 hover:underline underline-offset-8 transition ease-in-out duration-100">Conoce
                                            mi historia</a> -->

                                        <a :href="content?.buttons?.[0].hash"
                                            class="bg-primary-3 hover:bg-primary-2 text-secondary-3 hover:text-secondary-2 font-semibold px-2.5 py-1.5 text-base rounded-md inline-block transition-color ease-in-out duration-300 font-monserrat w-full md:w-auto whitespace-nowrap  text-center md:text-left">
                                            {{ content?.buttons?.[0].label }}
                                        </a>

                                        <a :href="content?.buttons?.[1].hash"
                                            class="text-base font-medium hover:text-primary-2 text-primary-3 hover:underline underline-offset-8 transition ease-in-out duration-100 font-monserrat inline-flex items-center justify-center md:justify-start gap-x-3 w-full text-center md:text-left">
                                            {{ content?.buttons?.[1].label }}
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
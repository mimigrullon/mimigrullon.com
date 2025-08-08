<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <section :id="content?.id" class="py-24">
        <div class="container px-5 lg:px-0 mx-auto">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div class="flex items-start justify-start">
                    <div>
                        <div>

                            <h2 class="text-base/7 font-semibold text-primary-3 font-montserrat">{{ content?.uppertitle
                            }}</h2>
                            <p
                                class="block text-xl font-bold tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-montserrant mt-2">
                                {{ content?.title }}
                            </p>

                            <div
                                class="text-lg !leading-relaxed lg:text-2xl text-primary-1 font-monserrat space-y-12 mt-10">
                                <p>{{ content?.intro }}</p>
                            </div>
                        </div>

                        <div class="justify-start w-full mt-16 hidden md:flex"><a
                                href="https://www.linkedin.com/in/mimigrull%C3%B3n/" target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center justify-start text-xl font-bold underline underline-offset-4 lg:text-xl text-primary-2 hover:text-secondary-2"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-10 h-10 mr-3 text-primary-dark hover:text-primary" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                                    </path>
                                </svg> Mimi Grullón </a></div>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-between mt-10">
                    <div class="text-lg !leading-relaxed lg:text-2xl text-primary-1 font-monserrat space-y-12">

                        <div class="flex items-center justify-start text-primary-2 font-monserrat"><span
                                class="text-6xl font-bold lg:text-8xl">+15</span>
                            <p class="ml-5 text-xl font-normal" v-html="content?.years"></p>
                        </div>

                        <p>{{ content?.text }}</p>

                        <div
                            class="flex flex-col md:flex-row items-start justify-around w-full space-y-6 lg:space-y-0 mt-16 space-x-6">
                            <div v-for="(item, index) in content?.features"
                                class="flex flex-row md:flex-col items-start justify-start md:justify-center w-full text-left md:w-1/3 gap-5">
                                <img :src="`icons/${item?.icon}`" />
                                <h4 class="mt-2 text-sm font-medium lg:text-lg text-primary-1 font-monserrat"
                                    v-html="item?.label"></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    },
    reverse: {
        type: Boolean,
        required: false,
        default: () => false,
    }
});
</script>

<template>
    <section :id="content?.id" class="bg-white pt-24">
        <div class="mx-auto container lg:px-0">
            <div class="gap-16 md:gap-20 flex flex-col md:flex-row justify-between">
                <div :class="['px-5 lg:px-0 w-full md:w-1/2']">
                    <h2 class="text-base font-semibold text-primary-3 font-montserrat">{{ content?.uppertitle }}</h2>
                    <p
                        class="block text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-montserrant mt-2">
                        {{ content?.title }}
                    </p>

                    <ul class="mt-10 container space-y-8 text-base font-monserrat text-primary-1 px-5 lg:px-0">
                        <li v-for="(item, index) in content?.keys" :key="index"
                            class="relative pl-0 md:pl-8 flex items-start justify-start gap-2">
                            <span>
                                <Icon name="carbon:dot-mark" class="text-primary-3" size="15px" />
                            </span>
                            <span v-html="item"></span>
                        </li>
                    </ul>

                </div>

                <div :class="['px-5 lg:px-0 h-full aspect-4/3 w-full md:w-1/2', { 'order-last md:order-first': reverse }, {'md:-mt-32': content?.list.length > 0 && content?.list}]">
                    <div
                        class="relative isolate overflow-hidden h-full bg-muted rounded-xl drop-shadow-2xl drop-shadow-primary-1/15">

                        <img :src="content?.image" :alt="content?.title"
                            class="object-cover object-top h-full w-full" />
                    </div>
                    <ul v-if="content?.list.length > 0 && content?.list" class="list-decimal flex items-center justify-center flex-wrap gap-x-12 gap-y-3 marker:text-secondary-1 marker:font-bold">
                        <li v-for="item in content?.list" :key="item" class="whitespace-nowrap font-monserrat font-semibold text-primary-1 text-sm">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
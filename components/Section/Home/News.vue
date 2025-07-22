<script setup>
const prismic = usePrismic();
const { locale, locales } = useI18n();

defineProps({
    content: {
        type: Object,
        required: true
    }
});

const { data: news } = await useAsyncData("news", () => {
    const currentLocale = locales.value.filter(i => i.code === locale.value);

    return prismic.client.getByType("news", {
        lang: currentLocale?.[0]?.language
    })
});
</script>

<template>
    {{ currentLocale?.[0]?.language }}
    <section :id="content?.id" class="bg-secondary-1 pt-24 pb-16 mt-24">
        <div class="mx-auto container px-5 xl:px-0">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-base/7 font-semibold text-primary-2 font-montserrat">{{ content?.uppertitle }}</h2>
                <p
                    class="block text-xl font-black tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-walkway mt-2">
                    {{ content?.title }}
                </p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-primary-2 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                <article v-for="(item, index) in news?.results" :key="index"
                    class="relative flex max-w-xl flex-col items-start justify-between transition-colors duration-300 ease-in-out hover:bg-white p-5 rounded-xl">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time datetime="" class="text-primary-1">{{ item?.data?.date }}</time>
                        <span
                            class="relative z-10 rounded-full bg-gray-50 px-3 py-0.5 text-xs font-medium text-secondary-1 bg-primary-1">{{
                                item?.data?.source }}</span>
                    </div>
                    <div class="group relative grow">
                        <h3 class="mt-3 text-lg/6 font-semibold text-primary-1 group-hover:text-primary-2">
                            <a :href="`/noticias/${item?.slugs?.[0]}`">
                                <span class="absolute inset-0"></span>
                                {{ item?.data?.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-primary-1">
                            {{ item?.data?.intro?.[0]?.text }}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
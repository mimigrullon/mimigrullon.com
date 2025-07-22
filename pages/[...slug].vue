<script setup>
const prismic = usePrismic();
const { locale, locales } = useI18n();
const route = useRoute();

const { data } = await useAsyncData("new", () => {
    const currentLocale = locales.value.filter(i => i.code === locale.value);

    return prismic.client.getByUID("news", route.params.slug?.[0], {
        lang: currentLocale?.[0]?.language
    })
});
</script>

<template>
    <section class="bg-white px-6 py-32 mt-32 lg:px-8">
        <div class="mx-auto max-w-5xl text-base text-primary-1">
            <div class="flex flex-col md:flex-row items-start justify-between gap-4 text-base">
                <time :datetime="data?.data?.date" class="text-primary-1">{{ data?.data?.date }}</time>
                <span
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-0.5 text-base font-medium text-secondary-1 bg-primary-1">{{
                        data?.data?.source }}</span>
            </div>
            <h1 class="mt-6 text-4xl tracking-tight text-pretty sm:text-5xl font-walkway font-black">
                {{ data?.data?.title }}
            </h1>
            <p class="mt-6 text-xl font-monserrat">{{ data?.data?.intro[0].text }}</p>

            <img :src="data?.data?.featured_image?.url" :alt="data?.data?.title"
                class="aspect-video rounded-xl bg-primary-1 object-cover my-16" />

            <div class="max-w-3xl content font-monserrat">
                <PrismicRichText :field="data?.data?.content" />
            </div>
        </div>
    </section>
</template>
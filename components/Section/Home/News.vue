<script setup>
const prismic = usePrismic();
const route = useRoute();
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
    <section :id="content?.id" class="bg-secondary-1 pt-24 pb-16 mt-24">
        <div class="mx-auto container px-5 xl:px-0">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-base font-semibold text-primary-2 font-montserrat">{{ content?.uppertitle }}</h2>
                <p
                    class="block text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl leading-tight text-primary-1 font-montserrant mt-2">
                    {{ content?.title }}
                </p>
            </div>

            <ClientOnly>
                <Carousel v-bind="{
                    itemsToShow: 1,
                    gap: 25,
                    autoplay: 5000,
                    pauseAutoplayOnHover: true,
                    mouseWheel: true,
                    wrapAround: false,
                    breakpoints: {
                        640: {
                            itemsToShow: 3,
                        },
                    }
                }"
                    class="mx-auto w-full mt-10 grid max-w-2xl border-t border-primary-2 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                    <Slide v-for="(item, index) in news?.results" :key="index" :mouse-wheel="{ threshold: 100 }">
                        <article
                            class="relative flex max-w-xl flex-col items-start justify-between h-full transition-colors duration-300 ease-in-out hover:bg-white p-5 rounded-xl">
                            <div class="flex flex-col md:flex-row items-start gap-4 text-xs">
                                <time :datetime="item?.data?.date" class="text-primary-1">{{ item?.data?.date }}</time>
                                <span
                                    class="relative z-10 rounded-full bg-gray-50 px-3 py-0.5 text-xs font-medium text-secondary-1 bg-primary-1">{{
                                        item?.data?.source }}</span>
                            </div>
                            <div class="group relative grow">
                                <h3 class="mt-3 text-lg/6 font-semibold text-primary-1 group-hover:text-primary-2">
                                    <NuxtLink :to="$localePath({ name: 'slug', params: { slug: item?.uid } })">
                                        <span class="absolute inset-0"></span>
                                        {{ item?.data?.title }}
                                    </NuxtLink>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm/6 text-primary-1">
                                    {{ item?.data?.intro?.[0]?.text }}
                                </p>
                            </div>
                        </article>
                    </Slide>

                    <template #addons>
                        <!-- <Navigation /> -->
                        <Pagination />
                    </template>
                </Carousel>
            </ClientOnly>
        </div>
    </section>
</template>

<style>
.carousel__pagination {
    bottom: -46px;
}

.carousel__pagination .carousel__pagination-button {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: #5D7261;
    opacity: 0.5;
}

.carousel__pagination .carousel__pagination-button:hover,
.carousel__pagination .carousel__pagination-button--active {
    background-color: #5D7261 !important;
    opacity: 1;
}
</style>

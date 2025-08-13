<script setup>
const store = useMainStore();
const { locale, messages } = useI18n();

const translatedItems = computed(() => messages.value[locale.value]?.footer || {});
</script>

<template>
    <footer :id="$t('home.contact.id')" class="bg-secondary-1 pt-16">
        <div class="px-5">
            <div class="p-5 md:p-8 lg:px-16 lg:py-16 rounded-xl bg-primary-1">
                <div class="max-w-full mx-auto">
                    <div class="grid grid-cols-1 grid-rows-1 gap-16 lg:grid-rows-1 lg:grid-cols-2">
                        <div
                            class="row-start-2 lg:row-start-1 bg-secondary-1 flex items-end pb-10 justify-center rounded-xl relative overflow-hidden min-h-96">
                            <img :src="translatedItems?.image" loading="lazy"
                                class="absolute inset-0 object-[30%_10%] transform object-cover h-full w-full"
                                :alt="translatedItems?.title">

                            <!-- <NuxtImg :src="translatedItems?.image" width="600" height="800"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px" format="webp" preload
                                fetchpriority="high" :alt="translatedItems?.title"
                                 class="object-top object-cover inset-0 absolute w-full h-full aspect-square" /> -->

                            <div class="flex flex-col items-start justify-start max-w-sm relative">
                            </div>
                        </div>

                        <div class="row-start-1 lg:row-start-auto">
                            <h3
                                class="block text-4xl font-bold font-montserrant tracking-wide md:text-3xl lg:text-5xl leading-tight text-white mb-10">
                                {{ translatedItems?.title }}
                            </h3>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-12 items-center justify-around w-full py-8">
                <p class="text-base text-center md:text-left text-primary-1 whitespace-nowrap">
                    <strong>Mimi Grullón ®</strong> <span class="hidden lg:inline">-</span><br class="lg:hidden">
                    {{ translatedItems?.copyright }} <span class="hidden lg:inline">-</span><br class="lg:hidden">
                    {{ translatedItems?.poweredBy }} <a href="https://holistika.co" target="_blank"
                        rel="noopener noreferrer"
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
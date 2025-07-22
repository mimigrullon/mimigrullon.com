<script setup>
const { messages, locale, t } = useI18n();

const translatedItems = computed(() => messages.value[locale.value]?.home || {});

useSeoMeta({
  description: t('home.hero.title'),
  ogTitle: 'Mimi Grullón',
  ogDescription: t('home.hero.title'),
  ogImage: '/Banner.jpg',
  twitterTitle: 'Mimi Grullón',
  twitterDescription: t('home.hero.title'),
  twitterImage: '/Banner.jpg',
  twitterCard: 'summary'
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
    <div>
        <SectionHomeHero :content="translatedItems?.hero" />

        <SectionHomeExperiences :content="translatedItems?.experiences" />

        <SectionQuote :content="translatedItems?.quote" />

        <SectionVariantContent :content="translatedItems?.move" />

        <SectionVariantContent :content="translatedItems?.projects" :reverse="true" />

        <SectionHomeNews :content="translatedItems?.news" />
    </div>
</template>
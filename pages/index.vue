<script setup>
const { messages, locale } = useI18n();

const translatedItems = computed(() => messages.value[locale.value]?.home || {})
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
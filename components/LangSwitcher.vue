<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
    <ClientOnly>
        <NuxtLink :to="switchLocalePath(availableLocales[0].code)">
            <img :src="availableLocales[0].flag" :alt="availableLocales[0].name" class="h-6 w-auto rounded-sm">
        </NuxtLink>
    </ClientOnly>
</template>
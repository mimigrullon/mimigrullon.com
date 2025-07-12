export default defineNuxtPlugin((nuxtApp) => {
    const store = useMainStore();

    nuxtApp.hook('app:created', async () => {
        await store.fetchData();
    })
})


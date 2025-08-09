<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <section :id="content?.id" class="py-12 lg:py-24 relative px-5 lg:px-0">
        <div class="relative md:h-[50vh] flex items-center justify-center w-full bg-no-repeat bg-fixed bg-secondary-1 container rounded-xl mx-auto drop-shadow-2xl drop-shadow-primary-1/15"
            >
            <div class="relative max-w-7xl mx-auto py-16 px-10">
                <h3
                    class="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight sm:text-balance text-primary-1 font-montserrant">
                    {{ content?.quote }}
                </h3>
                <p v-if="content?.author" class="text-right text-primary-1 mt-6 text-lg">-- <b>{{ content?.author }}</b></p>
            </div>
        </div>
    </section>
</template>
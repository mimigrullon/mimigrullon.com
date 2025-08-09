<script setup>
const store = useMainStore();
const { messages, locale } = useI18n();

const route = useRoute()

const isHomePage = computed(() => route.path === '/' || route.path === '/en')

let offsetTop = ref(0);

onMounted(() => {
    offsetTop.value = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        offsetTop.value = currentScroll;
    });
});

const menuItems = computed(() => messages.value[locale.value]?.menu || {})
</script>

<template>
    <header id="top" class="container mx-auto">
        <nav class="fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out" :class="[
            { 'bg-transparent py-14 px-8': offsetTop === 0 },
            { 'bg-white shadow-md shadow-primary-1/5 px-5 py-8': offsetTop > 0 },
        ]">
            <div class="px-5">
                <div class="relative flex items-center justify-between">
                    <div class="flex items-center flex-shrink-0">
                        <NuxtLink :to="$localePath('index')" target="_parent" :class="[
                            { 'text-secondary-1': offsetTop === 0 },
                            { 'text-primary-1': offsetTop > 0 },
                        ]">
                            <!-- <LogoIsotipo class="block w-auto h-10 lg:hidden" /> -->
                            <Logo class=" w-auto h-10 mt-2 sm:h-16 lg:block" />
                        </NuxtLink>
                    </div>

                    <div class="flex items-center justify-end flex-1 sm:items-stretch">
                        <div class="hidden mr-16 sm:ml-6 lg:flex md:space-x-10 lg:space-x-16 mt-1">
                            <a v-for="(item, index) in menuItems" :key="index"
                                :href="$localePath({ path: '/', hash: `#${item.toLowerCase()}` })" :class="[
                                    'inline-flex items-center text-xl focus:outline-none font-montserrat hover:underline font-bold underline-offset-8',
                                    { 'text-secondary-1 hover:border-secondary-1': offsetTop === 0 },
                                    { 'text-primary-1': offsetTop > 0 },
                                    { 'font-semibold': store.navId === item.toLowerCase() },
                                    { '': store.navId !== item.toLowerCase() },
                                ]">
                                {{ item }}
                            </a>
                        </div>

                        <!-- Mobile menu button -->
                        <button type="button" @click.prevent="store.mobileMenuOpen = true" :class="[
                            'inline-flex items-center justify-center rounded-md lg:hidden focus:outline-none',
                            { 'text-secondary-1 hover:text-secondary-2': offsetTop === 0 },
                            { 'text-primary-1 hover:text-primary-2': offsetTop > 0 },
                        ]" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>

                    <div
                        class="absolute inset-y-0 right-0 items-center hidden lg:flex sm:static sm:inset-auto sm:ml-0 sm:pr-0">
                        <!-- <div class="flex items-center justify-end space-x-6 mr-12">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer"
                                v-for="(item, index) in store.socials" :key="index"
                                class="text-secondary-1 bg-primary-1 size-8 flex items-center justify-center rounded-md hover:bg-primary-3 hover:text-secondary-3 transition-colors duration-300 ease-in-out">
                                <Icon :name="item.icon" size="24px" />
                            </a>
                        </div> -->

                        <LangSwitcher v-if="isHomePage" />
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <transition v-if="store.mobileMenuOpen" enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div id="mobile-menu"
                    class="fixed top-0 bottom-0 left-0 right-0 z-50 px-5 pt-8 origin-top-right bg-primary-1 sm:hidden">
                    <div class="relative h-full p-10 bg-white border rounded-t-lg shadow-xl border-gray-50">
                        <!-- Close mobile menu button -->
                        <button type="button" @click.prevent="store.mobileMenuOpen = false"
                            class="absolute inline-flex items-center justify-center rounded-md top-3 right-3 text-primary-2 hover:text-secondary-2 focus:outline-none"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Close main menu</span>
                            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div class="flex flex-col items-center w-full space-y-8 flex-start">
                            <Logo class="w-2/3 h-auto text-primary-1 mt-16" />

                            <div class="flex flex-col items-center justify-center w-full py-0 my-0 space-y-4">
                                <a v-for="(item, index) in menuItems" :key="index" @click.native="store.mobileMenuOpen = false"
                                    :href="$localePath({ path: '/', hash: `#${item.toLowerCase()}` })" :class="[
                                        'inline-flex items-center text-xl focus:outline-none font-montserrat hover:underline font-normal underline-offset-8',
                                        { 'text-secondary-1 hover:border-secondary-1': offsetTop === 0 },
                                        { 'text-primary-1': offsetTop > 0 },
                                        { 'font-semibold': store.navId === item.toLowerCase() },
                                        { '': store.navId !== item.toLowerCase() },
                                    ]">
                                    {{ item }}
                                </a>
                            </div>

                            <LangSwitcher class="mt-10" v-if="isHomePage" />

                            <div class="flex items-center justify-end space-x-6 mt-10">
                                <a :href="item.link" target="_blank" rel="noopener noreferrer"
                                    v-for="(item, index) in store.socials" :key="index"
                                    class="text-secondary-1 bg-primary-1 size-8 flex items-center justify-center rounded-md hover:bg-primary-3 hover:text-secondary-3 transition-colors duration-300 ease-in-out">
                                    <Icon :name="item.icon" size="24px" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>
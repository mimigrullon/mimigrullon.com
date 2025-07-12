<script setup>
const store = useMainStore();

let offsetTop = ref(0)
onMounted(() => {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        offsetTop.value = currentScroll;
    });
});
</script>

<template>
    <header id="top" class="container mx-auto">
        <nav class="fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out" :class="[
            { 'bg-transparent py-14 px-8': offsetTop === 0 },
            { 'bg-white shadow-md shadow-primary-1/5 px-5 py-8': offsetTop > 0 },
        ]">
            <div class="px-8">
                <div class="relative flex items-center justify-between">
                    <div class="flex items-center flex-shrink-0">
                        <button :class="[
                            { 'text-secondary-1': offsetTop === 0 },
                            { 'text-primary-1': offsetTop > 0 },
                        ]">
                            <LogoIsotipo class="block w-auto h-10 lg:hidden" />
                            <Logo class="hidden w-auto h-16 lg:block" />
                        </button>
                    </div>

                    <div class="flex items-center justify-end flex-1 sm:items-stretch">
                        <div class="hidden mr-16 sm:ml-6 lg:flex md:space-x-10 lg:space-x-16 mt-1">
                            <button v-for="(item, index) in store.menu" :class="[
                                'inline-flex items-center text-xl focus:outline-none font-montserrat hover:underline font-normal underline-offset-8',
                                { 'text-secondary-1 hover:border-secondary-1': offsetTop === 0 },
                                { 'text-primary-1': offsetTop > 0 },
                                { 'font-semibold': store.navId === item.toLowerCase() },
                                { '': store.navId !== item.toLowerCase() },
                            ]">
                                {{ item }}
                            </button>
                        </div>

                        <!-- Mobile menu button -->
                        <button type="button"
                            class="inline-flex items-center justify-center rounded-md lg:hidden text-primary-1 hover:text-primary-2 focus:outline-none"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <div
                        class="absolute inset-y-0 right-0 items-center hidden pr-2 lg:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="flex items-center justify-end space-x-6">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer"
                                v-for="(item, index) in store.socials" :key="index"
                                class="text-secondary-1 bg-primary-1 size-8 flex items-center justify-center rounded-md hover:bg-primary-3 hover:text-secondary-3 transition-colors duration-300 ease-in-out">
                                <Icon :name="item.icon" size="24px" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <transition v-if="store.mobileMenuOpen" enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div id="mobile-menu"
                    class="fixed top-0 bottom-0 left-0 right-0 z-50 px-5 pt-8 origin-top-right bg-white sm:hidden">
                    <div class="relative h-full p-10 bg-white border rounded-t-lg shadow-xl border-gray-50">
                        <!-- Close mobile menu button -->
                        <button type="button"
                            class="absolute inline-flex items-center justify-center rounded-md top-3 right-3 text-primary-dark hover:text-primary focus:outline-none"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Close main menu</span>
                            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div class="flex flex-col items-center w-full space-y-8 flex-start">
                            <Logo class="w-2/3 h-auto" />

                            <div class="flex flex-col items-center justify-center w-full py-0 my-0 space-y-4">
                                <button :class="[
                                    'font-bold border-primary-dark border-b-2'
                                    // { 'font-bold border-primary-dark border-b-2': store.navId === item.toLowerCase() },
                                    // { 'font-light border-b': store.navId !== item.toLowerCase() },
                                ]"
                                    class="items-center block text-xl border-transparent font-lato hover:border-primary-dark text-primary-dark focus:outline-none visibility-menu">
                                    <!-- {{ $rt(item) }} -->
                                    Lorem 123
                                </button>
                            </div>

                            <LangSwitcher size="size-8" />

                            <div class="flex items-center justify-end space-x-3">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-8 h-8 text-secondary-dark hover:text-secondary-light"
                                        viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                                    </svg>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-8 h-8 text-secondary-dark hover:text-secondary-light"
                                        viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>
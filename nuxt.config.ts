import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],

  devServer: {
    port: 3001,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["~/assets/css/main.css"],

  i18n: {
    baseUrl: "http://localhost:3000",
    defaultLocale: "es",
    locales: [
      { code: "es", language: "es-ES", name: "Español", file: "es.json" },
      { code: "en", language: "en-US", name: "English", file: "en.json" },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  vite: {
    // server: {
    //   allowedHosts: true
    // },
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      wp: {
        url: process.env.WORDPRESS_URL,
        apiUrl: process.env.WORDPRESS_API_URL,
        password: process.env.WORDPRESS_PASSWORD,
      },
      motion: {
        directives: {
          "scale-once": {
            initial: {
              opacity: 0,
              scale: 0.4,
            },
            enter: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1000,
                delay: 200,
              },
            },
          },
          "fadein-once": {
            initial: {
              opacity: 0,
              scale: 0.5,
            },
            visibleOnce: {
              opacity: 1,
              transition: {
                duration: 1000,
                delay: 200,
              },
            },
          },
          "fadein-up-once": {
            initial: {
              opacity: 0,
              y: 50,
            },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1000,
                delay: 200,
              },
            },
          },
          "fadein-down-enter": {
            initial: {
              opacity: 0,
              y: -100,
            },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
              },
            },
          },
        },
      },
    },
  },
});

import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
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
    "@nuxtjs/prismic"
  ],

  devServer: {
    port: 3001,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["~/assets/css/main.css"],

  // Flags: https://flagicons.lipis.dev/
  i18n: {
    baseUrl: "http://localhost:3001",
    defaultLocale: "es",
    locales: [
      { code: "es", language: "es-do", name: "Español", file: "es.ts", flag: "https://flagicons.lipis.dev/flags/4x3/do.svg" },
      { code: "en", language: "en-us", name: "English", file: "en.ts", flag: "https://flagicons.lipis.dev/flags/4x3/us.svg" },
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

  prismic: {
    endpoint: apiEndpoint || repositoryName
  }
});
import { defineStore } from 'pinia';

export const useMainStore = defineStore('index', {
    state: () => ({
        initData: {},

        navId: null,
        mobileMenuOpen: false,

        socials: {
            instagram: {
                link: "https://instagram.com/mimigrullon/",
                icon: "typcn:social-instagram"
            },
            linkedin: {
                link: "https://www.linkedin.com/in/mimigrull%C3%B3n/",
                icon: "typcn:social-linkedin"
            },
            whatsapp: {
                link: "https://api.whatsapp.com/send?phone=18298282884&text=¡Hola! Gracias por tu mensaje. En unos minutos estaré respondiéndote.",
                icon: "stash:social-whatsapp"
            }
        }

    }),
    getters: {
    },
    actions: {
        setNavId(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" })
            this.navId = id
        },
    },
});
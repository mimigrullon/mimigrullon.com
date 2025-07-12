import { defineStore } from 'pinia';

export const useMainStore = defineStore('index', {
    state: () => ({
        initData: {},

        navId: null,
        mobileMenuOpen: false,
        menu: [
          "Experiencias",
          "Noticias",
          "Contacto",
        ],
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

        async fetchData() {
            // const runtimeConfig = useRuntimeConfig();

            // try {
            //     const [cases, services, clients, testimonials] = await Promise.all([
            //         $fetch(`${runtimeConfig.public.wp.apiUrl}/cases/`, {
            //             query: { status: 'publish' },
            //             params: {
            //                 _fields: 'title,menu_order,slug,acf',
            //                 orderBy: 'menu_order',
            //                 order: 'desc',
            //             },
            //         }),
            //         $fetch(`${runtimeConfig.public.wp.apiUrl}/services/`, {
            //             query: { status: 'publish' },
            //             params: {
            //                 _fields: 'title,slug,menu_order,acf',
            //                 orderBy: 'menu_order',
            //                 order: 'desc',
            //             }
            //         }),
            //         $fetch(`${runtimeConfig.public.wp.apiUrl}/clients?_embed`, {
            //             query: { status: 'publish' },
            //         }),
            //         $fetch(`${runtimeConfig.public.wp.apiUrl}/testimonials/`, {
            //             query: { status: 'publish' },
            //             params: {
            //                 _fields: 'title,acf'
            //             }
            //         }),
            //     ]);

            //     const casesOrdered = cases.sort((a, b) => a.menu_order - b.menu_order);
            //     const servicesOrdered = services.sort((a, b) => a.menu_order - b.menu_order);

            //     this.initData = { cases: casesOrdered, services: servicesOrdered, clients, testimonials };

            // } catch (error) {
            //     console.error('Error fetching data <fetchData>:', error)
            //     // this.error = error.message || 'An error occurred'
            // }
        },
    },
});
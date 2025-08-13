export default defineI18nLocale(async (locale) => {
  return {
    menu: ["Experiences", "News", "Contact"],
    home: {
      hero: {
        id: "hero",
        tags: [
          "Executive coach",
          "Social entrepreneur",
          // "Leader in governance and human transformation",
        ],
        image: "/Banner_2.webp",
        title:
          "Accompanying leaders and organizations towards their most authentic transformation",
        buttons: [
          {
            label: "Get to know my story",
            hash: "#experiences",
          },
          {
            label: "Contact me",
            hash: "#contact",
          },
        ],
      },
      experiences: {
        id: "experiences",
        uppertitle: "About me",
        title: "A life guided by purpose and transformation",
        intro:
          "<b>INSEAD-certified</b> executive coach with a deep vocation for human development. My psychodynamic approach allows me to discover and work on the invisible dynamics that influence decisions, relationships and results within organizations and teams.",
        years: `Years <br class="hidden lg:block"> of experience`,
        text: "I have played key roles in the corporate world, entrepreneurship and social impact. My background includes <b>CHANEL</b> in Paris, the Dominican Delegation to UNESCO, and an active role in institutions such as <b>PACAM</b>, <b>ICF</b> and <b>Dimitrova Foundation</b>.",
        features: [
          {
            icon: `idiomas.svg`,
            label: `Languages<br class="hidden md:block">Spanish, English and French`,
          },
          {
            icon: `acompanamiento.svg`,
            label: `Accompanying<br class="hidden md:block">in person or remotely`,
          },
          {
            icon: `coach.svg`,
            label: `Corporate<br class="hidden md:block">individual and group coach`,
          },
        ],
      },
      quote: {
        id: "quote",
        image: "https://placehold.co/1024x720",
        quote: `"My work is not just about goals and results, but about what happens underneath: the emotions, the untold stories, the systems that shape us."`,
        author: "Mimi Grullón",
      },
      move: {
        image: "_GRAPH_en.webp",
        uppertitle: "What drives me",
        title: "Governance with purpose, coaching with human sense",
        intro: "",
        keys: [
          `<b>Human transformation:</b> Deep and strategic accompaniment to leaders and teams to achieve sustainable changes.`,
          `<b>Psychodynamic approach:</b> A holistic view that goes beyond the surface, connecting emotions, systems and culture. `,
          `<b>Real social impact:</b> Active engagement with vulnerable populations, especially young people with autism.`,
          `<b>Ethical education and leadership:</b> Ongoing training in the best schools in the world with a focus on sustainability, conscious luxury and governance.`,
        ],
        list: [
          "Family members",
          "Owners (shareholders)",
          "Individuals who work in the business",
          "Family members who are owners",
          "Owners who work in the business",
          "Family members who work in the business",
          "Owners who are family members and work in the business",
        ],
      },
      projects: {
        image: "/IMG_1486.webp",
        uppertitle: "Projects and Initiatives",
        title: "Where action, compassion, and leadership converge",
        intro: "",
        keys: [
          `<b>Nuestra Casita RD:</b> Pioneer center for adolescents on the autism spectrum in the Dominican Republic. An initiative that unites inclusion, educational innovation and human sensitivity, `,
          `<b>Board of directors and mentoring:</b> Active member in several foundations and NGOs. Provides strategic vision on governance, women's leadership and social innovation.`,
          `<b>Coach and facilitator:</b> Designs and implements individual and group coaching processes, with measurable impact on organizational culture.`,
        ],
      },
      news: {
        id: "news",
        uppertitle: "Latest",
        title: "News and participation",
      },
      contact: {
        id: "contact",
      },
    },
    footer: {
      image: "/9R8A2918-EDIT-web.webp",
      title: "I'm just a message away",
      nameField: "First name",
      lastnameField: "Last name",
      emailField: "Email address",
      phoneField: "Phone number",
      messageField: "Message",
      btnSubmit: "Send",
      btnSubmitting: "Sending...",
      btnSubmitted: "Sent",
      submitError: "Error, please try again.",
      copyright: "All rights reserved",
      poweredBy: "Developed by",
    },
  };
});

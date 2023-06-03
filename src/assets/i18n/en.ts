import { LanguageTemplate } from './_template';

export const en: LanguageTemplate = {
  MAIN: {
    GENERAL: {
      LANGUAGE: "Language",
      ENUS: "EN-US",
      PTBR: "PT-BR",
    },
    MENU: {
      TITLE: 'SamKarv',
      HOME: 'Home',
      ABOUT: 'About',
      EXPERIENCE: 'Experience',
      PROJECTS: 'Projects',
      CONTACT: 'Contact',
      COPYRIGHT: '© 2023 Samuel de Carvalho',
    },
    CONTENT: {
      HOME_SECTION: {
        TITLE: 'Samuel de Carvalho',
        SUBTITLES: {
          '1': 'Software Developer',
          '2': 'Software Developer',
          '3': 'Software Developer',
          '4': 'Software Developer',
        },
      },
      ABOUT_SECTION: {
        TITLE: 'About',
        DESCRIPTION:
          "Hello! I am Samuel de Carvalho, Brazilian and i am 23 years old. I have a rich experience as a software developer. I worked both in modeling/architecting and back-end/front-end development of WEB applications.",
        CV_BUTTON: 'Download CV',
      },

      EXPERIENCE_SECTION: {
        TITLE: 'Experience',
        EXPERIENCES: {
          '1': {
            TIMING: 'jul 2018 - jan 2019  (7 months)',
            DESCRIPTION:
              'Technical support for FDM-RepRap 3D printers. Hardware installation instruction, software instruction (Slic3r and PrusaSlicer), creation of knowledge base and articles, help with questions.',
            TITLE: 'Help desk - Boa Impressão 3D',
          },
          '2': {
            TIMING: 'feb 2019 - apr 2021  (2 years 3 months)',
            DESCRIPTION:
              'Seller of FDM-RepRap 3D printers and supplies. Retail and B2B sales, meetings with companies, presentations at schools and universities, exhibition of 3D printers at events, prospecting, follow-up, etc.',
            TITLE: 'Seller - Boa Impressão 3D',
          },
          '3': {
            TIMING: 'apr 2021 - jul 2021  (4 months)',
            DESCRIPTION:
              'Technician in pharmaceutical system. Help with questions and problem solving, SQL analysis, extracting reports via database, creating MySQL VIEWS, Data Centralization specialist (CDB).',
            TITLE: 'IT Analyst - Automatiza Sistemas',
          },
          '4': {
            TIMING: 'jul 2021 - jan 2022  (7 months)',
            DESCRIPTION:
              'Programmer. Features implementation and maintenance in desktop legacy system, WindowsForms, .NET (C# and Vb.NET).',
            TITLE: 'Programmer - Automatiza Sistemas',
          },
          '5': {
            TIMING: 'jan 2022 - sep 2022  (9 months)',
            DESCRIPTION:
              'Fullstack Developer junior. Creation of systems and APIs, implementation and maintenance in new and legacy systems. Backend development with ASP.NET Core and Nest.Js (Node). Front-end development with React and ASP.NET MVC.',
            TITLE: 'Software Developer I - Automatiza Sistemas',
          },
          '6': {
            TIMING: 'sep 2022 - jan 2023  (5 months)',
            DESCRIPTION:
              'Fullstack Developer II. Implementation and maintenance of a WEB system, using Angular, TypeScript, ASP.NET Core, .NET Core (C#) and EntityFramework.',
            TITLE: 'Fullstack Developer II - WMI',
          },
          '7': {
            TIMING: 'feb 2023 - may 2023  (4 months)',
            DESCRIPTION:
              'Modeling and architecture of new applications and implementations, requirements validation and maintenance, team and project management, front-end (Angular, TypeScript) and back-end (ASP.NET Core, .NET Core, C#, MySQL and EntityFramework) development.',
            TITLE: 'Tech Leader I - WMI',
          },
          '8': {
            TIMING: 'may 2023 - Now',
            DESCRIPTION:
              'Modeling and architecture of new applications and implementations, requirements validation and maintenance, team and project management, front-end (Angular, TypeScript) and back-end (ASP.NET Core, .NET Core, C#, MySQL and EntityFramework) development.',
            TITLE: 'Tech Leader II - WMI',
          },
        },
      },
      PROJECTS_SECTION: {
        TITLE: 'Projects',
        PROGRESS: 'MVP Progress (Minimum Viable Product):',
        OPEN_REPO: 'Open repository on GitHub',
        PRIVATE_REPO: 'Private repository',
        VIEW_APP: 'Open app',
        PROJECTS: {
          '1': {
            TITLE: 'PigeonBox',
            DESCRIPTION:
              'Chat with authentication. Application for real-time application development training with SignalR. In addition to practicing technologies, good practices, architectures and standards: DDD, CleanCode, Clean Architecture, CQRS, Identity.',
          },
          '2': {
            TITLE: 'PetSavior',
            DESCRIPTION:
              'Platform to adopt and publish adoption of pets. Application for Fullstack WEB development training, applying rich domain methodologies, DDD, EDA, and for practicing architecture, standards and modern technologies, such as messaging, CleanCode, CleanArchitecture and CQS, and also practicing front-end development with Angular.',
          },
          '3': {
            TITLE: 'B2Store',
            DESCRIPTION:
              'Ecommerce SaaS platform, providing generic solutions for users to have the opportunity to open their small and medium-sized virtual store.',
          },
          '4': {
            TITLE: 'Meu Portfólio',
            DESCRIPTION:
              'Exactly this site you are viewing 😁. Site to store my experiences, my projects, updates about me, my professional achievements and my contacts.',
          },
          '5': {
            TITLE: 'Nossa Garagem (Landing Page)',
            DESCRIPTION: `Presentation page for the 'Nossa Garagem' brand. Brand presentation, demos, customer feedback, etc. @nossa_garagem_oficial`
          }
        },
      },
      CONTACT_SECTION: {
        DESCRIPTION: "Contact me whenever you want!"
      }
    },
  },
};

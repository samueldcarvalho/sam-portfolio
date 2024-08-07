import { LanguageTemplate } from './_template';

export const ptbr: LanguageTemplate = {
  MAIN: {
    GENERAL: {
      LANGUAGE: "Linguagem",
      ENUS: "EN-US",
      PTBR: "PT-BR",
    },
    MENU: {
      TITLE: 'SamKarv',
      HOME: 'Início',
      ABOUT: 'Sobre mim',
      EXPERIENCE: 'Experiência',
      PROJECTS: 'Projetos',
      CONTACT: 'Contato',
      COPYRIGHT: '© 2023 Samuel de Carvalho',
    },
    CONTENT: {
      HOME_SECTION: {
        TITLE: 'Samuel de Carvalho',
        SUBTITLES: {
          '1': 'Desenvolvedor de Software',
          '2': 'Software Developer',
          '3': 'Software Developer',
          '4': 'Software Developer',
        },
      },
      ABOUT_SECTION: {
        TITLE: 'Sobre mim',
        DESCRIPTION: `Olá! Eu sou Samuel de Carvalho, sou brasileiro e tenho <{age}> anos. Tenho uma rica experiência como
          desenvolvedor de Software. Trabalhei tanto na modelagem/arquitetura quanto no desenvolvimento back-end/front-end de aplicações WEB.`,
        CV_BUTTON: 'Baixar Currículo',
      },
      EXPERIENCE_SECTION: {
        TITLE: 'Experiência',
        EXPERIENCES: {
          '1': {
            TIMING: 'jul 2018 - jan 2019  (7 meses)',
            DESCRIPTION:
              'Suporte técnico de impressoras 3D FDM-RepRap. Instrução de instalação de hardware, instrução de manuseio de software (Slic3r e PrusaSlicer), criação de artigos de base de conhecimento, auxílio com dúvidas.',
            TITLE: 'Help Desk - Boa Impressão 3D',
          },
          '2': {
            TIMING: 'fev 2019 - abr 2021  (2 anos 3 meses)',
            DESCRIPTION:
              'Vendedor de impressoras 3D FDM-RepRap e insumos. Vendas no varejo e B2B, reuniões com empresas, apresentações em escolas e universidades, exposição das impressoras 3D em eventos, prospecção, follow-up.',
            TITLE: 'Vendedor - Boa Impressão 3D',
          },
          '3': {
            TIMING: 'abr 2021 - jul 2021  (4 meses)',
            DESCRIPTION:
              'Técnico em sistema farmacêutico. Auxílio com dúvidas e resolução de problemas, análise SQL, extração de relatórios via banco de dados, criação de MySQL VIEWS, especialista em Centralização de dados (CDB).',
            TITLE: 'Analista TI - Automatiza Sistemas',
          },
          '4': {
            TIMING: 'jul 2021 - jan 2022  (7 meses)',
            DESCRIPTION:
              'Programador. Implementação de features e manutenção em sistema legado desktop, WindowsForms, .NET (C# e Vb.NET).',
            TITLE: 'Programador - Automatiza Sistemas',
          },
          '5': {
            TIMING: 'jan 2022 - set 2022  (9 meses)',
            DESCRIPTION:
              'Desenvolvedor Fullstack Jr. Criação de sistemas e APIs, implementação e manutenção em sistemas novos e legados. Desenvolvimento de back-end com ASP.NET Core e Nest.Js (Node). Desenvolvimento front-end com React e ASP.NET MVC.',
            TITLE: 'Desenvolvedor Jr - Automatiza Sistemas',
          },
          '6': {
            TIMING: 'set 2022 - jan 2023  (5 meses)',
            DESCRIPTION:
              'Desenvolvedor Fullstack. Implementação e manutenção em sistema WEB, utilizando Angular, TypeScript, ASP.NET Core, .NET Core (C#) e EntityFramework.',
            TITLE: 'Desenvolvedor Fullstack - WMI',
          },
          '7': {
            TIMING: 'fev 2023 - mai 2023  (4 meses)',
            DESCRIPTION:
              'Modelagem e arquitetura de novas aplicações e implementações, validação de requisitos e manutenção, gestão de equipe e projetos, desenvolvimento front-end (Angular, TypeScript) e back-end (ASP.NET Core, .NET Core, C#, MySQL e EntityFramework).',
            TITLE: 'Tech Leader Jr - WMI',
          },
          '8': {
            TIMING: 'mai 2023 - Atual',
            DESCRIPTION:
              'Modelagem e arquitetura de novas aplicações e implementações, validação de requisitos e manutenção, gestão de equipe e projetos, desenvolvimento front-end (Angular, TypeScript) e back-end (ASP.NET Core, .NET Core, C#, MySQL e EntityFramework).',
            TITLE: 'Tech Leader Pleno - WMI',
          },
        },
      },
      PROJECTS_SECTION: {
        TITLE: 'Projetos',
        PROGRESS: 'Progresso MVP (Minimum Viable Product):',
        OPEN_REPO: 'Abrir repositório no GitHub',
        PRIVATE_REPO: 'Repositório privado',
        VIEW_APP: 'Abrir aplicação',
        NEW_SOON: "Em breve",
        VIEW_TECHNOLOGIES: "Ver tecnologias",
        PROJECTS: {
          '1': {
            TITLE: 'PigeonBox',
            DESCRIPTION:
              'Chat com autenticação. Aplicação para treinamento de desenvolvimento de aplicações real-time com SignalR. Além de praticar tecnologias, boas práticas, arquiteturas e padrões: DDD, CleanCode, Clean Architecture, CQRS, Identity.',
          },
          '2': {
            TITLE: 'PetSavior',
            DESCRIPTION:
              'Plataforma para adotar e publicar adoção de pets. Aplicação para treinamento de desenvolvimento WEB Fullstack, aplicando metodologias de domínio rico, DDD, EDA, e para prática de arquitetura, padrões e tecnologias modernas, como mensageria, CleanCode, CleanArchitecture e CQS, e também prática de desenvolvimento front-end com Angular.',
          },
          '3': {
            TITLE: 'SamStore',
            DESCRIPTION:
              'Plataforma SaaS de Ecommerce, fornecendo soluções genéricas para usuários terem a oportunidade de abrirem sua loja virtual de pequeno e médio porte.',
          },
          '4': {
            TITLE: 'Meu Portfólio',
            DESCRIPTION:
              'Exatamente este site que você está visualizando 😁. Site para armazenar as minhas experiências, meus projetos, atualizações sobre mim, minhas conquistas profissionais e meus contatos.',
          },
          '5': {
            TITLE: 'Nossa Garagem (Landing Page)',
            DESCRIPTION: `Página de apresentação para a marca 'Nossa Garagem'. Apresentação da marca, demonstrações, feedback de clientes, etc. @nossa_garagem_oficial`
          },
          '6': {
            TITLE: 'RifaHub',
            DESCRIPTION: 'Uma plataforma para criar a gerenciar rifas online. Esse foi um projeto incrível para praticar e aprimorar as minhas habilidades como arquiteto e desenvolvedor fullstack .NET e Angular.'
          }
        },
      },
      CONTACT_SECTION: {
        DESCRIPTION: "Entre em contato comigo quando quiser!"
      }
    },
  },
};

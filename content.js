/*
  CONTENT CONFIGURATION
  This first draft was assembled from previously shared project context.
  It is NOT a complete automatic export of the private Notion portfolio.
  Replace text with approved case-study wording and add genuine project images before publishing.
  Add an email/LinkedIn URL below when you want real contact buttons to appear.
*/
window.PORTFOLIO_SETTINGS = {
  email: '',              // e.g. hello@yourdomain.com
  linkedin: 'https://www.linkedin.com/in/caroline-pierozan/',           // e.g. https://www.linkedin.com/in/your-handle/
  notion: 'https://carolinepierozan.notion.site/Caroline-s-Private-Portfolio-050c1d70624149b7b446dc70efcaa0da',
  defaultLanguage: 'en'
};

window.PORTFOLIO_TEXT = {
  en: {
    skip: 'Skip to content', navWork:'Work', navApproach:'Approach',navAbout:'About',navContact:"Let's connect",
    eyebrow:"hi there, i'm caroline!", heroA:'Designing with',heroB:'curiosity,',heroC:'care & a little',heroD:'magic.',
    heroDescription:"I'm a Senior Product Designer & UX Researcher turning complex problems into thoughtful, accessible digital experiences.",viewWork:'Explore my work',moreAbout:'A little about me',heroBottom:'Product design · UX research · Accessibility',
    workKicker:'selected work',workTitle:'Little ideas. <em>Big impact.</em>',workIntro:'A few stories about making complicated experiences feel a little more human.',
    all:'All projects',product:'Product design',research:'UX research',accessibility:'Accessibility',visualNote:'Project previews and illustrations come from the original Notion portfolio. Some projects are concepts or studies, not launched products.',
    approachKicker:'how I think',approachTitle:'Good design begins with <em>good questions.</em>',approachLead:'My favorite work happens where curiosity meets clarity — blending evidence, empathy, and craft.',
    principle1Title:'Listen first',principle1Desc:'Understand real people, their contexts, and what gets in the way.',principle2Title:'Make it make sense',principle2Desc:'Untangle complex systems into clear, approachable journeys.',principle3Title:'Design for everyone',principle3Desc:'Treat accessibility and inclusion as foundations, not final checks.',
    aboutKicker:'the person behind the pixels',aboutTitle:'A designer with <em>heart</em> and a curious mind.',aboutP1:"Hi! I'm Caroline, a Senior Product Designer and UX Researcher based in Brazil. I enjoy discovering what people really need — and translating those insights into experiences that feel intuitive, inclusive and useful.",aboutP2:'My background spans complex B2B products, qualitative and quantitative research, design systems, and digital accessibility. I believe meaningful design is equal parts deep thinking and gentle details.',originalNotion:'See my original Notion portfolio',
    contactKicker:'the next chapter',contactTitle:"Let's make something <em>lovely</em> together.",contactDesc:"Whether it's a tricky product problem or a thoughtful idea, I'd love to hear about it.",getInTouch:'Visit my portfolio',emailMe:'Send an email',linkedin:'Find me on LinkedIn',footer:'Made with curiosity & care.',backTop:'Back to top',
    projectExplore:'Explore case',caseLabel:'case study',backToWork:'Back to work',caseContext:'The context',caseFocus:'What I explored',caseRole:'My contribution',caseHighlights:'Areas of work',caseNote:'Read the full case study, based on the original Notion export, by selecting its project card.',caseNext:'Next project',caseProjects:'Selected work',empty:'No projects match this filter.'
  },
  pt: {
    skip:'Pular para o conteúdo',navWork:'Projetos',navApproach:'Abordagem',navAbout:'Sobre',navContact:'Vamos conversar',
    eyebrow:'oi, eu sou a caroline!',heroA:'Criando com',heroB:'curiosidade,',heroC:'cuidado e um',heroD:'toque de magia.',
    heroDescription:'Sou Senior Product Designer e UX Researcher e transformo problemas complexos em experiências digitais cuidadosas e acessíveis.',viewWork:'Explorar projetos',moreAbout:'Um pouco sobre mim',heroBottom:'Product Design · UX Research · Acessibilidade',
    workKicker:'projetos selecionados',workTitle:'Pequenas ideias. <em>Grandes impactos.</em>',workIntro:'Algumas histórias sobre tornar experiências complexas mais humanas.',
    all:'Todos os projetos',product:'Product Design',research:'UX Research',accessibility:'Acessibilidade',visualNote:'As prévias dos projetos são imagens do portfólio original no Notion. Alguns projetos são conceituais, não produtos lançados.',
    approachKicker:'como eu penso',approachTitle:'Um bom design começa com <em>boas perguntas.</em>',approachLead:'Meu trabalho favorito acontece quando a curiosidade encontra a clareza — combinando evidências, empatia e cuidado.',
    principle1Title:'Escutar primeiro',principle1Desc:'Entender as pessoas, seus contextos e as barreiras que encontram.',principle2Title:'Dar sentido ao complexo',principle2Desc:'Transformar sistemas complexos em jornadas claras e acolhedoras.',principle3Title:'Criar para todas as pessoas',principle3Desc:'Tratar acessibilidade e inclusão como ponto de partida, não como revisão final.',
    aboutKicker:'a pessoa por trás dos pixels',aboutTitle:'Uma designer com <em>coração</em> e mente curiosa.',aboutP1:'Oi! Sou Caroline, Senior Product Designer e UX Researcher no Brasil. Adoro descobrir do que as pessoas realmente precisam e traduzir esses aprendizados em experiências intuitivas, inclusivas e úteis.',aboutP2:'Minha trajetória envolve produtos B2B complexos, pesquisa qualitativa e quantitativa, design systems e acessibilidade digital. Acredito que experiências relevantes nascem de pensamento profundo e cuidado com os detalhes.',originalNotion:'Ver meu portfólio original no Notion',
    contactKicker:'o próximo capítulo',contactTitle:'Vamos criar algo <em>especial</em> juntas?',contactDesc:'Seja um problema complexo de produto ou uma ideia cheia de carinho, adoraria conversar.',getInTouch:'Visitar meu portfólio',emailMe:'Enviar e-mail',linkedin:'Me encontrar no LinkedIn',footer:'Feito com curiosidade e carinho.',backTop:'Voltar ao topo',
    projectExplore:'Ver projeto',caseLabel:'estudo de caso',backToWork:'Voltar aos projetos',caseContext:'O contexto',caseFocus:'O que explorei',caseRole:'Minha contribuição',caseHighlights:'Frentes de trabalho',caseNote:'Abra o projeto para conferir o estudo de caso completo, baseado no conteúdo original do Notion.',caseNext:'Próximo projeto',caseProjects:'Projetos selecionados',empty:'Nenhum projeto corresponde ao filtro.'
  }
};

/* All project descriptions are EDITABLE DRAFTS. No performance metrics or outcomes are asserted. */
window.PORTFOLIO_PROJECTS = [
  {
    "id": "agent-accessibility",
    "visual": "chat",
    "cover": "media/41-92f957.webp",
    "type": [
      "product",
      "research",
      "accessibility"
    ],
    "tags": [
      "Product Design",
      "UX Research",
      "Accessibility"
    ],
    "en": {
      "title": "Zenvia Live Chat · Agent",
      "summary": "Making a complex live-chat workspace more accessible, usable, and consistent through research-led interface redesign.",
      "subtitle": "Research, design system and accessibility"
    },
    "pt": {
      "title": "Zenvia Live Chat · Agent",
      "summary": "Redesign da plataforma de atendimento com foco em acessibilidade, usabilidade e evolução do design system.",
      "subtitle": "Research, design system and accessibility"
    }
  },
  {
    "id": "admin-dashboard",
    "visual": "chat",
    "cover": "media/25-ca7d1a.webp",
    "type": [
      "product",
      "research",
      "accessibility"
    ],
    "tags": [
      "Product Design",
      "UX Research",
      "Accessibility"
    ],
    "en": {
      "title": "Zenvia · Admin Dashboard",
      "summary": "Discovering what metrics truly matter to managers and redesigning the dashboard around clear, actionable information.",
      "subtitle": "Research-backed dashboard redesign"
    },
    "pt": {
      "title": "Zenvia · Admin Dashboard",
      "summary": "Pesquisa com gestores e redesign de dashboard, priorizando métricas relevantes e uma experiência mais acessível.",
      "subtitle": "Research-backed dashboard redesign"
    }
  },
  {
    "id": "ai-productivity",
    "visual": "chat",
    "cover": "media/14-48aee2.webp",
    "type": [
      "product",
      "research"
    ],
    "tags": [
      "AI & UX",
      "Product Design",
      "UX Research"
    ],
    "en": {
      "title": "AI for Productivity",
      "summary": "Exploring and prioritizing AI-assisted features for live-chat agents, including conversation summaries grounded in discovery research.",
      "subtitle": "AI feature discovery and design"
    },
    "pt": {
      "title": "AI for Productivity",
      "summary": "Descoberta, priorização e design de funcionalidades com IA, incluindo resumos de conversas para agentes.",
      "subtitle": "AI feature discovery and design"
    }
  },
  {
    "id": "product-analytics",
    "visual": "chat",
    "cover": "media/17-f752c9.webp",
    "type": [
      "research"
    ],
    "tags": [
      "Product Analytics",
      "UX Research",
      "FullStory"
    ],
    "en": {
      "title": "Product Analytics & Feature Adoption",
      "summary": "Turning FullStory behavior and adoption data into actionable improvements, from troubleshooting a critical issue to monitoring launches.",
      "subtitle": "Feature adoption and product decisions"
    },
    "pt": {
      "title": "Product Analytics & Feature Adoption",
      "summary": "Monitoramento de adoção e comportamento no FullStory para orientar melhorias contínuas e decisões de produto.",
      "subtitle": "Feature adoption and product decisions"
    }
  },
  {
    "id": "wms-port",
    "visual": "chat",
    "cover": "media/71-2ef169.webp",
    "type": [
      "product"
    ],
    "tags": [
      "Product Design",
      "Logistics",
      "Tablet"
    ],
    "en": {
      "title": "Portonave WMS",
      "summary": "Designing operational tablet workflows for port workers, with an emphasis on clarity under tight constraints and complex tasks.",
      "subtitle": "Tablet workflows for port operations"
    },
    "pt": {
      "title": "Portonave WMS",
      "summary": "Fluxos operacionais para tablets em logística portuária, considerando restrições de tela e tarefas complexas.",
      "subtitle": "Tablet workflows for port operations"
    }
  },
  {
    "id": "allfly-checkout",
    "visual": "chat",
    "cover": "media/70-ddc2c2.webp",
    "type": [
      "product",
      "research"
    ],
    "tags": [
      "Product Design",
      "E-commerce",
      "UX Heuristics"
    ],
    "en": {
      "title": "AllFly · Flight & Checkout",
      "summary": "Simplifying flight selection and checkout through focused benchmarking, usability heuristics and consistent interaction patterns.",
      "subtitle": "Flight booking experience redesign"
    },
    "pt": {
      "title": "AllFly · Flight & Checkout",
      "summary": "Redesign da seleção de voos e checkout com benchmarking, heurísticas e maior clareza visual.",
      "subtitle": "Flight booking experience redesign"
    }
  },
  {
    "id": "carbon-crm",
    "visual": "chat",
    "cover": "media/47-a2b16f.webp",
    "type": [
      "product"
    ],
    "tags": [
      "Product Design",
      "CRM",
      "Design Challenge"
    ],
    "en": {
      "title": "Carbon CRM",
      "summary": "A one-day CRM design challenge exploring scannable contact tables, filtering, quick actions and opportunity management.",
      "subtitle": "Independent one-day design challenge"
    },
    "pt": {
      "title": "Carbon CRM",
      "summary": "Desafio de design de CRM com tabelas, filtros, ações rápidas e gestão de oportunidades.",
      "subtitle": "Independent one-day design challenge"
    }
  },
  {
    "id": "nexdoor",
    "visual": "chat",
    "cover": "media/54-3c8070.webp",
    "type": [
      "product",
      "research"
    ],
    "tags": [
      "UX Research",
      "Mobile",
      "Concept"
    ],
    "en": {
      "title": "Nexdoor",
      "summary": "A condominium communication app concept developed through survey research, wireframes and a functional prototype.",
      "subtitle": "Research-led app concept"
    },
    "pt": {
      "title": "Nexdoor",
      "summary": "Conceito de aplicativo para comunicação em condomínios, criado com pesquisa, wireframes e prototipação.",
      "subtitle": "Research-led app concept"
    }
  },
  {
    "id": "research-ops",
    "visual": "chat",
    "cover": null,
    "type": [
      "research"
    ],
    "tags": [
      "ResearchOps",
      "UX Research",
      "Leadership"
    ],
    "en": {
      "title": "Research Operations",
      "summary": "Scaling research practices through operations leadership, documentation, workshops and cross-functional enablement.",
      "subtitle": "Building research capability"
    },
    "pt": {
      "title": "Research Operations",
      "summary": "Estruturação e liderança de ResearchOps com documentação, workshops e disseminação da cultura de pesquisa.",
      "subtitle": "Building research capability"
    }
  },
  {
    "id": "pharmacy-app",
    "visual": "chat",
    "cover": "media/56-0748c6.webp",
    "type": [
      "research"
    ],
    "tags": [
      "UX Research",
      "Mobile",
      "E-commerce"
    ],
    "en": {
      "title": "Pharmacy App",
      "summary": "Leading generative and evaluative research for a retail pharmacy shopping, coupons and delivery app.",
      "subtitle": "Retail app research"
    },
    "pt": {
      "title": "Pharmacy App",
      "summary": "Pesquisa generativa e avaliativa em um aplicativo de farmácia, cupons, compras e entrega.",
      "subtitle": "Retail app research"
    }
  }
];

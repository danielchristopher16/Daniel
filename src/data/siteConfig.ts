export type ProjectCategory =
  | 'Clínicas e estética'
  | 'Empresas e serviços'
  | 'Negócios locais'
  | 'Marcas e profissionais';

export interface ShowcaseProject {
  id: string;
  title: string;
  category: ProjectCategory;
  isConcept: boolean;
  statusLabel: string;
  subtitle: string;
  description: string;
  architectureHighlights: string[];
  deliverables: string[];
  imageUrl: string;
  imageAlt: string;
  liveUrl: string | null;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  description: string;
  details: string;
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'Daniel Christopher',
    segment: 'Desenvolvimento e criação de sites profissionais',
    positioning: 'Transformo sua presença digital em resultados.',
    commercialDescription:
      'Sites profissionais de alto impacto. Design estratégico para vender mais.',
    footerTagline: 'Websites profissionais de alto impacto.',
    faviconPath: '/favicon.svg',
  },
  contact: {
    instagramUrl: 'https://www.instagram.com/danielchristophertkx/',
    instagramHandle: '@danielchristophertkx',
    whatsappUrl: 'https://w.app/christopher' as string | null,
  },
  hero: {
    kicker: 'Transformamos sua presença digital em resultados.',
    headline: 'Websites que elevam sua marca.',
    subheadline:
      'Criamos experiências digitais sofisticadas, estratégicas e profissionais para empresas que desejam se destacar no mercado.',
    primaryCta: 'Solicitar orçamento',
    secondaryCta: 'Conhecer projetos',
    backdropImage: '/src/assets/images/hero_resize_backdrop_1795648839505.jpg',
    backdropAlt:
      'Cenário arquitetônico escuro com feixes de luz em tons de lavanda suave',
  },
  differentialsSection: {
    kicker: 'Diferenciais',
    lead: 'Sites profissionais de alto impacto. Design estratégico para vender mais.',
    headlineWhite: 'Não criamos apenas sites.',
    headlineMuted: 'Criamos experiências digitais.',
    items: [
      {
        number: '01',
        title: 'Design estratégico',
        description:
          'Cada seção, título e chamada para ação é planejada para guiar o visitante com clareza até o contato.',
      },
      {
        number: '02',
        title: 'Identidade visual profissional',
        description:
          'Estética sob medida que traduz o posicionamento da empresa e transmite autoridade desde o primeiro segundo.',
      },
      {
        number: '03',
        title: 'Experiência responsiva',
        description:
          'Interface adaptada com precisão para computadores, tablets e smartphones, sem cortes ou quebras visuais.',
      },
      {
        number: '04',
        title: 'Navegação intuitiva',
        description:
          'Arquitetura de informação objetiva para que o cliente encontre serviços, diferenciais e contato sem esforço.',
      },
      {
        number: '05',
        title: 'Foco em conversão',
        description:
          'Estrutura pensada para transformar visitas em pedidos de orçamento e oportunidades comerciais reais.',
      },
      {
        number: '06',
        title: 'Performance e otimização',
        description:
          'Código limpo, carregamento ágil, SEO técnico estruturado e boas práticas modernas de desenvolvimento web.',
      },
    ] satisfies DifferentialItem[],
  },
  portfolioSection: {
    kicker: 'Portfólio',
    title: 'Projetos que comunicam valor.',
    subtitle:
      'Demonstrações visuais e conceitos autorais desenvolvidos para ilustrar direção de arte, arquitetura de conteúdo e nível de acabamento.',
    projects: [
      {
        id: 'concept-clinica-estetica',
        title: 'Experiência Digital para Clínica de Estética & Saúde',
        category: 'Clínicas e estética',
        isConcept: true,
        statusLabel: 'Conceito demonstrativo',
        subtitle: 'Design editorial, agendamento intuitivo e posicionamento premium',
        description:
          'Projeto demonstrativo criado para ilustrar como clínicas médicas, odontológicas e de estética podem apresentar tratamentos com sofisticação, clareza visual e jornada direta para solicitação de avaliação.',
        architectureHighlights: [
          'Apresentação editorial dos procedimentos sem poluição visual',
          'Hierarquia pensada para transmitir segurança e credibilidade',
          'Chamadas estratégicas distribuídas ao longo da navegação',
        ],
        deliverables: ['Direção Visual', 'UI/UX Responsivo', 'Arquitetura de Conversão'],
        imageUrl: '/src/assets/images/concept_clinic_aesthetic_1795648841614.jpg',
        imageAlt:
          'Demonstração visual em notebook de conceito de site institucional para clínica de estética',
        liveUrl: null,
      },
      {
        id: 'concept-empresas-servicos',
        title: 'Plataforma Institucional para Empresas & Consultorias',
        category: 'Empresas e serviços',
        isConcept: true,
        statusLabel: 'Conceito demonstrativo',
        subtitle: 'Autoridade corporativa e estrutura comercial B2B',
        description:
          'Conceito demonstrativo voltado para empresas de serviços, engenharias e consultorias que precisam comunicar solidez técnica, detalhar especialidades e facilitar o pedido de proposta comercial.',
        architectureHighlights: [
          'Organização clara de áreas de atuação e serviços especializados',
          'Composição editorial de alto contraste com leitura fluida',
          'Fluxo objetivo para captação de leads qualificados',
        ],
        deliverables: ['Site Institucional', 'Estrutura B2B', 'Otimização SEO'],
        imageUrl: '/src/assets/images/concept_corporate_services_1795648840273.jpg',
        imageAlt:
          'Demonstração visual em notebook de conceito de site corporativo para empresas e serviços',
        liveUrl: null,
      },
      {
        id: 'concept-negocios-locais',
        title: 'Vitrine Digital Estratégica para Negócios Locais',
        category: 'Negócios locais',
        isConcept: true,
        statusLabel: 'Conceito demonstrativo',
        subtitle: 'Identidade marcante e conexão imediata com o público',
        description:
          'Projeto demonstrativo desenvolvido para estabelecimentos locais, gastronomia e comércios especializados que buscam destacar sua proposta de valor no ambiente digital com estética contemporânea.',
        architectureHighlights: [
          'Destaque visual para produtos, ambiente e diferenciais da marca',
          'Navegação mobile-first pensada para decisões rápidas',
          'Integração direta com canais de atendimento e redes sociais',
        ],
        deliverables: ['Landing Page', 'Mobile First', 'Identidade Digital'],
        imageUrl: '/src/assets/images/concept_local_business_1795648840902.jpg',
        imageAlt:
          'Demonstração visual em notebook de conceito de site moderno para negócio local',
        liveUrl: null,
      },
      {
        id: 'concept-marcas-profissionais',
        title: 'Portfólio e Posicionamento para Marcas & Profissionais',
        category: 'Marcas e profissionais',
        isConcept: true,
        statusLabel: 'Conceito demonstrativo',
        subtitle: 'Minimalismo editorial para especialistas e estúdios',
        description:
          'Conceito demonstrativo focado em profissionais liberais, arquitetos, consultores e marcas autorais que desejam elevar a percepção de valor do seu trabalho por meio de um site autoral e direto.',
        architectureHighlights: [
          'Tipografia expressiva e ritmo editorial limpo',
          'Exposição valorizada de especialidades e portfólio',
          'Experiência fluida em telas desktop e dispositivos móveis',
        ],
        deliverables: ['Design Sob Medida', 'Experiência Mobile', 'Performance Web'],
        imageUrl: '/src/assets/images/concept_personal_brand_1795648841131.jpg',
        imageAlt:
          'Demonstração visual em smartphone de conceito de site para marca pessoal e profissional',
        liveUrl: null,
      },
    ] satisfies ShowcaseProject[],
  },
  servicesSection: {
    kicker: 'Serviços',
    headlineWhite: 'Soluções digitais sob medida',
    headlineMuted: 'para empresas que valorizam posicionamento e resultado.',
    ctaLabel: 'Solicitar orçamento',
    items: [
      {
        number: '01',
        id: 'criacao-de-sites',
        title: 'Criação de Sites',
        description: 'Websites profissionais, modernos e responsivos.',
        details:
          'Desenvolvimento completo com arquitetura personalizada, visual sofisticado, carregamento rápido e adaptação perfeita a qualquer tela.',
      },
      {
        number: '02',
        id: 'landing-pages',
        title: 'Landing Pages',
        description: 'Páginas estratégicas para campanhas e conversão.',
        details:
          'Estrutura enxuta e persuasiva desenhada para apresentar uma oferta específica com clareza e direcionar o visitante para a ação.',
      },
      {
        number: '03',
        id: 'sites-institucionais',
        title: 'Sites Institucionais',
        description: 'Presença digital profissional para empresas.',
        details:
          'Apresentação completa da empresa, serviços, diferenciais e canais de atendimento em uma vitrine digital confiável e bem estruturada.',
      },
      {
        number: '04',
        id: 'redesign-de-sites',
        title: 'Redesign de Sites',
        description: 'Modernização visual e melhoria da experiência digital.',
        details:
          'Atualização estética, reorganização de conteúdo e aprimoramento de usabilidade e desempenho para sites que não refletem mais o nível atual da marca.',
      },
    ] satisfies ServiceItem[],
  },
  processSection: {
    kicker: 'Processo de trabalho',
    title: 'Do conceito à publicação com método claro.',
    steps: [
      {
        number: '01',
        title: 'Planejamento',
        description: 'Entendimento da empresa e dos objetivos.',
      },
      {
        number: '02',
        title: 'Design',
        description: 'Desenvolvimento da identidade visual e estrutura.',
      },
      {
        number: '03',
        title: 'Desenvolvimento',
        description: 'Construção e implementação do website.',
      },
      {
        number: '04',
        title: 'Entrega',
        description: 'Revisão, testes e preparação para publicação.',
      },
    ] satisfies ProcessStep[],
  },
  contactSection: {
    kicker: 'Contato',
    title: 'Vamos construir sua presença digital?',
    description:
      'Seu próximo projeto pode começar aqui. Entre em contato e solicite um orçamento.',
    primaryCta: 'Solicitar orçamento pelo Instagram',
    secondaryCta: 'Conhecer o Instagram',
  },
} as const;

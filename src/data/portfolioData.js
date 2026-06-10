window.portfolioData = {
  heroDescription: "Sou Gabriel Bento, estudante de TI apaixonado por desenvolvimento web. Gosto de criar interfaces com personalidade, boa hierarquia visual, movimento intencional e organização, enquanto aprofundo meus conhecimentos em Back-end para desenvolver aplicações cada vez mais completas, funcionais e escaláveis.",
  heroHighlights: [
    { value: "+UI", label: "interfaces com identidade" },
    { value: "Front-End", label: "foco de carreira" },
    { value: "Back-End", label: "base pronta para crescer" }
  ],
  ticker: [
    "Front-end com identidade visual",
    "Animações com propósito",
    "Base simples de manter",
    "Projetos renderizados por dados",
    "Gabriel Bento em destaque"
  ],
  about: "Possuo conhecimentos em UI/UX e busco desenvolver soluções que equilibrem estética, usabilidade, desempenho e funcionalidade.\n\nEstou em constante evolução, aprimorando minhas habilidades em tecnologias Front-end e Back-end, acompanhando as tendências do desenvolvimento web e buscando criar aplicações completas que gerem valor e proporcionem experiências digitais de qualidade.",
  values: [
    "Layouts com presença, não genéricos",
    "Código organizado para atualização constante",
    "Animações leves que reforçam a experiência",
    "Foco em front-end, interface e apresentação"
  ],
  stack: [
    {
      title: "Base Front-End",
      description: "Estruturação sólida com HTML, CSS e JavaScript para interfaces responsivas e fáceis de evoluir.",
      tags: ["HTML", "CSS", "JavaScript", "Responsivo"]
    },
    {
      title: "Design de Interface",
      description: "Atenção a tipografia, composição, ritmo visual, cor e comportamento dos elementos em tela.",
      tags: ["UI", "Layout", "Tipografia", "Motion"]
    },
    {
      title: "Organização",
      description: "Conteúdo centralizado em dados para adicionar novos projetos sem reestruturar o site inteiro.",
      tags: ["Escalável", "Editável", "Manutenção simples"]
    },
    {
      title: "Back-End",
      description: "Noções de desenvolvimento back-end com Node.js, JavaScript e banco de dados para criar aplicações mais completas.",
      tags: ["Node.js", "JavaScript", "Banco de Dados"]
    }
  ],
  contactText: "Estou sempre aberto a novas oportunidades e colaborações. Vamos criar algo incrível juntos.",
  contactLinks: [
    { label: "Email", href: "mailto:gabrielbento104@gmail.com" },
    { label: "GitHub", href: "https://github.com/gabrelben" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-bento-0b08ab302/" }
  ],
  projectGallery: {
    bend: 2,
    textColor: "#ffffff",
    borderRadius: 0.12,
    scrollSpeed: 1.4,
    scrollEase: 0.12,
    height: 600
  },
  projects: [
    {
      slug: "landing-page-cinematica",
      title: "Aura Weather",
      category: "app clima",
      description: "Projeto de clima com API em tempo real.",
      summary: "Uma landing page autoral com atmosfera editorial, pensada para transformar apresentação visual em narrativa de marca.",
      cover: "linear-gradient(135deg, rgba(6,6,6,0.12), rgba(6,6,6,0.62)), radial-gradient(circle at 50% 18%, rgba(255,42,31,0.96) 0%, rgba(255,42,31,0.18) 24%, transparent 25%), linear-gradient(180deg, #1b26d1 0%, #070b47 52%, #050505 100%)",
      tags: ["HTML", "CSS", "JavaScript", "Back-End"],
      objective: "Criar uma página de apresentação com impacto visual alto, reforçando hierarquia tipográfica, contraste e movimento para valorizar a mensagem principal.",
      technologies: ["HTML", "CSS", "JavaScript", "Motion Design", "UI/UX"],
      features: [
        "Hero com direção de arte forte e call-to-action destacado",
        "Seções animadas com fade e deslocamento suave",
        "Composição visual feita para leitura rápida e memorável"
      ],
      gallery: [
        {
          label: "Hero principal",
          image: "",
          visual: "linear-gradient(135deg, rgba(6,6,6,0.18), rgba(6,6,6,0.58)), radial-gradient(circle at 50% 16%, rgba(255,42,31,0.96) 0%, rgba(255,42,31,0.22) 22%, transparent 23%), linear-gradient(180deg, #202ce0 0%, #0b114d 54%, #040404 100%)"
        },
        {
          label: "Bloco editorial",
          image: "",
          visual: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0)), linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.42)), linear-gradient(135deg, #f6f1e8 0%, #ffffff 30%, #2f27ce 30%, #161d7a 100%)"
        },
        {
          label: "Seção de destaque",
          image: "",
          visual: "linear-gradient(135deg, rgba(6,6,6,0.12), rgba(6,6,6,0.66)), radial-gradient(circle at 72% 26%, rgba(47,39,206,0.88) 0%, rgba(47,39,206,0.24) 24%, transparent 30%), linear-gradient(180deg, #050505 0%, #181818 42%, #ff2a1f 100%)"
        }
      ],
      codeSamples: [
        {
          file: "hero.js",
          language: "JavaScript",
          code: "const timeline = sections.map((section, index) => ({\n  section,\n  delay: index * 120,\n}));\n\nconst revealSection = ({ section, delay }) => {\n  window.setTimeout(() => {\n    section.classList.add(\"is-visible\");\n  }, delay);\n};\n\ntimeline.forEach(revealSection);"
        },
        {
          file: "hero.css",
          language: "CSS",
          code: ".hero-copy {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.hero-copy.is-visible h1 {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.hero-copy h1 {\n  transform: translateY(24px);\n  opacity: 0;\n  transition: 560ms ease;\n}"
        }
      ],
      links: [
        { label: "Ver site", href: "https://gabrelben.github.io/aura-weather/" },
        { label: "GitHub", href: "https://github.com/gabrelben" }
      ]
    },
    {
      slug: "catalogo-de-projetos",
      title: "EM BREVE",
      category: "Em breve",
      description: "Em breve.",
      summary: "Em breve.",
      cover: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.18)), linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.46)), linear-gradient(135deg, #f7f3eb 0%, #ffffff 26%, #ff2a1f 26%, #8b0e07 100%)",
      tags: ["Em breve"],
      objective: "Em breve.",
      technologies: ["Em breve"],
      features: [
        "Em breve.",
        "Em breve.",
        "Em breve."
      ],
      gallery: [
        {
          label: "Em breve",
          image: "",
          visual: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)), linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.4)), linear-gradient(135deg, #f7f3eb 0%, #ffffff 26%, #ff2a1f 26%, #8b0e07 100%)"
        },
        {
          label: "Em breve",
          image: "",
          visual: "linear-gradient(135deg, rgba(6,6,6,0.06), rgba(6,6,6,0.48)), radial-gradient(circle at 24% 30%, rgba(47,39,206,0.74), transparent 22%), linear-gradient(135deg, #f5f0e8 0%, #f9f7f1 48%, #111111 48%, #050505 100%)"
        },
        {
          label: "Em breve",
          image: "",
          visual: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0)), linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.52)), linear-gradient(135deg, #2f27ce 0%, #131867 52%, #f4f0e8 52%, #ffffff 100%)"
        }
      ],
      codeSamples: [
        {
          file: "em-breve.js",
          language: "JavaScript",
          code: "// Em breve"
        },
        {
          file: "em-breve.css",
          language: "CSS",
          code: "/* Em breve */"
        }
      ],
      links: [
        { label: "Ver site", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    },
    {
      slug: "pagina-shawarmahouse",
      directUrl: "https://gabrelben.github.io/ShawarmaHouse/",
      title: "Projeto Shawarma House",
      category: "Landing Page",
      description: "uma landing page de um restaurante árabe fictício, focada em design moderno e atrativo. Desenvolvida para apresentar o cardápio, identidade visual e experiência do usuário. Criada para demonstrar minhas habilidades em front-end e UI/UX.",
      summary: "Um estudo visual com foco em branding digital, direção de arte e interação refinada para posicionamento de marca.",
      cover: "linear-gradient(135deg, rgba(6,6,6,0.12), rgba(6,6,6,0.68)), radial-gradient(circle at 55% 24%, rgba(47,39,206,1) 0%, rgba(47,39,206,0.22) 24%, transparent 32%), linear-gradient(135deg, #050505 0%, #141414 40%, #ff2a1f 100%)",
      tags: ["Branding", "Front-End", "Visual", "Motion"],
      objective: "Criar uma interface que traduzisse linguagem de marca em experiência digital, usando contraste, tipografia e movimento com precisão.",
      technologies: ["HTML", "CSS", "JavaScript", "UI Motion", "Branding"],
      features: [
        "Composição com alto contraste e foco em reconhecimento visual",
        "Microinterações pensadas para reforçar sofisticação",
        "Paleta intensa com uso controlado de azul, vermelho e preto"
      ],
      gallery: [
        {
          label: "página inicial",
          image: "./src/assets/images/Captura de tela 2026-04-11 211331.png",
          visual: ""
        },
        {
          label: "cardápio",
          image: "./src/assets/images/Captura de tela 2026-04-11 211646.png",
          visual: ""
        },
        {
          label: "contatos",
          image: "./src/assets/images/Captura de tela 2026-04-11 211907.png",
          visual: ""
        }
      ],
      codeSamples: [
        {
          file: "brand-motion.js",
          language: "JavaScript",
          code: "const cards = document.querySelectorAll('.brand-card');\n\ncards.forEach((card) => {\n  card.addEventListener('mouseenter', () => {\n    card.dataset.state = 'active';\n  });\n\n  card.addEventListener('mouseleave', () => {\n    card.dataset.state = 'idle';\n  });\n});"
        },
        {
          file: "brand-system.css",
          language: "CSS",
          code: ".brand-card[data-state='active'] {\n  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.22);\n  transform: translateY(-8px);\n}\n\n.brand-accent {\n  color: var(--primary);\n}"
        }
      ],
      links: [
        { label: "Ver site", href: "https://gabrelben.github.io/ShawarmaHouse/" },
        { label: "GitHub", href: "https://github.com/gabrelben" }
      ]
    },
    {
      slug: "pagina-produto-retro",
      title: "Projeto Netlura",
      category: "Experimento",
      description: "Clone da Netflix desenvolvido com a Alura, com foco em front-end moderno, layout responsivo e navegação intuitiva. Utilizei Inteligência Artificial como apoio no desenvolvimento e otimização do projeto.",
      summary: "Clone da Netflix desenvolvido com a Alura, com foco em front-end moderno, layout responsivo e navegação intuitiva.",
      cover: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0)), linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.52)), linear-gradient(135deg, #f0eee9 0%, #f5f0e6 44%, #2f27ce 44%, #0d0f55 100%)",
      tags: ["Front-End", "Responsivo", "Netflix Clone", "Streaming"],
      objective: "Desenvolver um clone da Netflix, com foco em reproduzir sua interface e experiência de navegação utilizando práticas modernas de front-end.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Blocos editoriais com forte leitura visual",
        "Seções pensadas para destacar produto e benefício",
        "Responsividade focada em ritmo e legibilidade"
      ],
      gallery: [
        {
          label: "pagina de perfil",
          image: "./src/assets/images/Captura de tela 2026-04-11 193336.png",
          visual: ""
        },
        {
          label: "Blocos de informação",
          image: "./src/assets/images/image.png",
          visual: ""
        },
        {
          label: "Detalhes do layout",
          image: "./src/assets/images/Captura de tela 2026-04-11 204538.png",
          visual: ""
        }
      ],
      codeSamples: [
        {
          file: "product-layout.css",
          language: "CSS",
          code: ".product-grid {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: 2rem;\n}\n\n.product-callout {\n  border-left: 1px solid rgba(0,0,0,.12);\n  padding-left: 1.25rem;\n}"
        },
        {
          file: "product-page.js",
          language: "JavaScript",
          code: "const details = document.querySelectorAll('[data-product-detail]');\n\ndetails.forEach((detail, index) => {\n  detail.style.transitionDelay = `${index * 80}ms`;\n  detail.classList.add('is-visible');\n});"
        }
      ],
      links: [
        { label: "Ver site", href: "https://gabrelben.github.io/netlura/" },
        { label: "GitHub", href: "https://github.com/gabrelben" }
      ]
    }
  ]
};
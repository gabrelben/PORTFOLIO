# Portfólio do Gabriel Bento

O projeto foi reorganizado para usar `Vite` + `ogl` com o background shader em tela cheia.

## Estrutura

- `index.html`: estrutura principal da página
- `src/main.js`: inicialização do site e renderização do conteúdo
- `src/styles/main.css`: estilos globais
- `src/data/portfolioData.js`: todo o conteúdo editável
- `src/background/createDarkVeil.js`: bootstrap do background com ogl
- `src/background/shaders.js`: vertex e fragment shader

## Onde você muda o conteúdo

Edite `src/data/portfolioData.js`.

Nele você consegue alterar:

- textos principais
- links de contato
- habilidades
- lista de projetos

## Como adicionar um novo projeto

Dentro de `src/data/portfolioData.js`, adicione um novo objeto no array `projects` seguindo este formato:

```js
{
  title: "Nome do projeto",
  category: "Categoria",
  description: "Descrição do projeto.",
  tags: ["HTML", "CSS", "JS"],
  links: [
    { label: "Ver demo", href: "#" },
    { label: "Código", href: "#" }
  ]
}
```

## Comandos

```bash
npm install
npm run dev
```
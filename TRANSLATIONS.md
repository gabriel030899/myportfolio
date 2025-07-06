# Sistema de Traduções - Portfolio Gabriel Zanella

## Visão Geral

Este projeto implementa um sistema de internacionalização (i18n) completo usando React Context, permitindo alternar entre português (PT) e inglês (EN) em tempo real.

## Estrutura dos Arquivos

```
src/
├── i18n/
│   ├── index.js          # Configuração e funções do i18n
│   ├── pt.json           # Traduções em português
│   └── en.json           # Traduções em inglês
├── components/
│   ├── LanguageContext/
│   │   └── index.js      # Contexto de idioma
│   └── LanguageToggle/
│       └── index.js      # Componente de troca de idioma
└── app/
    ├── layout.js         # Provider do contexto
    ├── page.js           # Página inicial
    ├── about/
    │   └── page.js       # Página sobre
    ├── contact/
    │   └── page.js       # Página contato
    └── projects/
        └── page.js       # Página projetos
```

## Como Usar

### 1. Usando o Hook useLanguage

```javascript
import { useLanguage } from "@/components/LanguageContext";

const MyComponent = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage();

  return (
    <div>
      <h1>{t("hero.name")}</h1>
      <p>{t("about.bio")}</p>
      <button onClick={() => changeLanguage("en")}>
        Mudar para Inglês
      </button>
    </div>
  );
};
```

### 2. Estrutura das Traduções

As traduções estão organizadas em objetos aninhados:

```json
{
  "header": {
    "home": "Início",
    "about": "Sobre",
    "projects": "Projetos",
    "contact": "Contato"
  },
  "hero": {
    "name": "Gabriel Zanella",
    "role": "Desenvolvedor Web",
    "specialty": "Front-End",
    "aboutMe": "Sobre Mim"
  }
}
```

### 3. Acessando Traduções

Use a função `t()` com notação de ponto para acessar traduções aninhadas:

```javascript
t("header.projects")     // "Projetos" (PT) ou "Projects" (EN)
t("hero.name")           // "Gabriel Zanella"
t("about.skillsTitle")   // "Habilidades & Experiência" (PT) ou "Skills & Experience" (EN)
```

### 4. Traduções de Arrays

Para traduções que são arrays (como habilidades):

```javascript
// No componente
{t("about.skills").map((skill, index) => (
  <li key={index}>{skill}</li>
))}

// No JSON
"skills": [
  "HTML - CSS - JavaScript - React.js - React Native - TypeScript - Angular - Next.js",
  "Python - SQL - Azure - Node.js - PHP"
]
```

## Funcionalidades Implementadas

### ✅ Páginas Traduzidas
- **Página Inicial**: Nome, cargo, especialidade, projetos em destaque
- **Página Sobre**: Biografia, expertise, habilidades
- **Página Contato**: Descrição, informações de contato
- **Página Projetos**: Título, botões de ação
- **NavBar**: Links de navegação

### ✅ Componentes Traduzidos
- **BigNumbers**: Estatísticas e métricas
- **LanguageToggle**: Botões PT/EN
- **Project Cards**: Botões "Ver Projeto", "Github", "Saiba Mais"

### ✅ Funcionalidades
- **Troca de Idioma**: Toggle PT/EN funcional
- **Persistência**: Idioma salvo no localStorage
- **Fallback**: Retorna a chave se tradução não encontrada
- **SSR Compatible**: Funciona com Next.js 13+ App Router

## Adicionando Novas Traduções

### 1. Adicione as chaves nos arquivos JSON

```json
// pt.json
{
  "newSection": {
    "title": "Novo Título",
    "description": "Nova descrição"
  }
}

// en.json
{
  "newSection": {
    "title": "New Title",
    "description": "New description"
  }
}
```

### 2. Use no componente

```javascript
const { t } = useLanguage();

return (
  <div>
    <h2>{t("newSection.title")}</h2>
    <p>{t("newSection.description")}</p>
  </div>
);
```

## Estrutura Completa das Traduções

### Seções Disponíveis

1. **header**: Links de navegação
2. **hero**: Seção principal da página inicial
3. **bignumbers**: Estatísticas e métricas
4. **projects**: Projetos em destaque
5. **about**: Página sobre
6. **contact**: Página contato
7. **projectDescriptions**: Descrições detalhadas dos projetos
8. **footer**: Rodapé

### Chaves Principais

- `hero.name`: Nome completo
- `hero.role`: Cargo principal
- `hero.specialty`: Especialidade
- `about.bio`: Biografia completa
- `about.expertise`: Expertise técnica
- `about.skills`: Array de habilidades
- `projects.title`: Título da seção de projetos
- `projects.viewProject`: Botão "Ver Projeto"
- `projects.github`: Botão "Github"
- `projects.learnMore`: Botão "Saiba Mais"

## Compatibilidade

- ✅ Next.js 13+ App Router
- ✅ React 19
- ✅ Server-Side Rendering (SSR)
- ✅ Client-Side Rendering (CSR)
- ✅ TypeScript (se usado)
- ✅ LocalStorage para persistência

## Performance

- **Lazy Loading**: Traduções carregadas sob demanda
- **Memoização**: Contexto otimizado para evitar re-renders desnecessários
- **Bundle Size**: Sistema leve sem dependências externas pesadas 
# Portfolio Profissional - Luis Filipe Bras Muller

## 📋 Sobre o Projeto

Portfolio profissional desenvolvido como parte da **2ª Avaliação** da disciplina de **Sistemas de Informação - 6ª Fase**.

Este projeto apresenta minha trajetória profissional como **DevOps & Cloud Engineer Jr**, demonstrando habilidades em desenvolvimento web moderno com HTML5, CSS3 e JavaScript ES6.

## 🌐 Aplicação Online

🔗 **Link da aplicação**: [Em breve - será atualizado após deploy no GitHub Pages]

## 🎯 Requisitos Atendidos

### ✅ HTML Semântico
- Estrutura completa com tags semânticas (`header`, `nav`, `section`, `footer`)
- Múltiplas seções: Hero, Sobre, Experiência, Habilidades e Contato
- Acessibilidade com atributos ARIA e estrutura hierárquica adequada

### ✅ CSS com Grid e Flexbox
- **CSS Grid** utilizado em:
  - Layout do conteúdo hero (`hero-content`)
  - Seção sobre (`about-content`)
  - Grid de habilidades (`skills-grid`)
  - Timeline de experiências (`timeline`)

- **CSS Flexbox** utilizado em:
  - Barra de navegação (`navbar`)
  - Botões do hero (`hero-buttons`)
  - Links de contato (`contact-links`)
  - Rodapé (`footer`)

### ✅ 2 Módulos JavaScript Próprios
1. **`navigation.js`**: Módulo de navegação
   - Scroll suave entre seções
   - Destaque de link ativo baseado na posição do scroll
   - Efeito de sombra no header ao rolar a página
   - Animação de estatísticas
   - Scroll reveal para elementos

2. **`contactForm.js`**: Módulo de validação de formulário
   - Validação de email em tempo real
   - Validação de nome e mensagem
   - Feedback visual para o usuário
   - Prevenção de envio inválido

### ✅ 2 Bibliotecas Externas
1. **GSAP (GreenSock Animation Platform)** v3.13.0
   - Animações profissionais no hero
   - Animação flutuante da floating card
   - Animações hover nas skill tags
   - Transições suaves e profissionais

2. **Axios** v1.12.2
   - Cliente HTTP configurado com interceptors
   - Integração com GitHub API
   - Logging de requisições e respostas
   - Timeout e headers configurados

### ✅ Design Responsivo
- Media queries para tablets (1024px, 768px)
- Media queries para mobile (480px)
- Layout adaptativo com Grid e Flexbox
- Imagens responsivas
- Navegação otimizada para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Grid, Flexbox e Custom Properties
- **JavaScript ES6**: Módulos, classes, async/await, import/export
- **GSAP**: Biblioteca de animações profissionais
- **Axios**: Cliente HTTP para requisições
- **NPM**: Gerenciamento de dependências
- **Git**: Controle de versão

## 📁 Estrutura do Projeto

```
si-25-6a/
├── assets/
│   ├── images/
│   │   ├── favicon.svg
│   │   └── WhatsApp Image 2025-10-22 at 11.25.57.jpeg
│   └── Curriculo_Luis_Filipe_B_Muller.pdf
├── src/
│   ├── modules/
│   │   ├── navigation.js       # Módulo de navegação
│   │   └── contactForm.js      # Módulo de formulário
│   ├── styles/
│   │   ├── main.css           # Estilos principais
│   │   └── responsive.css     # Estilos responsivos
│   └── main.js                # Arquivo principal
├── index.html                 # Página principal
├── package.json              # Configuração NPM
└── README.md                 # Este arquivo
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js >= 14.0.0
- NPM ou Yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Welquer/si-25-6a.git
cd si-25-6a
git checkout 2a-avaliacao-luis-muller
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Acesse no navegador:
```
http://localhost:8080
```

## ✨ Funcionalidades Principais

- **Navegação Suave**: Scroll animado entre seções
- **Animações Profissionais**: Efeitos de entrada e hover com GSAP
- **Design Moderno**: Interface limpa e profissional inspirada em portfolios de referência
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Integração GitHub**: Carregamento dinâmico de dados do perfil
- **Easter Egg**: Konami Code para surpresa interativa (↑ ↑ ↓ ↓ ← → ← → B A)

## 📚 Conceitos Aplicados

### ES6 Modules
```javascript
// Importação de módulos próprios
import { Navigation, animateStats, setupScrollReveal } from './modules/navigation.js';
import { ContactForm } from './modules/contactForm.js';

// Importação de bibliotecas externas
import gsap from '../node_modules/gsap/index.js';
import axios from '../node_modules/axios/dist/esm/axios.js';
```

### CSS Grid
```css
.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

### CSS Flexbox
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
```

## 👨‍💻 Autor

**Luis Filipe Bras Muller**
- Email: luisfilipebrasmulller@gmail.com
- GitHub: [@luisfilipemu11er](https://github.com/luisfilipemu11er)
- LinkedIn: [Luis Filipe Muller](https://www.linkedin.com/in/luis-filipe-muller-a02394311/)

## 📝 Informações Acadêmicas

- **Disciplina**: Sistemas de Informação
- **Fase**: 6ª
- **Avaliação**: 2ª Avaliação
- **Branch**: `2a-avaliacao-luis-muller`
- **Repositório**: [Welquer/si-25-6a](https://github.com/Welquer/si-25-6a)

## 📄 Licença

MIT License - Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com dedicação para a 2ª Avaliação - SI 6ª Fase** 🎓

---

# Repositório da 6a fase - turma de Sistemas de Informação - Unibave / 2025

## Plano de ensino

### 06/08/2025 - [1a aula](https://github.com/Welquer/si-25-6a/tree/1a-aula)
- Apresentação da disciplina
- Alinhamento de conteúdo, conhecimento e expectativas com a turma
- Version Control Systems - na prática
    - Git
    - GitHub
### 13/08/2025 - [2a aula](https://github.com/Welquer/si-25-6a/tree/2a-aula)
- HTML - [HTML - W3Schools](https://www.w3schools.com/html/)
- Semântica - [Semantic HTML - W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
### 20/08/2025 - [3a aula](https://github.com/Welquer/si-25-6a/tree/3a-aula)
- CSS - [CSS - W3Schools](https://www.w3schools.com/css/)
- Box Model - [CSS Box Model - W3Schools](https://www.w3schools.com/css/css_boxmodel.asp)
### 27/08/2025 - [4a aula](https://github.com/Welquer/si-25-6a/tree/4a-aula)
- Flexbox - [CSS Flexbox - W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)
- Grid - [CSS Grid - W3Schools](https://www.w3schools.com/css/css_grid.asp)
### 03/09/2025 - [1a avaliação](https://github.com/Welquer/si-25-6a/tree/1a-avaliacao)
- 1a avaliação
### 06/09/2025 - [Autoestudo 01](https://github.com/Welquer/si-25-6a/tree/autoestudo-01)
- Autoestudo 01 - conteúdo será lançado no AVA (aula SOMENTE virtual)
### 10/09/2025 - [5a aula](https://github.com/Welquer/si-25-6a/tree/5a-aula)
- JavaScript - [JS - W3Schools](https://www.w3schools.com/js/)
- DOM - [JS/HTML DOM - W3Schools](https://www.w3schools.com/js/js_htmldom.asp)
### 10/09/2025 - [6a aula](https://github.com/Welquer/si-25-6a/tree/6a-aula)
- Aula virtual - conteúdo será lançado no AVA
  - Conteúdo extra a ser definido
### 17/09/2025 - [7a aula](https://github.com/Welquer/si-25-6a/tree/7a-aula)
- Como funciona estrutura cliente/servidor
    - servidor web vs servidor de aplicação
    - servidor web: como a nossa página chega no navegador?
- Utilizar servidor web NGINX e expor URL pública com NGROK
### 24/09/2025 - [8a aula](https://github.com/Welquer/si-25-6a/tree/8a-aula)
- Módulos JavaScript: exportando e reutilizando código
- Utilizar gerenciadores de pacotes: NPM/Yarn
    - package.json
    - package-lock.json
### 01/10/2025 - [2a avaliação](https://github.com/Welquer/si-25-6a/tree/2a-avaliacao)
- 2a avaliação
### 08/10/2025 - Semana acadêmica - assistir palestras
- Conteúdo será lançado no AVA (aula SOMENTE virtual)
  - NPM package version = npm semver calculator - https://semver.npmjs.com/
### 10/10/2025 - [Autoestudo 02](https://github.com/Welquer/si-25-6a/tree/autoestudo-02)
- Autoestudo 02 - conteúdo será lançado no AVA (aula SOMENTE virtual)
### 15/10/2025 - Feriado - Dia do Professor
### 22/10/2025 - [9a aula](https://github.com/Welquer/si-25-6a/tree/9a-aula)
- Padrões comumente utilizados no front-end
- TypeScript
- Frameworks / ferramentas
    - CSS
    - JavaScript
    - Build - criar a aplicação a partir do código fonte
        - Linters
        - Formaters
        - build vs deploy: o que deve ser feito antes de entregar a página para o usuário?
### 29/10/2025 - SENPEX - assistir palestras
- Conteúdo será lançado no AVA (aula SOMENTE virtual)
  - Conteúdo extra a ser definido
### 05/11/2025 - [10a aula](https://github.com/Welquer/si-25-6a/tree/10a-aula)
- Formulários e validações
### 12/11/2025 - [11a aula](https://github.com/Welquer/si-25-6a/tree/11a-aula)
- Acessibilidade
- SEO
### 19/11/2025 - [12a aula](https://github.com/Welquer/si-25-6a/tree/12a-aula)
- Aula prática - revisão de conteúdo
### 26/11/2025 - [3a avaliação](https://github.com/Welquer/si-25-6a/tree/3a-avaliacao)
- 3a avaliação
### 03/12/2025 - [N-1](https://github.com/Welquer/si-25-6a/tree/n-1)
- N-1

## Cálculos das notas
- 3 avaliações
    - 1a avaliação: 10 pontos
    - 2a avaliação: 10 pontos
    - 3a avaliação: 4 pontos + 6 pontos por participação em cada aula (avaliado por commits no dia da aula)
- Participação em cada aula: 6 pontos
    - como funciona: enviar commit para o GitHub com o conteúdo praticado em aula até o final da respectiva aula
- Autoestudos: até 1 ponto extra cada, que será somado na menor nota
    - na sua branch, crie uma pasta para cada autoestudo e avise o professor quando estiver pronto para ser avaliado

Para as disciplinas de quatro créditos: Serão direcionadas 18 horas para realização do autoestudo.
OBS.: Esse Plano de Ensino poderá sofrer alterações por determinação institucional, por motivos de caso fortuito ou força maior ou ainda por necessidades acadêmicas e procedimentais que se verificarem necessárias no decorrer do processo de ensino/aprendizagem, sem quaisquer ônus ou responsabilidades para a instituição e/ou prepostos.
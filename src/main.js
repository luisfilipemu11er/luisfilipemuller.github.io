// Arquivo principal - Integração de todos os módulos e bibliotecas
// Usa ES6 Modules para importar funcionalidades

// Importar módulos próprios
import { Navigation, animateStats, setupScrollReveal } from './modules/navigation.js';
import { ContactForm } from './modules/contactForm.js';

// Importar bibliotecas externas via CDN ou node_modules
import gsap from '../node_modules/gsap/index.js';
import axios from '../node_modules/axios/dist/esm/axios.js';

// Classe principal da aplicação
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        // Aguardar o DOM estar completamente carregado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('Portfolio inicializado!');

        // Inicializar módulos próprios
        this.initializeNavigation();
        this.initializeContactForm();
        this.initializeAnimations();

        // Inicializar bibliotecas externas
        this.initializeGSAP();
        this.setupAxios();

        // Adicionar event listeners globais
        this.setupGlobalEvents();
    }

    // Inicializar navegação
    initializeNavigation() {
        new Navigation();
        animateStats();
        setupScrollReveal();
    }

    // Inicializar formulário de contato
    initializeContactForm() {
        new ContactForm();
    }

    // Inicializar animações gerais
    initializeAnimations() {
        // Animação de fade-in suave ao carregar a página
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    }

    // Inicializar GSAP (biblioteca de animações)
    initializeGSAP() {
        // Animação do hero title com GSAP
        gsap.from('.hero-title', {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.3
        });

        gsap.from('.hero-subtitle', {
            duration: 1,
            y: -30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.5
        });

        gsap.from('.hero-description', {
            duration: 1,
            y: -20,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.7
        });

        gsap.from('.hero-buttons', {
            duration: 1,
            y: -10,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.9
        });

        // Animação da floating card
        gsap.to('.floating-card', {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        // Animação das skill tags ao passar o mouse
        document.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                gsap.to(tag, {
                    scale: 1.1,
                    duration: 0.2,
                    ease: 'back.out(1.7)'
                });
            });

            tag.addEventListener('mouseleave', () => {
                gsap.to(tag, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });
        });

        console.log('GSAP inicializado com sucesso');
    }

    // Configurar Axios (biblioteca para requisições HTTP)
    setupAxios() {
        // Configuração global do Axios
        axios.defaults.timeout = 10000;
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        // Adicionar interceptor para logging
        axios.interceptors.request.use(
            config => {
                console.log('Requisição Axios:', config.method.toUpperCase(), config.url);
                return config;
            },
            error => {
                console.error('Erro na requisição:', error);
                return Promise.reject(error);
            }
        );

        // Adicionar interceptor de resposta
        axios.interceptors.response.use(
            response => {
                console.log('Resposta Axios:', response.status, response.data);
                return response;
            },
            error => {
                console.error('Erro na resposta:', error);
                return Promise.reject(error);
            }
        );

        // Exemplo de uso do Axios: buscar dados do GitHub
        this.fetchGitHubData();

        console.log('Axios configurado com sucesso');
    }

    // Buscar dados do GitHub usando Axios
    async fetchGitHubData() {
        try {
            const username = 'luisfilipemu11er';
            const response = await axios.get(`https://api.github.com/users/${username}`);

            if (response.data) {
                console.log('Dados do GitHub carregados:', {
                    name: response.data.name,
                    bio: response.data.bio,
                    public_repos: response.data.public_repos,
                    followers: response.data.followers
                });

                // Você pode atualizar a UI com esses dados se desejar
                // Por exemplo: mostrar número de repositórios públicos
            }
        } catch (error) {
            console.warn('Não foi possível carregar dados do GitHub:', error.message);
        }
    }

    // Configurar eventos globais
    setupGlobalEvents() {
        // Detectar se o usuário está usando teclado para navegação
        let isTabbing = false;

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                isTabbing = true;
                document.body.classList.add('user-is-tabbing');
            }
        });

        window.addEventListener('mousedown', () => {
            isTabbing = false;
            document.body.classList.remove('user-is-tabbing');
        });

        // Log de performance
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Página carregada em ${loadTime.toFixed(2)}ms`);
        });

        // Easter egg: detectar Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
        this.setupKonamiCode();
    }

    // Easter egg: Konami Code
    setupKonamiCode() {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                           'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateKonamiCode();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }

    // Ativar easter egg
    activateKonamiCode() {
        console.log('🎮 Konami Code ativado!');

        // Animação especial com GSAP
        gsap.to('body', {
            duration: 0.5,
            backgroundColor: '#ff00ff',
            yoyo: true,
            repeat: 3,
            onComplete: () => {
                alert('🎮 Parabéns! Você encontrou o easter egg! 🎮');
            }
        });
    }
}

// Inicializar aplicação
const app = new PortfolioApp();

// Exportar para uso em testes ou outros módulos
export default PortfolioApp;

// Módulo de Formulário de Contato
// Exporta classe para validação e envio do formulário

export class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.responseDiv = document.getElementById('formResponse');
        this.init();
    }

    init() {
        this.setupFormSubmit();
        this.setupRealTimeValidation();
    }

    // Configurar envio do formulário
    setupFormSubmit() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Validar campos
            if (!this.validateForm()) {
                return;
            }

            // Coletar dados do formulário
            const formData = {
                name: this.nameInput.value.trim(),
                email: this.emailInput.value.trim(),
                message: this.messageInput.value.trim(),
                timestamp: new Date().toISOString()
            };

            // Simular envio (em produção, isso seria uma chamada API real)
            try {
                await this.sendFormData(formData);
                this.showSuccess('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                this.resetForm();
            } catch (error) {
                this.showError('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente por email.');
            }
        });
    }

    // Validação em tempo real
    setupRealTimeValidation() {
        // Validar email ao digitar
        this.emailInput.addEventListener('blur', () => {
            if (this.emailInput.value) {
                this.validateEmail(this.emailInput.value);
            }
        });

        // Validar nome ao digitar
        this.nameInput.addEventListener('blur', () => {
            if (this.nameInput.value) {
                this.validateName(this.nameInput.value);
            }
        });

        // Validar mensagem ao digitar
        this.messageInput.addEventListener('blur', () => {
            if (this.messageInput.value) {
                this.validateMessage(this.messageInput.value);
            }
        });
    }

    // Validar formulário completo
    validateForm() {
        const name = this.nameInput.value.trim();
        const email = this.emailInput.value.trim();
        const message = this.messageInput.value.trim();

        if (!this.validateName(name)) {
            this.showError('Por favor, insira seu nome completo (mínimo 3 caracteres).');
            this.nameInput.focus();
            return false;
        }

        if (!this.validateEmail(email)) {
            this.showError('Por favor, insira um email válido.');
            this.emailInput.focus();
            return false;
        }

        if (!this.validateMessage(message)) {
            this.showError('Por favor, insira uma mensagem (mínimo 10 caracteres).');
            this.messageInput.focus();
            return false;
        }

        return true;
    }

    // Validar nome
    validateName(name) {
        if (name.length < 3) {
            this.setFieldError(this.nameInput);
            return false;
        }
        this.setFieldSuccess(this.nameInput);
        return true;
    }

    // Validar email
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.setFieldError(this.emailInput);
            return false;
        }
        this.setFieldSuccess(this.emailInput);
        return true;
    }

    // Validar mensagem
    validateMessage(message) {
        if (message.length < 10) {
            this.setFieldError(this.messageInput);
            return false;
        }
        this.setFieldSuccess(this.messageInput);
        return true;
    }

    // Adicionar estilo de erro ao campo
    setFieldError(field) {
        field.style.borderColor = '#ff0000';
    }

    // Adicionar estilo de sucesso ao campo
    setFieldSuccess(field) {
        field.style.borderColor = '#00ff88';
    }

    // Simular envio de dados (Promise)
    sendFormData(data) {
        return new Promise((resolve, reject) => {
            // Simular delay de rede
            setTimeout(() => {
                // Log dos dados (em produção seria um POST para API)
                console.log('Dados do formulário:', data);

                // Simular sucesso (90% de chance de sucesso)
                if (Math.random() > 0.1) {
                    resolve({ success: true, message: 'Mensagem enviada!' });
                } else {
                    reject(new Error('Erro simulado'));
                }
            }, 1500);
        });
    }

    // Mostrar mensagem de sucesso
    showSuccess(message) {
        this.responseDiv.textContent = message;
        this.responseDiv.className = 'form-response success';
        setTimeout(() => {
            this.responseDiv.className = 'form-response';
        }, 5000);
    }

    // Mostrar mensagem de erro
    showError(message) {
        this.responseDiv.textContent = message;
        this.responseDiv.className = 'form-response error';
        setTimeout(() => {
            this.responseDiv.className = 'form-response';
        }, 5000);
    }

    // Resetar formulário
    resetForm() {
        this.form.reset();
        this.nameInput.style.borderColor = '';
        this.emailInput.style.borderColor = '';
        this.messageInput.style.borderColor = '';
    }
}

// Função auxiliar para sanitizar inputs (prevenir XSS)
export function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Função para formatar timestamp
export function formatTimestamp(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

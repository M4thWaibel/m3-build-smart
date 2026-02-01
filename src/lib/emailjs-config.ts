// EmailJS Configuration
// 📧 Instruções para configurar:
// 1. Criar conta gratuita em https://www.emailjs.com/
// 2. Adicionar um serviço de email (Gmail, Outlook, etc)
// 3. Criar um template de email com as seguintes variáveis:
//    - {{from_name}} - Nome do fornecedor
//    - {{company_name}} - Nome da empresa
//    - {{user_email}} - Email do fornecedor
//    - {{phone}} - Telefone comercial
//    - {{message}} - Descrição da parceria
//    - {{to_email}} - comercial@m3constru.com.br (fixo no template)
// 4. Copiar as credenciais e inserir abaixo

export const EMAILJS_CONFIG = {
    // 🔑 Insira seu Service ID aqui (exemplo: "service_abc123")
    serviceId: "SEU_SERVICE_ID_AQUI",

    // 🔑 Insira seu Template ID aqui (exemplo: "template_xyz789")
    templateId: "SEU_TEMPLATE_ID_AQUI",

    // 🔑 Insira sua Public Key aqui (exemplo: "abcdef123456")
    publicKey: "SUA_PUBLIC_KEY_AQUI",
};

// Validação de configuração
export const isEmailJSConfigured = () => {
    return (
        EMAILJS_CONFIG.serviceId !== "SEU_SERVICE_ID_AQUI" &&
        EMAILJS_CONFIG.templateId !== "SEU_TEMPLATE_ID_AQUI" &&
        EMAILJS_CONFIG.publicKey !== "SUA_PUBLIC_KEY_AQUI"
    );
};

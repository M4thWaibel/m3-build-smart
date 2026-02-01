import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailjs-config";

// Tipos para os dados do formulário de fornecedor
export interface SupplierFormData {
    from_name: string;
    company_name: string;
    user_email: string;
    phone: string;
    message: string;
    attachment?: File;
}

// Tipos para os dados do formulário de carreira
export interface CareerFormData {
    from_name: string;
    position: string;
    user_email: string;
    phone: string;
    cv: File;
}

// Função para enviar email de fornecedor com anexo usando EmailJS
export const sendSupplierEmail = async (
    formData: SupplierFormData
): Promise<{ success: boolean; message: string }> => {
    try {
        // Preparar dados para o template
        const templateParams = {
            from_name: formData.from_name,
            company_name: formData.company_name,
            user_email: formData.user_email,
            phone: formData.phone,
            message: formData.message,
            subject: `Fornecedor / Parcerias - ${formData.from_name}`,
            to_email: "comercial@m3constru.com.br",
        };

        // Se houver anexo, converter para base64
        if (formData.attachment) {
            const base64File = await fileToBase64(formData.attachment);
            Object.assign(templateParams, {
                attachment_name: formData.attachment.name,
                attachment_content: base64File,
            });
        }

        // Enviar email
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        );

        if (response.status === 200) {
            return {
                success: true,
                message: "Proposta enviada com sucesso! Entraremos em contato em breve.",
            };
        } else {
            return {
                success: false,
                message: "Erro ao enviar proposta. Tente novamente.",
            };
        }
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return {
            success: false,
            message: "Erro ao enviar proposta. Verifique sua conexão e tente novamente.",
        };
    }
};

// Função para enviar email de carreira (currículo) usando EmailJS
export const sendCareerEmail = async (
    formData: CareerFormData
): Promise<{ success: boolean; message: string }> => {
    try {
        // Converter CV para base64
        const base64CV = await fileToBase64(formData.cv);

        // Preparar dados para o template
        const templateParams = {
            from_name: formData.from_name,
            position: formData.position,
            user_email: formData.user_email,
            phone: formData.phone,
            subject: `Quero fazer parte da Equipe! - ${formData.from_name}`,
            to_email: "comercial@m3constru.com.br",
            attachment_name: formData.cv.name,
            attachment_content: base64CV,
        };

        // Enviar email
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        );

        if (response.status === 200) {
            return {
                success: true,
                message: "Currículo enviado com sucesso! Entraremos em contato em breve.",
            };
        } else {
            return {
                success: false,
                message: "Erro ao enviar currículo. Tente novamente.",
            };
        }
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return {
            success: false,
            message: "Erro ao enviar currículo. Verifique sua conexão e tente novamente.",
        };
    }
};

// Converter arquivo para base64
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === "string") {
                // Remover o prefixo "data:*/*;base64,"
                const base64 = reader.result.split(",")[1];
                resolve(base64);
            } else {
                reject(new Error("Erro ao converter arquivo"));
            }
        };
        reader.onerror = (error) => reject(error);
    });
};

// Validar tipo e tamanho de arquivo
export const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Tipos permitidos
    const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
    ];

    // Tamanho máximo: 5MB
    const maxSize = 5 * 1024 * 1024; // 5MB em bytes

    if (!allowedTypes.includes(file.type)) {
        return {
            valid: false,
            error: "Formato não permitido. Use PDF ou imagens (JPEG, PNG, WebP).",
        };
    }

    if (file.size > maxSize) {
        return {
            valid: false,
            error: "Arquivo muito grande. Tamanho máximo: 5MB.",
        };
    }

    return { valid: true };
};

import { z } from "zod";

// Schema de validação do formulário de trabalhe conosco
export const careerFormSchema = z.object({
    position: z
        .string()
        .min(3, "Informe a área ou vaga de interesse")
        .max(100, "Descrição muito longa"),

    fullName: z
        .string()
        .min(3, "Nome completo deve ter pelo menos 3 caracteres")
        .max(100, "Nome muito longo")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),

    email: z
        .string()
        .email("E-mail inválido")
        .toLowerCase(),

    phone: z
        .string()
        .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX"),

    cv: z
        .instanceof(File)
        .refine((file) => file.size <= 5 * 1024 * 1024, "CV deve ter no máximo 5MB")
        .refine(
            (file) =>
                ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type),
            "CV deve ser em formato PDF ou Word (DOC/DOCX)"
        ),
});

export type CareerFormValues = z.infer<typeof careerFormSchema>;

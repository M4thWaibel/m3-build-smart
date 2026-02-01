import { z } from "zod";

// Schema de validação do formulário de fornecedor
export const supplierFormSchema = z.object({
    description: z
        .string()
        .min(50, "A descrição deve ter pelo menos 50 caracteres")
        .max(1000, "A descrição deve ter no máximo 1000 caracteres"),

    fullName: z
        .string()
        .min(3, "Nome completo deve ter pelo menos 3 caracteres")
        .max(100, "Nome muito longo")
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),

    companyName: z
        .string()
        .min(2, "Nome da empresa deve ter pelo menos 2 caracteres")
        .max(150, "Nome da empresa muito longo"),

    email: z
        .string()
        .email("E-mail inválido")
        .toLowerCase(),

    phone: z
        .string()
        .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX"),

    attachment: z
        .instanceof(File)
        .optional()
        .refine(
            (file) => !file || file.size <= 5 * 1024 * 1024,
            "Arquivo deve ter no máximo 5MB"
        )
        .refine(
            (file) =>
                !file ||
                [
                    "application/pdf",
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                    "image/webp",
                ].includes(file.type),
            "Formato de arquivo não permitido. Use PDF ou imagens"
        ),
});

export type SupplierFormValues = z.infer<typeof supplierFormSchema>;

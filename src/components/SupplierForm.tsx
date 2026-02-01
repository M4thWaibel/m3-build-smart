import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supplierFormSchema, type SupplierFormValues } from "@/schemas/supplierForm";
import { sendSupplierEmail } from "@/lib/emailjs";
import { isEmailJSConfigured } from "@/lib/emailjs-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Upload, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const SupplierForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<SupplierFormValues>({
        resolver: zodResolver(supplierFormSchema),
    });

    // Máscara para telefone
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d{0,5})(\d{0,4})/, "($1) $2-$3");
            value = value.replace(/(-$)/, "");
            e.target.value = value;
        }
    };

    // Handler de seleção de arquivo
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setValue("attachment", file);
        }
    };

    const onSubmit = async (data: SupplierFormValues) => {
        // Verificar se EmailJS está configurado
        if (!isEmailJSConfigured()) {
            setSubmitStatus({
                type: "error",
                message:
                    "⚙️ O serviço de email ainda não foi configurado. Entre em contato pelo WhatsApp.",
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        // Preparar dados para envio
        const emailData = {
            from_name: data.fullName,
            company_name: data.companyName,
            user_email: data.email,
            phone: data.phone,
            message: data.description,
            attachment: data.attachment,
        };

        // Enviar email
        const result = await sendSupplierEmail(emailData);

        setIsSubmitting(false);

        if (result.success) {
            setSubmitStatus({ type: "success", message: result.message });
            reset();
            setSelectedFile(null);

            // Limpar mensagem após 5 segundos
            setTimeout(() => {
                setSubmitStatus({ type: null, message: "" });
            }, 5000);
        } else {
            setSubmitStatus({ type: "error", message: result.message });
        }
    };

    return (
        <Card className="max-w-3xl mx-auto border-2 border-border shadow-lg">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Descrição da Parceria */}
                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-base font-semibold text-foreground">
                            Descrição da Parceria <span className="text-rose-600">*</span>
                        </Label>
                        <Textarea
                            id="description"
                            {...register("description")}
                            placeholder="Descreva brevemente sua proposta de parceria, produtos ou serviços oferecidos..."
                            className="min-h-[120px] resize-none"
                            disabled={isSubmitting}
                        />
                        {errors.description && (
                            <p className="text-sm text-rose-600">{errors.description.message}</p>
                        )}
                    </div>

                    {/* Nome e Empresa - Grade 2 colunas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-base font-semibold text-foreground">
                                Nome Completo <span className="text-rose-600">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                {...register("fullName")}
                                placeholder="João Silva"
                                disabled={isSubmitting}
                            />
                            {errors.fullName && (
                                <p className="text-sm text-rose-600">{errors.fullName.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="companyName" className="text-base font-semibold text-foreground">
                                Nome da Empresa <span className="text-rose-600">*</span>
                            </Label>
                            <Input
                                id="companyName"
                                {...register("companyName")}
                                placeholder="Empresa Ltda"
                                disabled={isSubmitting}
                            />
                            {errors.companyName && (
                                <p className="text-sm text-rose-600">{errors.companyName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Email e Telefone - Grade 2 colunas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-base font-semibold text-foreground">
                                E-mail de Contato <span className="text-rose-600">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="contato@empresa.com.br"
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p className="text-sm text-rose-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                                Telefone Comercial <span className="text-rose-600">*</span>
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register("phone")}
                                onChange={handlePhoneChange}
                                placeholder="(15) 99999-9999"
                                disabled={isSubmitting}
                                maxLength={15}
                            />
                            {errors.phone && (
                                <p className="text-sm text-rose-600">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Upload de Arquivo */}
                    <div className="space-y-2">
                        <Label htmlFor="attachment" className="text-base font-semibold text-foreground">
                            Anexar Apresentação (Opcional)
                        </Label>
                        <div className="flex items-center gap-4">
                            <label
                                htmlFor="attachment"
                                className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                            >
                                <Upload className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">
                                    {selectedFile ? selectedFile.name : "Selecionar arquivo (PDF ou Imagem)"}
                                </span>
                            </label>
                            <input
                                id="attachment"
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png,.webp"
                                onChange={handleFileChange}
                                className="hidden"
                                disabled={isSubmitting}
                            />
                            {selectedFile && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setSelectedFile(null);
                                        setValue("attachment", undefined);
                                    }}
                                    disabled={isSubmitting}
                                >
                                    <XCircle className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Formatos aceitos: PDF, JPEG, PNG, WebP. Tamanho máximo: 5MB
                        </p>
                        {errors.attachment && (
                            <p className="text-sm text-rose-600">{errors.attachment.message}</p>
                        )}
                    </div>

                    {/* Mensagens de Status */}
                    {submitStatus.type && (
                        <Alert
                            className={
                                submitStatus.type === "success"
                                    ? "border-emerald-500 bg-emerald-50"
                                    : submitStatus.type === "error"
                                        ? "border-rose-500 bg-rose-50"
                                        : ""
                            }
                        >
                            {submitStatus.type === "success" && (
                                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                            )}
                            {submitStatus.type === "error" && (
                                <AlertCircle className="h-5 w-5 text-rose-600" />
                            )}
                            <AlertDescription
                                className={
                                    submitStatus.type === "success"
                                        ? "text-emerald-800"
                                        : submitStatus.type === "error"
                                            ? "text-rose-800"
                                            : ""
                                }
                            >
                                {submitStatus.message}
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Botão de Envio */}
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Enviando Proposta...
                            </>
                        ) : (
                            "Enviar Proposta de Parceria"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default SupplierForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerFormSchema, type CareerFormValues } from "@/schemas/careerForm";
import { sendCareerEmail } from "@/lib/emailjs";
import { isEmailJSConfigured } from "@/lib/emailjs-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Upload, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const CareerForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [selectedCV, setSelectedCV] = useState<File | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<CareerFormValues>({
        resolver: zodResolver(careerFormSchema),
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

    // Handler de seleção de CV
    const handleCVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedCV(file);
            setValue("cv", file);
        }
    };

    const onSubmit = async (data: CareerFormValues) => {
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
            position: data.position,
            user_email: data.email,
            phone: data.phone,
            cv: data.cv,
        };

        // Enviar email
        const result = await sendCareerEmail(emailData);

        setIsSubmitting(false);

        if (result.success) {
            setSubmitStatus({ type: "success", message: result.message });
            reset();
            setSelectedCV(null);

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
                    {/* Área ou Vaga de Interesse */}
                    <div className="space-y-2">
                        <Label htmlFor="position" className="text-base font-semibold text-foreground">
                            Área ou Vaga de Interesse <span className="text-rose-600">*</span>
                        </Label>
                        <Input
                            id="position"
                            {...register("position")}
                            placeholder="Ex: Engenheiro Civil, Pedreiro, Soldador..."
                            disabled={isSubmitting}
                        />
                        {errors.position && (
                            <p className="text-sm text-rose-600">{errors.position.message}</p>
                        )}
                    </div>

                    {/* Nome e Email - Grade 2 colunas */}
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
                            <Label htmlFor="email" className="text-base font-semibold text-foreground">
                                E-mail <span className="text-rose-600">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="seuemail@exemplo.com"
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p className="text-sm text-rose-600">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Telefone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                            Telefone para Contato <span className="text-rose-600">*</span>
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

                    {/* Upload de CV */}
                    <div className="space-y-2">
                        <Label htmlFor="cv" className="text-base font-semibold text-foreground">
                            Anexar Currículo <span className="text-rose-600">*</span>
                        </Label>
                        <div className="flex items-center gap-4">
                            <label
                                htmlFor="cv"
                                className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                            >
                                <Upload className="w-5 h-5 text-primary" />
                                <span className="text-sm text-muted-foreground">
                                    {selectedCV ? selectedCV.name : "Selecionar CV (PDF ou Word)"}
                                </span>
                            </label>
                            <input
                                id="cv"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleCVChange}
                                className="hidden"
                                disabled={isSubmitting}
                            />
                            {selectedCV && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setSelectedCV(null);
                                        setValue("cv", undefined as any);
                                    }}
                                    disabled={isSubmitting}
                                >
                                    <XCircle className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Formatos aceitos: PDF, DOC, DOCX. Tamanho máximo: 5MB
                        </p>
                        {errors.cv && (
                            <p className="text-sm text-rose-600">{errors.cv.message}</p>
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
                                Enviando Currículo...
                            </>
                        ) : (
                            "Enviar Candidatura"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default CareerForm;

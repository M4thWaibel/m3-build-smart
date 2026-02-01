import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle2, ChevronRight } from "lucide-react";
import projeto3 from "@/assets/projeto-3.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto10 from "@/assets/projeto-10.jpg";

const ConstrucoesIndustriais = () => {
    const services = [
        { name: "Fundações", description: "Execução de fundações profundas e superficiais para qualquer tipo de solo" },
        { name: "Alvenaria Estrutural", description: "Sistemas construtivos eficientes e econômicos" },
        { name: "Galpões Completos", description: "Projetos turnkey do início ao fim" },
        { name: "Reformas e Ampliações", description: "Modernização e expansão de instalações existentes" },
        { name: "Obras Civis", description: "Infraestrutura completa para seu empreendimento" },
        { name: "Projetos Personalizados", description: "Soluções sob medida para cada necessidade" },
    ];

    const benefits = [
        "Gestão completa de obra do início ao fim",
        "Equipe técnica com mais de 20 anos de experiência",
        "Fabricação própria de pré-moldados e estruturas metálicas",
        "Controle rigoroso de qualidade e prazos",
        "Orçamento detalhado e transparente",
        "Acompanhamento técnico em todas as etapas",
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-primary/5 to-background pt-32">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <Building2 className="w-8 h-8 text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                        Construções Industriais
                                    </span>
                                </div>
                                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                                    Construções Industriais Completas para Sua Empresa
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    Oferecemos soluções completas em construções industriais, desde a fundação até a entrega final. Nossa equipe experiente garante qualidade, segurança e cumprimento de prazos em todos os projetos.
                                </p>
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" id="cta-merlin8">
                                    Solicite um orçamento
                                    <ChevronRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                            <div>
                                <img
                                    src={projeto3}
                                    alt="Construção Industrial"
                                    className="rounded-lg shadow-2xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                            Nossos Serviços de Construção
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{service.name}</h3>
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-20 bg-muted">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                            Projetos Realizados
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <img
                                    src={projeto5}
                                    alt="Galpões Industriais"
                                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                                />
                                <h3 className="text-lg font-semibold text-foreground">Galpões Industriais</h3>
                                <p className="text-muted-foreground">
                                    Conjunto de galpões com estrutura pré-moldada e metálica para operações industriais de grande porte.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <img
                                    src={projeto10}
                                    alt="Galpão para Estoque"
                                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                                />
                                <h3 className="text-lg font-semibold text-foreground">Galpão para Estoque</h3>
                                <p className="text-muted-foreground">
                                    Estrutura com fundações, muro de arrimo e pilares pré-moldados para máxima segurança e aproveitamento.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                                Por Que Escolher a M3 para Sua Construção?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-lg text-foreground">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                            Pronto para construir seu projeto industrial?
                        </h2>
                        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
                            Entre em contato conosco e receba um orçamento personalizado para sua obra
                        </p>
                        <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" id="cta-merlin9">
                            Solicite um orçamento
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ConstrucoesIndustriais;

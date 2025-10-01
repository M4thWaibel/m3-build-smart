import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle2, ChevronRight } from "lucide-react";
import projeto1 from "@/assets/projeto-1.jpg";

const GalpaoIndustrial = () => {
  const benefits = [
    "Projetos personalizados conforme sua necessidade",
    "Estrutura completa com fundação e cobertura",
    "Pré-dimensionamento gratuito",
    "Execução rápida com fabricação própria",
    "Garantia de qualidade e durabilidade",
    "Acompanhamento técnico em todas as etapas",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Galpões Industriais
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                  Construção de Galpões Industriais sob Medida
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Projetos completos de galpões industriais e logísticos, desenvolvidos para atender as necessidades específicas da sua operação com eficiência e durabilidade.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicite um orçamento
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div>
                <img 
                  src={projeto1} 
                  alt="Galpão Industrial" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Vantagens dos Nossos Galpões Industriais
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

        {/* Features Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Etapas da Construção
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">01</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Projeto e Planejamento</h3>
                  <p className="text-muted-foreground">
                    Desenvolvimento do projeto estrutural completo, considerando todas as necessidades operacionais da sua indústria.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">02</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Fundação e Estrutura</h3>
                  <p className="text-muted-foreground">
                    Execução de fundações adequadas ao solo e montagem da estrutura de concreto e metálica com fabricação própria.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">03</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Acabamento e Entrega</h3>
                  <p className="text-muted-foreground">
                    Fechamentos, cobertura, instalações e acabamentos finais para entrega da obra pronta para operação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Pronto para construir seu galpão industrial?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Entre em contato conosco e receba um orçamento personalizado em até 24 horas
            </p>
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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

export default GalpaoIndustrial;

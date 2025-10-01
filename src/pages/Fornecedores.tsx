import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, CheckCircle2, FileText, TrendingUp, ChevronRight } from "lucide-react";

const Fornecedores = () => {
  const requirements = [
    "Pessoa jurídica regularizada",
    "Experiência comprovada no fornecimento",
    "Capacidade de atendimento em escala",
    "Certificações de qualidade",
    "Condições competitivas de pagamento",
    "Compromisso com prazos de entrega",
  ];

  const categories = [
    { title: "Materiais de Construção", description: "Cimento, areia, brita, ferro, aço" },
    { title: "Pré-Moldados", description: "Elementos estruturais diversos" },
    { title: "Estruturas Metálicas", description: "Perfis, chapas, componentes" },
    { title: "Serviços Especializados", description: "Transporte, locação, mão de obra" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Seja Nosso Fornecedor
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos sempre em busca de parcerias estratégicas com fornecedores comprometidos com qualidade e excelência
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Por que ser nosso fornecedor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Crescimento Conjunto</h3>
                  <p className="text-muted-foreground">
                    Parceria de longo prazo com demanda constante e crescente
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Processo Transparente</h3>
                  <p className="text-muted-foreground">
                    Negociações claras e relacionamento direto com nossa equipe
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Pagamentos Pontuais</h3>
                  <p className="text-muted-foreground">
                    Compromisso com honrar acordos e prazos estabelecidos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Categorias de Interesse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Requisitos para Fornecedores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{requirement}</span>
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
              Pronto para se tornar nosso parceiro?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Entre em contato conosco e apresente sua empresa. Estamos ansiosos para conhecer sua proposta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Enviar proposta por e-mail
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Ligar agora
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Fornecedores;

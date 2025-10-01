import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, CheckCircle2, ChevronRight } from "lucide-react";
import projeto2 from "@/assets/projeto-2.jpg";

const EstruturasMetalicas = () => {
  const products = [
    { name: "Escadas Metálicas", description: "Estruturas de acesso seguras e duráveis" },
    { name: "Tesouras Metálicas", description: "Sustentação para coberturas de grandes vãos" },
    { name: "Terças Protendidas", description: "Cobertura com excelente relação custo-benefício" },
    { name: "Mezaninos", description: "Aproveitamento vertical de espaço" },
    { name: "Passarelas", description: "Circulação elevada entre ambientes" },
    { name: "Estruturas Especiais", description: "Projetos customizados sob medida" },
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
                  <HardHat className="w-8 h-8 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Estruturas Metálicas
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                  Fabricação de Estruturas Metálicas de Alta Qualidade
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Produção especializada de estruturas metálicas com capacidade de 50 toneladas por mês e garantia de qualidade superior.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicite um orçamento
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div>
                <img 
                  src={projeto2} 
                  alt="Estruturas Metálicas" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Nossas Estruturas Metálicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Info Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Processo de Fabricação
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Projeto e Detalhamento</h3>
                    <p className="text-muted-foreground">
                      Desenvolvimento de projetos estruturais detalhados com cálculos e dimensionamentos precisos, seguindo normas técnicas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Fabricação em Fábrica</h3>
                    <p className="text-muted-foreground">
                      Corte, dobra e soldagem realizados por profissionais qualificados com equipamentos modernos e precisos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Tratamento e Pintura</h3>
                    <p className="text-muted-foreground">
                      Aplicação de tratamento anticorrosivo e pintura industrial para máxima durabilidade e proteção.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Montagem em Campo</h3>
                    <p className="text-muted-foreground">
                      Equipe especializada realiza a montagem na obra com segurança e precisão, garantindo perfeito encaixe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Capacidade de Produção
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-border text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-2">50 ton</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Por mês</div>
                  <div className="text-sm text-muted-foreground">Capacidade produtiva</div>
                </CardContent>
              </Card>
              <Card className="border-border text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Controle</div>
                  <div className="text-sm text-muted-foreground">Qualidade garantida</div>
                </CardContent>
              </Card>
              <Card className="border-border text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-2">+20</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Anos</div>
                  <div className="text-sm text-muted-foreground">Experiência</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Precisa de estruturas metálicas?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Consulte nossa equipe técnica e receba um projeto personalizado para sua necessidade
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

export default EstruturasMetalicas;

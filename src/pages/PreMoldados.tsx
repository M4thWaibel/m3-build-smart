import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, CheckCircle2, ChevronRight } from "lucide-react";
import fabricacaoImage from "@/assets/fabricacao-propria.jpg";

const PreMoldados = () => {
  const products = [
    { name: "Pilares e Vigas", description: "Estruturas de sustentação com alta resistência" },
    { name: "Vigas Calha", description: "Sistema integrado de drenagem e estrutura" },
    { name: "Placas de Fechamento", description: "Fechamento lateral e divisórias" },
    { name: "Escadas Pré-fabricadas", description: "Acesso entre níveis com segurança" },
    { name: "Muros de Arrimo", description: "Contenção e segurança do terreno" },
    { name: "Lajes Alveolares", description: "Lajes com excelente relação peso/resistência" },
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
                  <Hammer className="w-8 h-8 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Pré-Moldados
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                  Elementos Pré-Moldados com Fabricação Própria
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Produção própria de estruturas pré-moldadas de concreto com controle rigoroso de qualidade e entrega garantida no prazo.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicite um orçamento
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div>
                <img 
                  src={fabricacaoImage} 
                  alt="Fabricação de pré-moldados" 
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
              Nossos Produtos Pré-Moldados
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

        {/* Advantages Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Vantagens da Fabricação Própria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Controle de Qualidade Total</h3>
                    <p className="text-muted-foreground">
                      Cada peça passa por inspeção rigorosa antes da entrega, garantindo os mais altos padrões de qualidade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Prazos Reduzidos</h3>
                    <p className="text-muted-foreground">
                      Sem dependência de terceiros, garantimos entregas rápidas e cumprimento dos cronogramas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Melhor Custo-Benefício</h3>
                    <p className="text-muted-foreground">
                      Eliminação de intermediários resulta em preços competitivos sem comprometer a qualidade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Capacidade de 600m³/mês</h3>
                    <p className="text-muted-foreground">
                      Alta capacidade produtiva para atender projetos de qualquer porte com agilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Precisa de elementos pré-moldados?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Consulte nossa equipe e receba um orçamento detalhado para seu projeto
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

export default PreMoldados;

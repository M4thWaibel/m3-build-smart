import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import equipeImage from "@/assets/equipe.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Compromisso com excelência em cada projeto",
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Relacionamentos duradouros com nossos clientes",
    },
    {
      icon: Target,
      title: "Pontualidade",
      description: "Cumprimento rigoroso de prazos estabelecidos",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Sobre a M3 Engenharia e Construções
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Construindo o futuro industrial com expertise, qualidade e compromisso
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={equipeImage} 
                  alt="Equipe M3 Engenharia" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Fundada em 2022, a M3 Engenharia e Construções nasceu com o propósito de revolucionar o mercado de construções industriais. Com profissionais que acumulam mais de 20 anos de experiência no setor, trazemos expertise consolidada para cada projeto.
                  </p>
                  <p>
                    Nosso diferencial está na fabricação própria de pré-moldados e estruturas metálicas, o que nos permite oferecer controle total sobre qualidade, prazos e custos. Essa autonomia produtiva se traduz em obras entregues com excelência e pontualidade.
                  </p>
                  <p>
                    Um dos nossos maiores orgulhos é ter realizado 10 obras consecutivas com o mesmo cliente, demonstrando a confiança e satisfação que construímos através de resultados consistentes e relacionamentos transparentes.
                  </p>
                  <p>
                    Hoje, com capacidade de produzir 600m³ de pré-moldados e 50 toneladas de estruturas metálicas por mês, estamos preparados para atender projetos de qualquer porte, sempre com o mesmo compromisso com a qualidade que nos define.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Entregar projetos de construção industrial com excelência técnica, superando expectativas através de fabricação própria, gestão transparente e compromisso inabalável com prazos e qualidade.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-8">
                  <Eye className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser a referência em construções industriais no Brasil, reconhecida pela qualidade impecável, inovação em processos e pela confiança conquistada através de relacionamentos duradouros com nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Numbers Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-12 text-center">
              A M3 em Números
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">2022</div>
                <div className="text-primary-foreground/80">Ano de fundação</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">+20</div>
                <div className="text-primary-foreground/80">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">600m³</div>
                <div className="text-primary-foreground/80">Pré-moldados/mês</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">10+</div>
                <div className="text-primary-foreground/80">Obras consecutivas</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;

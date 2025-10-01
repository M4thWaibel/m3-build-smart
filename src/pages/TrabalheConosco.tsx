import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Award, ChevronRight } from "lucide-react";
import equipeImage from "@/assets/equipe.jpg";

const TrabalheConosco = () => {
  const benefits = [
    { icon: TrendingUp, title: "Crescimento Profissional", description: "Oportunidades de desenvolvimento e crescimento na carreira" },
    { icon: Users, title: "Ambiente Colaborativo", description: "Equipe unida e comprometida com resultados" },
    { icon: Award, title: "Projetos Desafiadores", description: "Obras de grande porte e alta complexidade técnica" },
  ];

  const positions = [
    { title: "Engenheiro Civil", type: "Efetivo" },
    { title: "Mestre de Obras", type: "Efetivo" },
    { title: "Pedreiro", type: "Efetivo" },
    { title: "Armador", type: "Efetivo" },
    { title: "Soldador", type: "Efetivo" },
    { title: "Auxiliar de Produção", type: "Efetivo" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Briefcase className="w-16 h-16 text-primary mb-6" />
                <h1 className="text-5xl font-bold text-foreground mb-6">
                  Trabalhe Conosco
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Faça parte de uma equipe comprometida com a excelência em construções industriais. Valorizamos profissionais dedicados e com vontade de crescer.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar currículo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div>
                <img 
                  src={equipeImage} 
                  alt="Equipe M3 Engenharia" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Por que trabalhar na M3?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Vagas Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {positions.map((position, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{position.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {position.type}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Não encontrou a vaga ideal? Envie seu currículo mesmo assim!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Cadastro espontâneo
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossa Cultura
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Na M3, acreditamos que pessoas comprometidas e bem treinadas são a base do nosso sucesso. Oferecemos um ambiente de trabalho seguro, oportunidades de capacitação e valorizamos o esforço e dedicação de cada membro da equipe.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">+20</div>
                  <div className="text-muted-foreground">Anos de experiência da equipe</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Compromisso com segurança</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Projetos de grande porte</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Pronto para fazer parte da nossa equipe?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Envie seu currículo e faça parte de uma empresa que valoriza profissionais dedicados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Enviar currículo por e-mail
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Falar com RH
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

export default TrabalheConosco;

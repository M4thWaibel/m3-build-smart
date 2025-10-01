import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Factory, 
  Hammer, 
  HardHat, 
  Shield, 
  Clock, 
  Users, 
  FileCheck,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";
import fabricacaoImage from "@/assets/fabricacao-propria.jpg";
import projeto1 from "@/assets/projeto-1.jpg";
import projeto2 from "@/assets/projeto-2.jpg";
import projeto3 from "@/assets/projeto-3.jpg";
import equipeImage from "@/assets/equipe.jpg";

const Home = () => {
  const stats = [
    {
      value: "600 m³",
      label: "Pré-moldados/mês",
      description: "Capacidade de produção mensal",
    },
    {
      value: "50 ton",
      label: "Estruturas metálicas/mês",
      description: "Produção especializada",
    },
    {
      value: "+20 anos",
      label: "De experiência",
      description: "Profissionais qualificados",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Construções industriais em geral",
      description: "Fundação, alvenaria estrutural e galpões completos para sua indústria",
    },
    {
      icon: Factory,
      title: "Galpões industriais e logísticos",
      description: "Projetos sob medida com eficiência e durabilidade garantida",
    },
    {
      icon: Hammer,
      title: "Pré-moldados fabricados",
      description: "Pilares, vigas, placas, escadas, muros e muito mais",
    },
    {
      icon: HardHat,
      title: "Estruturas metálicas fabricadas",
      description: "Escadas, tesouras, terças protendidas com qualidade superior",
    },
  ];

  const projects = [
    { image: projeto1, title: "Galpão Industrial 5.000m²" },
    { image: projeto2, title: "Centro Logístico 8.000m²" },
    { image: projeto3, title: "Fábrica Completa 3.500m²" },
  ];

  const differentials = [
    {
      icon: Shield,
      title: "Segurança total",
      description: "Normas técnicas rigorosas e equipe altamente treinada",
    },
    {
      icon: Clock,
      title: "Compromisso com prazos",
      description: "Gestão eficiente para entrega pontual dos projetos",
    },
    {
      icon: FileCheck,
      title: "Gestão transparente",
      description: "Acompanhamento detalhado em cada etapa da obra",
    },
    {
      icon: Users,
      title: "Equipe experiente",
      description: "Profissionais especializados em construções industriais",
    },
  ];

  const clients = [
    "Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Seção 01 - Hero */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Construção industrial" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <p className="text-primary-foreground/90 text-sm font-medium mb-4">
                Fundada em 2022 • Profissionais com +20 anos de experiência
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Soluções em construções industriais sob medida para todas as necessidades da sua empresa
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Nossa gestão e fabricação própria eliminam atrasos e garantem a qualidade que sua indústria precisa para crescer com segurança
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  Solicite um orçamento
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20 text-lg px-8">
                  Conheça nossos projetos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 02 - Números de Autoridade */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 03 - Atuação */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Conheça as soluções completas que oferecemos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solicite um orçamento
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Seção 04 - Diferencial Competitivo */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Fabricação 100% própria, gerando mais qualidade e confiança
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nossa estrutura de fabricação própria garante controle total sobre a qualidade dos materiais e permite prazos mais ágeis. Com estoque próprio de pré-moldados e estruturas metálicas, eliminamos atrasos e reduzimos custos, oferecendo o melhor custo-benefício para sua obra.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Controle de qualidade rigoroso</strong>
                      <p className="text-muted-foreground text-sm">Cada peça é inspecionada e testada antes da entrega</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Redução de custos e prazos</strong>
                      <p className="text-muted-foreground text-sm">Sem intermediários, garantimos melhores preços e entregas rápidas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Estoque próprio disponível</strong>
                      <p className="text-muted-foreground text-sm">Peças prontas para entrega imediata quando necessário</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={fabricacaoImage} 
                  alt="Área de fabricação M3" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 05 - Portfólio */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Veja construções entregues, que impulsionam as indústrias
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                      <h3 className="text-xl font-bold text-primary-foreground">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solicite um orçamento
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Seção 06 - Clientes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Clientes que são nossos parceiros
              </h2>
              <p className="text-lg text-muted-foreground">
                Empresas que confiam na M3 para construir seu futuro
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center p-6 border border-border rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-lg font-semibold text-muted-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 07 - Diferenciais */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Por que construir com a M3 Engenharia e Construções?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção 08 - Essência */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Segurança e tranquilidade
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Quando você escolhe a M3, escolhe a certeza de prazos cumpridos e qualidade impecável. Nossa experiência e fabricação própria transformam seu projeto em realidade com total segurança.
            </p>
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10">
              Solicite um orçamento
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Seção 09 - Sobre Nós */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={equipeImage} 
                  alt="Equipe M3 Engenharia" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Conheça a M3 Engenharia e Construções
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Prazer, somos a M3 Engenharia e Construções
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Fundada em 2022, a M3 Engenharia e Construções nasceu com o propósito de revolucionar o mercado de construções industriais. Com profissionais que acumulam mais de 20 anos de experiência no setor, trazemos expertise consolidada para cada projeto.
                  </p>
                  <p>
                    Nosso foco é exclusivo em obras industriais, o que nos permite entregar soluções especializadas e personalizadas. Um dos nossos maiores orgulhos é ter realizado 10 obras consecutivas com o mesmo cliente, demonstrando a confiança e satisfação em nosso trabalho.
                  </p>
                  <p>
                    Com fabricação própria de pré-moldados e estruturas metálicas, garantimos qualidade superior, prazos cumpridos e o melhor custo-benefício para sua indústria crescer com segurança.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="/sobre">
                      Saiba mais sobre nós
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 10 - Hero Final / CTA */}
        <section id="contato" className="py-24 bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Conte com as nossas soluções para construir ou expandir a sua operação industrial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Fale conosco e veja como nossas soluções garantem agilidade e segurança
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10">
              Solicite um orçamento agora
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Retorno de orçamento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Obras entregues no prazo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Obras consecutivas com mesmo cliente</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

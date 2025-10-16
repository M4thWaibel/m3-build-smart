import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import PartnersCarousel from "@/components/PartnersCarousel";
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
import heroImage from "../assets/hero-industrial.png";
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
      description: "Pilares, vigas, placas de fechamento, muros de divisa, protendidos, escadas e muito mais",
    },
    {
      icon: HardHat,
      title: "Estruturas metálicas fabricadas",
      description: "Estrutura de cobertura e fechamento, pilares entre outros",
    },
  ];

  const projects = [
    { 
      image: projeto1, 
      title: "Galpão Fabril",
      description: "Com estrutura em concreto pré-moldado e metálica, projetado para unir eficiência, resistência e funcionalidade.",
      year: "2024",
      location: "Boituva, SP",
      area: "4.360 m²",
      client: "Vão Livre 38m",
      status: "concluido" as const
    },
    { 
      image: projeto2, 
      title: "Prédio Administrativo",
      description: "Estrutura totalmente pré-moldada, utilizando lajes alveolares para maior eficiência e precisão construtiva.",
      year: "2025",
      location: "Boituva, SP",
      area: "2.620 m² construídos",
      client: "Altura 24,5 (6 andares)",
      status: "em_andamento" as const
    },
    { 
      image: projeto3, 
      title: "Galpão Logístico",
      description: "Com pilares pré-moldados e fechamento em alvenaria, projetado para oferecer amplitude, resistência e praticidade operacional.",
      year: "2023",
      location: "Cerquilho, SP",
      area: "3.420 m² construídos",
      client: "Vão Livre de 30m",
      status: "concluido" as const
    },
    { 
      image: projeto1, 
      title: "Centro de Distribuição",
      description: "Galpão logístico com estrutura metálica e pré-moldada, otimizado para operações de alta demanda.",
      year: "2024",
      location: "Sorocaba, SP",
      area: "5.200 m²",
      client: "Vão Livre 42m",
      status: "concluido" as const
    },
    { 
      image: projeto2, 
      title: "Unidade Fabril",
      description: "Complexo industrial completo com estruturas pré-moldadas e cobertura metálica de alto desempenho.",
      year: "2023",
      location: "Tatuí, SP",
      area: "6.800 m² construídos",
      client: "Pé-direito 12m",
      status: "concluido" as const
    },
    { 
      image: projeto3, 
      title: "Armazém Industrial",
      description: "Estrutura robusta em concreto pré-moldado, projetada para armazenamento de grande volume.",
      year: "2024",
      location: "Itu, SP",
      area: "4.950 m² construídos",
      client: "Vão Livre de 35m",
      status: "concluido" as const
    },
    { 
      image: projeto1, 
      title: "Complexo Logístico",
      description: "Estrutura moderna em pré-moldado, projetada para operações de alta eficiência e movimentação de cargas.",
      year: "2024",
      location: "Campinas, SP",
      area: "7.100 m²",
      client: "Vão Livre 45m",
      status: "em_andamento" as const
    },
    { 
      image: projeto2, 
      title: "Galpão Industrial",
      description: "Com estrutura metálica robusta e fechamento lateral, ideal para processos produtivos de grande escala.",
      year: "2023",
      location: "Indaiatuba, SP",
      area: "3.850 m² construídos",
      client: "Pé-direito 10m",
      status: "concluido" as const
    },
    { 
      image: projeto3, 
      title: "Centro de Armazenagem",
      description: "Estrutura pré-moldada com alta capacidade de estocagem, otimizada para logística e distribuição.",
      year: "2024",
      location: "Jundiaí, SP",
      area: "5.600 m²",
      client: "Vão Livre de 38m",
      status: "em_andamento" as const
    },
    { 
      image: projeto1, 
      title: "Pavilhão Industrial",
      description: "Cobertura metálica de grande vão livre e pilares em concreto, projetado para versatilidade operacional.",
      year: "2023",
      location: "Votorantim, SP",
      area: "4.200 m² construídos",
      client: "Vão Livre 40m",
      status: "concluido" as const
    },
    { 
      image: projeto2, 
      title: "Unidade de Produção",
      description: "Estrutura completa em pré-moldado, com área administrativa integrada e alta eficiência construtiva.",
      year: "2024",
      location: "Salto, SP",
      area: "6.300 m²",
      client: "Altura 18m (5 andares)",
      status: "em_andamento" as const
    },
    { 
      image: projeto3, 
      title: "Galpão Multiuso",
      description: "Estrutura versátil em concreto e aço, preparada para múltiplas configurações produtivas e logísticas.",
      year: "2023",
      location: "Porto Feliz, SP",
      area: "4.750 m² construídos",
      client: "Vão Livre de 32m",
      status: "concluido" as const
    },
  ];

  const partners = [
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+1", alt: "Parceiro 1" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+2", alt: "Parceiro 2" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+3", alt: "Parceiro 3" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+4", alt: "Parceiro 4" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+5", alt: "Parceiro 5" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+6", alt: "Parceiro 6" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+7", alt: "Parceiro 7" },
    { src: "https://via.placeholder.com/150x60/1a365d/ffffff?text=Parceiro+8", alt: "Parceiro 8" },
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


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Seção 01 - Hero */}
        <section id="hero" className="relative min-h-[90vh] flex items-center">
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
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                  <a href="#" id="cta-merlin1">
                    Solicite um orçamento
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20 text-lg px-8">
                  <a href="#portfolio">Conheça nossos projetos</a>
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
        <section id="servicos" className="py-20 bg-muted">
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
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#" id="cta-merlin2">
                  Solicite um orçamento
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
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
                      <strong className="text-foreground">Capacidade produtiva imediata</strong>
                      <p className="text-muted-foreground text-sm">Prontos para iniciar a fabricação de acordo com as necessidades de cada projeto.</p>
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
        <section id="portfolio" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Portifólio de Projetos
              </h2>
            </div>
            <div className="mb-12">
              <ProjectsCarousel projects={projects} />
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#" id="cta-merlin3">
                  Solicite um orçamento
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>


        {/* Seção 06 - Diferenciais */}
        <section id="diferenciais" className="py-20 bg-background">
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

        {/* Seção 07 - Essência */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Segurança e tranquilidade
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Quando você escolhe a M3, escolhe a certeza de prazos cumpridos e qualidade impecável. Nossa experiência e fabricação própria transformam seu projeto em realidade com total segurança.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10">
              <a href="#" id="cta-merlin4">
                Solicite um orçamento
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Seção 07.5 - Parceiros */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nossos Parceiros
              </h2>
              <p className="text-lg text-muted-foreground">
                Empresas que confiam em nossas soluções
              </p>
            </div>
            <PartnersCarousel partners={partners} />
          </div>
        </section>

        {/* Seção 08 - Sobre Nós */}
        <section id="sobre" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Engenharia que Você Pode Confiar
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fundada em 2022, a M3 Engenharia nasceu com o propósito de oferecer tranquilidade total aos clientes. Nosso foco está em obras industriais e estruturas pré-moldadas, com agilidade, segurança e qualidade. Já conquistamos mais de 10 obras consecutivas com o mesmo cliente, prova da nossa dedicação e excelência.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary mb-3">2022</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Ano de Fundação</div>
                  <div className="text-sm text-muted-foreground">Empresa jovem e inovadora</div>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary mb-3">20+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Anos de Experiência</div>
                  <div className="text-sm text-muted-foreground">Da equipe técnica</div>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary mb-3">100%</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Projetos no Prazo</div>
                  <div className="text-sm text-muted-foreground">Histórico comprovado</div>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary mb-3">20+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Clientes Atendidos</div>
                  <div className="text-sm text-muted-foreground">Satisfação garantida</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção 09 - Hero Final / CTA */}
        <section id="contato" className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Conte com as nossas soluções para construir ou expandir a sua operação industrial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Fale conosco e veja como nossas soluções garantem agilidade e segurança
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10" asChild>
              <a href="#" id="cta-merlin5">
                Solicite um orçamento
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Obras entregues no prazo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Obras consecutivas com mesmo cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência da equipe</div>
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

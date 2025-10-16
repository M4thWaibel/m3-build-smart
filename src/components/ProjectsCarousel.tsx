import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  image: string;
  title: string;
  description: string;
  year: string;
  location: string;
  area: string;
  client: string;
  status: "concluido" | "em_andamento";
}

interface ProjectsCarouselProps {
  projects: Project[];
}

// Helper function to chunk array into groups of 6
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  // Paginate projects in groups of 6
  const projectPages = chunkArray(projects, 6);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {projectPages.map((page, pageIndex) => (
          <CarouselItem key={pageIndex}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.map((project, index) => (
                <Card key={`${pageIndex}-${index}`} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md font-bold">
                      {project.year}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                      {project.title}
                      {project.status === "concluido" && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium bg-emerald-500/10 text-emerald-700 border-emerald-500/30">
                          concluído
                        </span>
                      )}
                      {project.status === "em_andamento" && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium bg-rose-500/10 text-rose-700 border-rose-500/30">
                          em andamento
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <span className="mr-2">📍</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <span className="mr-2">📐</span>
                        <span>{project.area}</span>
                      </div>
                      {project.client && (
                        <div className="flex items-center text-muted-foreground">
                          <span className="mr-2">🏢</span>
                          <span>{project.client}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
      <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
    </Carousel>
  );
};

export default ProjectsCarousel;

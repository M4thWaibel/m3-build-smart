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
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <Card className="border-border overflow-hidden hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
      <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
    </Carousel>
  );
};

export default ProjectsCarousel;

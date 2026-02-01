import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectModal from "@/components/ProjectModal";

interface Project {
  image: string;
  title: string;
  description: string;
  year: string;
  location: string;
  area: string;
  client: string;
  status: "concluido" | "em_andamento";
  gallery?: string[];
  detailedDescription?: string;
  serviceType?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

// Helper function to chunk array into columns of 2 projects each
const createColumns = <T,>(array: T[], itemsPerColumn: number): T[][] => {
  const columns: T[][] = [];
  for (let i = 0; i < array.length; i += itemsPerColumn) {
    columns.push(array.slice(i, i + itemsPerColumn));
  }
  return columns;
};

// Component to render a single project card
const ProjectCard = ({
  project,
  onClick
}: {
  project: Project;
  onClick: () => void;
}) => (
  <Card
    className="border-border overflow-hidden hover:shadow-xl transition-all duration-300 h-full min-h-[580px] flex flex-col cursor-pointer group relative"
    onClick={onClick}
  >
    <div className="relative flex-shrink-0 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md font-bold">
        {project.year}
      </div>
    </div>
    <CardContent className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-foreground mb-3 flex items-center flex-wrap">
        {project.title}
        {project.status === "concluido" && (
          <span className="ml-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium bg-emerald-500/10 text-emerald-700 border-emerald-500/30">
            Concluído
          </span>
        )}
        {project.status === "em_andamento" && (
          <span className="ml-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium bg-rose-500/10 text-rose-700 border-rose-500/30">
            Em Andamento
          </span>
        )}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
      <div className="space-y-2 text-sm mt-auto">
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

      {/* "Saiba mais..." button */}
      <div className="flex justify-end mt-4">
        <button
          className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-200 hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Saiba mais...
        </button>
      </div>
    </CardContent>
  </Card>
);

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Group projects into columns of 2
  const projectColumns = createColumns(projects, 2);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projectColumns.map((column, columnIndex) => (
            <CarouselItem key={columnIndex} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col gap-4">
                {column.map((project, projectIndex) => (
                  <ProjectCard
                    key={`${columnIndex}-${projectIndex}`}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
      </Carousel>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          project={{
            title: selectedProject.title,
            gallery: selectedProject.gallery || [selectedProject.image],
            detailedDescription: selectedProject.detailedDescription || selectedProject.description,
            location: selectedProject.location,
            area: selectedProject.area,
            serviceType: selectedProject.serviceType || selectedProject.client,
            year: selectedProject.year,
            status: selectedProject.status,
          }}
        />
      )}
    </>
  );
};

export default ProjectsCarousel;

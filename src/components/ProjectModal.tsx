import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Ruler, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    project: {
        title: string;
        gallery: string[];
        detailedDescription: string;
        location: string;
        area: string;
        serviceType: string;
        year: string;
        status: "concluido" | "em_andamento";
    };
}

const ProjectModal = ({ open, onOpenChange, project }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };

    const selectImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl h-[85vh] flex flex-col border-2 border-border">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3 flex-wrap pr-8">
                        {project.title}
                        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-bold text-sm">
                            {project.year}
                        </div>
                        {project.status === "concluido" && (
                            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-700 border-emerald-500/30">
                                Concluído
                            </span>
                        )}
                        {project.status === "em_andamento" && (
                            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium bg-rose-500/10 text-rose-700 border-rose-500/30">
                                Em Andamento
                            </span>
                        )}
                    </DialogTitle>
                </DialogHeader>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto flex flex-col">
                    {/* Image Gallery with Thumbnails */}
                    <div className="mt-6">
                        {/* Main Image Container with External Arrows */}
                        <div className="flex items-center gap-3">
                            {/* Left Arrow - Outside */}
                            {project.gallery.length > 1 && (
                                <button
                                    onClick={previousImage}
                                    className="flex-shrink-0 bg-background hover:bg-muted text-foreground rounded-full p-2 transition-all shadow-md border border-border"
                                    aria-label="Imagem anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            )}

                            {/* Main Image */}
                            <div className="flex-1 relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                                <img
                                    src={project.gallery[currentImageIndex]}
                                    alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* Image Counter */}
                                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium text-foreground shadow-md">
                                    {currentImageIndex + 1} / {project.gallery.length}
                                </div>
                            </div>

                            {/* Right Arrow - Outside */}
                            {project.gallery.length > 1 && (
                                <button
                                    onClick={nextImage}
                                    className="flex-shrink-0 bg-background hover:bg-muted text-foreground rounded-full p-2 transition-all shadow-md border border-border"
                                    aria-label="Próxima imagem"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            )}
                        </div>

                        {/* Thumbnail Indicators - Centralized */}
                        {project.gallery.length > 1 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
                                {project.gallery.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectImage(index)}
                                        className={cn(
                                            "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                                            currentImageIndex === index
                                                ? "border-primary ring-2 ring-primary ring-offset-2"
                                                : "border-border hover:border-primary/50 opacity-60 hover:opacity-100"
                                        )}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Detailed Description */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Sobre o Projeto</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
                    </div>

                    {/* Project Details - Pushed to bottom */}
                    <div className="mt-auto pt-6 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-foreground mb-1">Localização</div>
                                    <div className="text-sm text-muted-foreground">{project.location}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                                <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-foreground mb-1">Área</div>
                                    <div className="text-sm text-muted-foreground">{project.area}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                                <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-foreground mb-1">Tipo de Serviço</div>
                                    <div className="text-sm text-muted-foreground">{project.serviceType}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;

import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Partner {
  src: string;
  alt: string;
  link?: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

const PartnersCarousel = ({ partners }: PartnersCarouselProps) => {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  useEffect(() => {
    // Respeita prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && autoplayRef.current) {
      autoplayRef.current.stop();
    }
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplayRef.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/5">
            <div className="flex items-center justify-center h-20">
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-12 w-auto mx-auto opacity-80 hover:opacity-100 transition"
                  />
                </a>
              ) : (
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-12 w-auto mx-auto opacity-80 hover:opacity-100 transition"
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
      <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
    </Carousel>
  );
};

export default PartnersCarousel;

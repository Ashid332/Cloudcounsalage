"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export interface Logos3Props {
  heading?: string;
  logos: Logo[];
  className?: string;
  speed?: number;
}

const Logos3 = ({
  heading,
  logos,
  className,
  speed = 1,
}: Logos3Props) => {
  return (
    <section className={`bg-transparent ${className}`}>
      {heading && (
        <div className="container flex flex-col items-center text-center px-4">
          <h2 className="mb-12 text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            {heading}
          </h2>
        </div>
      )}
      <div className="relative">
        <div className="mx-auto flex items-center justify-center lg:container">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: speed })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center px-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="flex shrink-0 items-center justify-center h-28 w-auto group">
                     <img
                       src={logo.image}
                       alt={logo.description}
                       className={`max-h-14 md:max-h-16 max-w-[140px] w-auto object-contain transition-all duration-500 group-hover:scale-110 ${logo.className}`}
                     />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Edge Blurs for continuity */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/90 to-transparent pointer-events-none z-10 hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/90 to-transparent pointer-events-none z-10 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };

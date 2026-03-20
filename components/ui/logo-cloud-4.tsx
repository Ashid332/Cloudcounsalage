import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto w-full bg-transparent py-12">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-gray-100" />

      <InfiniteSlider gap={100} reverse duration={40} className="py-8">
        {logos.map((logo, idx) => (
          <img
            alt={logo.alt}
            className="h-16 md:h-20 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
            key={`logo-${idx}-${logo.alt}`}
            loading="lazy"
            src={logo.src}
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={2}
        className="pointer-events-none absolute top-0 left-0 h-full w-[200px] z-10"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={2}
        className="pointer-events-none absolute top-0 right-0 h-full w-[200px] z-10"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-gray-100" />
    </div>
  );
}

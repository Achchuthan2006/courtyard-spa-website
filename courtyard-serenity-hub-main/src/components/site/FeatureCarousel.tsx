import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import controlsImg from "@/assets/feature-controls.jpg";
import lightingImg from "@/assets/feature-lighting.jpg";
import seatingImg from "@/assets/feature-seating.jpg";

const SLIDES = [
  {
    image: controlsImg,
    eyebrow: "Balboa® Controls",
    title: "Touchscreen precision.",
    body: "Industry-standard Balboa control systems with weather-proof topside touch panels. Schedule, temperature, jets, and lighting — all from your phone.",
  },
  {
    image: lightingImg,
    eyebrow: "Multi-Color LED",
    title: "Light tuned to mood.",
    body: "Underwater perimeter lighting with twelve preset palettes. Fade through warm dusk, sage, and cool moonlight.",
  },
  {
    image: seatingImg,
    eyebrow: "Ergonomic Shells",
    title: "Sculpted to the body.",
    body: "Each seat is contoured by physiotherapists for spinal alignment, with zoned hydrotherapy across shoulders, lumbar, and calves.",
  },
];

export function FeatureCarousel() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const total = SLIDES.length;

  return (
    <section className="bg-sand/40 border-y border-border">
      <div className="container-luxe py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow text-sage-deep">Built In</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Features that disappear into the experience.
            </h2>
          </div>
          <p className="hidden md:block eyebrow text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
            {SLIDES.map((s, i) => (
              <img
                key={s.eyebrow}
                src={s.image}
                alt={s.title}
                width={1280}
                height={896}
                loading="lazy"
                className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-sage-deep">{slide.eyebrow}</p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">{slide.title}</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">{slide.body}</p>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <button
                onClick={() => setIndex((i) => (i - 1 + total) % total)}
                aria-label="Previous feature"
                className="size-12 grid place-items-center border border-border rounded-sm hover:border-foreground btn-lift"
              >
                <ChevronLeft className="size-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % total)}
                aria-label="Next feature"
                className="size-12 grid place-items-center border border-border rounded-sm hover:border-foreground btn-lift"
              >
                <ChevronRight className="size-5" strokeWidth={1.5} />
              </button>
              <div className="ml-4 flex gap-1.5">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.eyebrow}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to ${s.eyebrow}`}
                    className={`h-px transition-all ${
                      i === index ? "w-12 bg-foreground" : "w-6 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Judy M.",
    location: "Vaughan, ON",
    rating: 5,
    product: "Hawaii II",
    quote:
      "From the showroom appointment to the crane install, every detail was considered. We use it every single night.",
  },
  {
    name: "Greg T.",
    location: "Mississauga, ON",
    rating: 5,
    product: "Monaco",
    quote:
      "I researched for two years before choosing Courtyard. The Monaco is whisper-quiet and the Balboa controls are flawless.",
  },
  {
    name: "Annika R.",
    location: "King City, ON",
    rating: 5,
    product: "San Fran",
    quote:
      "It transformed our backyard into a sanctuary. The San Fran feels less like an appliance and more like architecture.",
  },
  {
    name: "Daniel O.",
    location: "Toronto, ON",
    rating: 5,
    product: "Boreal Pro",
    quote:
      "Cold plunge every morning before the day begins. The most considered piece of equipment we own.",
  },
  {
    name: "The Whitlocks",
    location: "Aurora, ON",
    rating: 5,
    product: "Bora Bora",
    quote:
      "We hosted twelve people on opening night. Quietest, most beautifully built spa we've ever experienced.",
  },
  {
    name: "Marco F.",
    location: "Richmond Hill, ON",
    rating: 5,
    product: "Courtyard Mini",
    quote:
      "Plug, fill, soak. They had it on the rooftop terrace within an hour. Six months in, zero issues.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-sage-deep star-rating" aria-label={`${count} of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5" strokeWidth={0} />
      ))}
    </div>
  );
}

export function SocialProofWall() {
  return (
    <section className="container-luxe py-28 md:py-40">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-muted-foreground">Lived In</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl max-w-2xl">
            Notes from the homes we've shaped.
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <Stars count={5} />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">4.9</span> avg from 312 owners
          </p>
        </div>
      </Reveal>

      <div className="mt-14 md:mt-20 columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
        {REVIEWS.map((r, i) => (
          <Reveal
            key={r.name + r.product}
            delay={i * 70}
            className="break-inside-avoid mb-6 md:mb-8"
          >
            <article className="bg-card hairline border p-7 md:p-9 rounded-sm">
              <Stars count={r.rating} />
              <p className="mt-5 font-serif text-lg md:text-xl leading-snug text-foreground italic">
                "{r.quote}"
              </p>
              <div className="mt-7 pt-5 border-t border-border flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{r.location}</p>
                </div>
                <span className="eyebrow text-[10px] px-3 py-1.5 border border-border rounded-sm text-sage-deep">
                  {r.product}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

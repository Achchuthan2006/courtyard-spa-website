import { Reveal } from "./Reveal";
import { ShieldCheck, ArrowUp, Footprints, FlaskConical, Truck } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Insulated Cover",
    note: "Locking, R-18 thermal cover.",
  },
  {
    icon: ArrowUp,
    title: "Cover Lifter",
    note: "Hydraulic single-arm lift.",
  },
  {
    icon: Footprints,
    title: "Designer Steps",
    note: "Cedar-grain composite tread.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Starter Kit",
    note: "90 days of water care.",
  },
  {
    icon: Truck,
    title: "Backyard Delivery",
    note: "Crane drop & water-on.",
  },
];

export function WhatsIncluded() {
  return (
    <section className="container-luxe py-24 md:py-32">
      <Reveal>
        <p className="eyebrow text-sage-deep">What's Included</p>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl max-w-2xl">
          Every install, fully appointed.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className="bg-card p-8 md:p-10 flex flex-col items-start"
          >
            <item.icon className="size-7 text-sage-deep" strokeWidth={1.3} />
            <p className="mt-8 font-serif text-lg md:text-xl text-foreground">{item.title}</p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

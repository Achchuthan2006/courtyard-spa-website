import { useState } from "react";
import { Reveal } from "./Reveal";
import { products, formatPrice, type Product } from "@/lib/products";
import { Check, Minus } from "lucide-react";

const COMPARE_SLUGS = ["hawaii", "monaco", "bora-bora"] as const;

const SPEC_ROWS: Array<{ label: string; render: (p: Product) => string | number }> = [
  { label: "Seats", render: (p) => p.seats },
  { label: "Jets", render: (p) => p.jets },
  { label: "Pumps", render: (p) => p.pumps },
  { label: "Power", render: (p) => p.power },
  { label: "Dimensions", render: (p) => p.dimensions },
  { label: "Footprint", render: (p) => `${p.size} ft` },
];

const FEATURE_ROWS: Array<{ label: string; has: (p: Product) => boolean }> = [
  { label: "Balboa® Controls", has: () => true },
  { label: "LED Mood Lighting", has: () => true },
  { label: "Lounger Seat", has: (p) => p.seats >= 6 },
  { label: "Triple Pump System", has: (p) => p.pumps >= 3 },
];

export function ComparisonTable() {
  const items = COMPARE_SLUGS.map((s) => products.find((p) => p.slug === s)).filter(
    (p): p is Product => Boolean(p),
  );
  const [highlight, setHighlight] = useState<string | null>("monaco");

  return (
    <section id="compare" className="container-luxe py-28 md:py-40">
      <Reveal>
        <p className="eyebrow text-muted-foreground">Comparison Engine</p>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl max-w-3xl">
          Three vessels, side by side.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Hawaii II, Monaco, and Bora Bora — our most-asked-about hot tubs. Compare jets, seating,
          and power at a glance.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-12 md:mt-16">
        <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="w-40 text-left align-bottom pb-6 pr-6">
                  <p className="eyebrow text-muted-foreground">Specification</p>
                </th>
                {items.map((p) => (
                  <th
                    key={p.slug}
                    onMouseEnter={() => setHighlight(p.slug)}
                    onFocus={() => setHighlight(p.slug)}
                    className={`text-left align-bottom pb-6 px-6 transition-colors ${
                      highlight === p.slug ? "bg-sand/40" : ""
                    }`}
                  >
                    <p className="eyebrow text-sage-deep">{p.categoryLabel}</p>
                    <p className="mt-3 font-serif text-2xl md:text-3xl text-foreground">{p.name}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Starting at{" "}
                      <span className="text-foreground font-medium">{formatPrice(p.price)}</span>
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="py-5 pr-6 eyebrow text-muted-foreground">{row.label}</td>
                  {items.map((p) => (
                    <td
                      key={p.slug}
                      className={`py-5 px-6 font-serif text-lg text-foreground transition-colors ${
                        highlight === p.slug ? "bg-sand/40" : ""
                      }`}
                    >
                      {row.render(p)}
                    </td>
                  ))}
                </tr>
              ))}
              {FEATURE_ROWS.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="py-5 pr-6 eyebrow text-muted-foreground">{row.label}</td>
                  {items.map((p) => (
                    <td
                      key={p.slug}
                      className={`py-5 px-6 transition-colors ${
                        highlight === p.slug ? "bg-sand/40" : ""
                      }`}
                    >
                      {row.has(p) ? (
                        <Check className="size-5 text-sage-deep" strokeWidth={1.5} />
                      ) : (
                        <Minus className="size-5 text-muted-foreground/50" strokeWidth={1.5} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

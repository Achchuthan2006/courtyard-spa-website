import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/products";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "Financing — The Courtyard Spa Co." },
      {
        name: "description",
        content: "Considered terms for considered purchases. Calculate your monthly payment.",
      },
      { property: "og:title", content: "Financing — The Courtyard Spa Co." },
      { property: "og:description", content: "Calculate your monthly investment." },
    ],
  }),
  component: FinancingPage,
});

function FinancingPage() {
  const [price, setPrice] = useState(14900);
  const [down, setDown] = useState(2000);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(7.99);

  const monthly = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const r = apr / 100 / 12;
    if (r === 0) return principal / term;
    const m = (principal * r) / (1 - Math.pow(1 + r, -term));
    return m;
  }, [price, down, term, apr]);

  const totalPaid = monthly * term + down;
  const totalInterest = totalPaid - price;

  return (
    <SiteShell>
      <section className="bg-stone pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Financing</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
              Considered terms for
              <br />
              <em className="italic font-light text-muted-foreground">considered purchases.</em>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              Partner financing from 0% APR for qualified buyers. Soft credit check, instant
              decision, and zero impact on your credit score.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-7 space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="eyebrow text-muted-foreground">Vessel Price</label>
                <span className="font-serif text-2xl">{formatPrice(price)}</span>
              </div>
              <Slider
                min={4000}
                max={35000}
                step={500}
                value={[price]}
                onValueChange={(v) => setPrice(v[0])}
              />
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="eyebrow text-muted-foreground">Down Payment</label>
                <span className="font-serif text-2xl">{formatPrice(down)}</span>
              </div>
              <Slider
                min={0}
                max={Math.min(price, 15000)}
                step={250}
                value={[Math.min(down, price)]}
                onValueChange={(v) => setDown(v[0])}
              />
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="eyebrow text-muted-foreground">Term</label>
                <span className="font-serif text-2xl">{term} months</span>
              </div>
              <Slider
                min={12}
                max={120}
                step={12}
                value={[term]}
                onValueChange={(v) => setTerm(v[0])}
              />
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="eyebrow text-muted-foreground">APR</label>
                <span className="font-serif text-2xl">{apr.toFixed(2)}%</span>
              </div>
              <Slider
                min={0}
                max={18}
                step={0.25}
                value={[apr]}
                onValueChange={(v) => setApr(v[0])}
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="bg-forest-deep text-cream p-10 md:p-12 rounded-sm sticky top-28">
              <p className="eyebrow text-cream/60">Estimated Monthly</p>
              <p className="mt-6 font-serif text-6xl md:text-7xl tracking-tight">
                {formatPrice(Math.round(monthly))}
                <span className="text-base text-cream/60 font-sans"> / mo</span>
              </p>

              <dl className="mt-12 space-y-5 text-sm">
                <div className="flex justify-between border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Amount Financed</dt>
                  <dd>{formatPrice(Math.max(price - down, 0))}</dd>
                </div>
                <div className="flex justify-between border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Total Interest</dt>
                  <dd>{formatPrice(Math.round(totalInterest))}</dd>
                </div>
                <div className="flex justify-between border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Total Paid</dt>
                  <dd>{formatPrice(Math.round(totalPaid))}</dd>
                </div>
              </dl>

              <p className="mt-10 text-xs text-cream/50 leading-relaxed">
                Estimate only. Final terms determined by lender at application. Soft credit pull
                does not affect your score.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

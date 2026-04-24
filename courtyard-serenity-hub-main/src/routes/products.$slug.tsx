import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { FeatureCarousel } from "@/components/site/FeatureCarousel";
import { WhatsIncluded } from "@/components/site/WhatsIncluded";
import { products, formatPrice } from "@/lib/products";
import { Ruler, Users, Waves, Box, Thermometer, Shield, Cog, Sparkles } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — The Courtyard Spa Co.` },
      { name: "description", content: loaderData?.product.tagline },
      { property: "og:title", content: `${loaderData?.product.name} — The Courtyard Spa Co.` },
      { property: "og:description", content: loaderData?.product.tagline },
      { property: "og:image", content: loaderData?.product.image },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-luxe py-40 text-center">
        <h1 className="font-serif text-4xl">Vessel not found</h1>
        <Link to="/" className="mt-6 inline-block link-underline">
          Return home
        </Link>
      </div>
    </SiteShell>
  ),
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();

  const heroSpecs = [
    { icon: Users, label: "Seats", value: String(p.seats) },
    { icon: Waves, label: "Jets", value: p.jets > 0 ? String(p.jets) : "—" },
    { icon: Cog, label: "Pumps", value: String(p.pumps) },
  ];

  const detailSpecs = [
    { icon: Ruler, label: "Dimensions", value: p.dimensions },
    { icon: Box, label: "Footprint", value: `${p.size} ft` },
    {
      icon: Thermometer,
      label: "Temperature",
      value: p.category === "cold-plunges" ? "37°F – 60°F" : "80°F – 104°F",
    },
    { icon: Shield, label: "Warranty", value: "7 years structural" },
  ];

  const related = products
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 3);

  return (
    <SiteShell>
      <section className="pt-28 md:pt-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] bg-muted overflow-hidden rounded-sm">
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={1280}
                className="size-full object-cover"
              />
              {p.isLimited && (
                <span className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-2 text-[10px] eyebrow bg-background/90 backdrop-blur text-sage-deep rounded-sm border border-sage/30">
                  <Sparkles className="size-3" strokeWidth={1.5} /> Limited Availability
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-muted-foreground">{p.categoryLabel}</p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.02]">{p.name}</h1>
            <p className="mt-6 text-lg text-muted-foreground italic font-serif">{p.tagline}</p>

            <div className="mt-10 flex items-baseline gap-3 flex-wrap">
              <span className="eyebrow text-muted-foreground">Starting at</span>
              <span className="font-serif text-3xl text-foreground">{formatPrice(p.price)}</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              From {formatPrice(Math.round(p.price / 60))} / month with financing
            </p>

            {/* Hero spec icon grid — Seats / Jets / Pumps */}
            <div className="mt-10 grid grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {heroSpecs.map((s) => (
                <div key={s.label} className="bg-card p-5 flex flex-col items-center text-center">
                  <s.icon className="size-6 text-sage-deep" strokeWidth={1.4} />
                  <p className="mt-3 font-serif text-3xl text-foreground leading-none">{s.value}</p>
                  <p className="mt-2 eyebrow text-muted-foreground text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-foreground leading-relaxed">{p.description}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/book"
                className="flex-1 inline-flex items-center justify-center px-6 py-4 text-xs eyebrow bg-primary text-primary-foreground rounded-sm btn-lift hover:bg-sage-deep"
              >
                Book Private Viewing
              </Link>
              <Link
                to="/financing"
                className="flex-1 inline-flex items-center justify-center px-6 py-4 text-xs eyebrow border border-foreground/20 text-foreground rounded-sm btn-lift hover:bg-muted"
              >
                Calculate Financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CAROUSEL */}
      <div className="mt-28 md:mt-40">
        <FeatureCarousel />
      </div>

      {/* WHAT'S INCLUDED */}
      <WhatsIncluded />

      {/* DETAIL SPECS */}
      <section className="container-luxe py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Specifications</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl max-w-xl">
            Engineered to the millimeter.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {detailSpecs.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              className="border-b border-border lg:[&:not(:last-child)]:border-r sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r p-8"
            >
              <s.icon className="size-5 text-sage-deep" strokeWidth={1.4} />
              <p className="mt-6 eyebrow text-muted-foreground">{s.label}</p>
              <p className="mt-3 font-serif text-2xl text-foreground">{s.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-luxe pb-28 md:pb-40">
          <p className="eyebrow text-muted-foreground">More from {p.categoryLabel}s</p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 md:gap-8">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/products/$slug"
                params={{ slug: r.slug }}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden image-zoom bg-muted rounded-sm">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl">{r.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Starting at {formatPrice(r.price)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteShell>
  );
}

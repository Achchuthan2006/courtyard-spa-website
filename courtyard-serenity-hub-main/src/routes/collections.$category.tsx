import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { categories, products, formatPrice, type Category } from "@/lib/products";
import { Slider } from "@/components/ui/slider";

export const Route = createFileRoute("/collections/$category")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return { category: cat };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name} — The Courtyard Spa Co.` },
      { name: "description", content: loaderData?.category.description },
      { property: "og:title", content: `${loaderData?.category.name} — The Courtyard Spa Co.` },
      { property: "og:description", content: loaderData?.category.description },
      { property: "og:image", content: loaderData?.category.image },
    ],
  }),
  component: CollectionPage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-luxe py-40 text-center">
        <h1 className="font-serif text-4xl">Collection not found</h1>
        <Link to="/" className="mt-6 inline-block link-underline">
          Return home
        </Link>
      </div>
    </SiteShell>
  ),
});

function CollectionPage() {
  const { category } = Route.useLoaderData();
  const items = useMemo(
    () => products.filter((p) => p.category === (category.slug as Category)),
    [category.slug],
  );

  const sizes = items.map((p) => p.size);
  const minSize = Math.min(...sizes, 4);
  const maxSize = Math.max(...sizes, 30);
  const seatsAll = Array.from(new Set(items.map((p) => p.seats))).sort((a, b) => a - b);

  const [sizeRange, setSizeRange] = useState<[number, number]>([minSize, maxSize]);
  const [seatFilter, setSeatFilter] = useState<number | null>(null);

  const filtered = items.filter(
    (p) =>
      p.size >= sizeRange[0] &&
      p.size <= sizeRange[1] &&
      (seatFilter === null || p.seats === seatFilter),
  );

  return (
    <SiteShell>
      {/* Header */}
      <section className="relative h-[60svh] min-h-[440px] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="container-luxe relative z-10 h-full flex flex-col justify-end pb-16">
          <p className="eyebrow text-cream/70 reveal">The Collection</p>
          <h1 className="mt-4 font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[0.95] reveal reveal-delay-1">
            {category.name}
          </h1>
          <p className="mt-6 max-w-xl text-cream/85 reveal reveal-delay-2">
            {category.description}
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start space-y-10">
          <div>
            <p className="eyebrow text-muted-foreground mb-4">Filter</p>
            <p className="font-serif text-2xl">Refine</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-4">
              <p className="eyebrow text-muted-foreground">Size</p>
              <p className="text-sm">
                {sizeRange[0]}′ – {sizeRange[1]}′
              </p>
            </div>
            <Slider
              min={minSize}
              max={maxSize}
              step={1}
              value={sizeRange}
              onValueChange={(v) => setSizeRange([v[0], v[1]] as [number, number])}
              className="mt-2"
            />
          </div>

          <div>
            <p className="eyebrow text-muted-foreground mb-4">Seating</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSeatFilter(null)}
                className={`px-4 py-2 text-xs eyebrow rounded-sm border transition-colors ${
                  seatFilter === null
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-foreground"
                }`}
              >
                All
              </button>
              {seatsAll.map((s) => (
                <button
                  key={s}
                  onClick={() => setSeatFilter(s)}
                  className={`px-4 py-2 text-xs eyebrow rounded-sm border transition-colors ${
                    seatFilter === s
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {s} seat{s > 1 ? "s" : ""}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "vessel" : "vessels"}
          </p>
        </aside>

        <div className="lg:col-span-9">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">No vessels match your filters.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden image-zoom bg-muted rounded-sm">
                      <img
                        src={p.image}
                        alt={p.name}
                        width={1024}
                        height={1280}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                      />
                      {p.isLimited && (
                        <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] eyebrow bg-background/90 backdrop-blur text-sage-deep rounded-sm border border-sage/30">
                          Limited Availability
                        </span>
                      )}
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow text-muted-foreground">{p.categoryLabel}</p>
                        <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {p.size}′ · {p.seats} seat{p.seats > 1 ? "s" : ""}
                          {p.jets > 0 && ` · ${p.jets} jets`}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="eyebrow text-muted-foreground text-[10px]">Starting at</p>
                        <p className="mt-1 font-serif text-lg">{formatPrice(p.price)}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

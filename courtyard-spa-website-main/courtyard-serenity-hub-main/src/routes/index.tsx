import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-backyard.jpg";
import seasonalImg from "@/assets/seasonal-collection.jpg";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { Parallax } from "@/components/site/Parallax";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { SocialProofWall } from "@/components/site/SocialProofWall";
import { ShowroomMap } from "@/components/site/ShowroomMap";
import { categories, products, formatPrice } from "@/lib/products";
import { ArrowUpRight, HardHat, Cpu, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Courtyard Spa Co. - Space is the New Luxe" },
      {
        name: "description",
        content:
          "Premium hot tubs, swim spas, plug n' plays, and cold plunges designed for the modern home. Quiet luxury, considered hydrotherapy.",
      },
      { property: "og:title", content: "The Courtyard Spa Co. - Space is the New Luxe" },
      {
        property: "og:description",
        content: "Premium wellness vessels designed for the modern home.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.filter((p) => ["hawaii", "monaco"].includes(p.slug));

  return (
    <SiteShell>
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Modern architectural backyard with sunken concrete hot tub at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-forest-deep/15" />

        <div className="container-luxe relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-3xl reveal">
            <p className="eyebrow text-cream/70">The Courtyard Spa Company</p>
            <h1 className="mt-6 font-serif text-cream text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
              Space is the
              <br />
              <em className="italic font-light">new luxe.</em>
            </h1>
            <p className="mt-8 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed reveal reveal-delay-2">
              Premium hot tubs, swim spas, and cold plunges designed for the modern home.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 reveal reveal-delay-3">
              <Link
                to="/collections/$category"
                params={{ category: "hot-tubs" }}
                className="inline-flex items-center gap-2 px-7 py-4 text-xs eyebrow bg-cream text-forest-deep rounded-sm btn-lift hover:bg-cream/95"
              >
                Browse Collection
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-7 py-4 text-xs eyebrow border border-cream/50 text-cream rounded-sm btn-lift hover:bg-cream/10"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-cream/15 pt-8 reveal reveal-delay-4">
            {[
              ["28", "Years of craft"],
              ["1,400+", "Installations"],
              ["7", "Year warranty"],
              ["100%", "By appointment"],
            ].map(([k, v]) => (
              <div key={v}>
                <p className="font-serif text-cream text-3xl md:text-4xl">{k}</p>
                <p className="mt-2 text-cream/60 text-xs eyebrow">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">Our Philosophy</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              We don't sell spas.
              <br />
              <span className="text-muted-foreground italic font-light">
                We design quiet rooms made of water.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
              Every vessel in our collection is engineered for permanence - sculpted shells,
              hospital-grade filtration, and hydrotherapy zones tuned by physiotherapists. The
              result is wellness furniture worthy of the home you've built around it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe pb-28 md:pb-40">
        <Reveal className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <p className="eyebrow text-muted-foreground">The Collections</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">Four vessels. One language.</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-5 md:h-[720px]">
          {categories.map((cat, i) => {
            const layouts = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-3",
              "md:col-span-2",
            ];
            return (
              <Reveal
                key={cat.slug}
                delay={i * 100}
                className={`${layouts[i]} group relative overflow-hidden image-zoom rounded-sm bg-muted h-72 md:h-auto`}
              >
                <Link
                  to="/collections/$category"
                  params={{ category: cat.slug }}
                  className="block size-full"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/15 to-transparent" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-cream">
                    <p className="eyebrow text-cream/60">0{i + 1}</p>
                    <h3 className="mt-3 font-serif text-2xl md:text-4xl">{cat.name}</h3>
                    <p className="mt-2 text-sm text-cream/80 max-w-xs">{cat.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs eyebrow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ComparisonTable />

      <section className="relative overflow-hidden">
        <div className="container-luxe">
          <div className="relative grid md:grid-cols-12 gap-0 bg-forest-deep text-cream rounded-sm overflow-hidden">
            <Parallax className="md:col-span-6 min-h-[420px]">
              <img
                src={seasonalImg}
                alt="Seasonal wellness sanctuary at golden hour"
                width={1920}
                height={1080}
                loading="lazy"
                className="size-full object-cover"
              />
            </Parallax>
            <div className="md:col-span-6 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <p className="eyebrow text-cream/60">Spring - Featured Models</p>
              <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
                The Equinox Collection.
              </h2>
              <p className="mt-6 text-cream/80 leading-relaxed max-w-md">
                A curated selection of our most-asked-about vessels, available with priority
                delivery through April. Private install, white-glove logistics.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {featured.map((p) => (
                  <Link
                    key={p.slug}
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="group block border border-cream/15 rounded-sm p-5 hover:border-cream/40 transition-colors"
                  >
                    <p className="eyebrow text-cream/50">{p.categoryLabel}</p>
                    <p className="mt-2 font-serif text-xl">{p.name}</p>
                    <div className="mt-4">
                      <p className="eyebrow text-cream/40 text-[10px]">Starting at</p>
                      <p className="mt-1 font-serif text-lg">{formatPrice(p.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/collections/$category"
                params={{ category: "hot-tubs" }}
                className="mt-10 inline-flex items-center gap-2 text-sm link-underline text-cream"
              >
                {"View all featured ->"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-28 md:py-40">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Why The Courtyard</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl max-w-3xl">
            Three pillars beneath every install.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {[
            {
              num: "01",
              icon: HardHat,
              title: "Expert Installation",
              body: "In-house crews - never subcontracted. Site survey, electrical coordination, crane delivery, and water-on commissioning, all by The Courtyard.",
            },
            {
              num: "02",
              icon: Cpu,
              title: "Industry-Leading Components",
              body: "Every vessel runs on Balboa control systems and stainless-steel jet packs. The same components trusted by the world's most demanding spa builders.",
            },
            {
              num: "03",
              icon: Truck,
              title: "Rapid Delivery",
              body: "Most in-stock vessels ship within ten business days. White-glove logistics, climate-controlled transport, scheduled to the hour.",
            },
          ].map((p, i) => (
            <Reveal key={p.num} delay={i * 120} className="bg-card p-10 md:p-12 flex flex-col">
              <div className="flex items-center justify-between">
                <p.icon className="size-7 text-sage-deep" strokeWidth={1.4} />
                <span className="eyebrow text-muted-foreground">{p.num}</span>
              </div>
              <h3 className="mt-10 font-serif text-2xl md:text-3xl text-foreground">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <SocialProofWall />
      <LeadMagnet />
      <ShowroomMap />
    </SiteShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import seasonalImg from "@/assets/seasonal-collection.jpg";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Journal - The Courtyard Spa Co." },
      { name: "description", content: "On craftsmanship, ritual, and the spaces we call home." },
      { property: "og:title", content: "Journal - The Courtyard Spa Co." },
      {
        property: "og:description",
        content: "On craftsmanship, ritual, and the spaces we call home.",
      },
      { property: "og:image", content: seasonalImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="container-luxe pt-40 md:pt-52 pb-24">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Journal - No. 14</p>
          <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl">
            On the quiet rooms
            <br />
            <em className="italic font-light text-muted-foreground">made of water.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We started The Courtyard Spa Company because we couldn't find a hot tub we'd want to put
            in our own homes. Every vessel was loud, lit like a casino, and built to be replaced. We
            chose a different brief.
          </p>
        </Reveal>
      </section>

      <section className="relative h-[70svh] min-h-[480px] overflow-hidden">
        <img
          src={seasonalImg}
          alt="Wellness sanctuary at golden hour"
          width={1920}
          height={1080}
          loading="lazy"
          className="size-full object-cover"
        />
      </section>

      <section className="container-luxe py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">The Brief</p>
          </Reveal>
          <Reveal
            delay={120}
            className="md:col-span-8 space-y-8 text-lg leading-relaxed text-foreground"
          >
            <p>
              A vessel that disappears into the architecture. Quiet enough to read beside. Built
              from materials that age with grace. Engineered to last twenty years, not seven.
            </p>
            <p className="text-muted-foreground">
              We collaborate with industrial designers, hydrotherapists, and the same Italian
              composite engineers who build ocean-racing yacht hulls. Every shell is hand-finished.
              Every jet is positioned by a physiotherapist.
            </p>
            <p className="text-muted-foreground">
              The result is a small catalog - four collections, deliberately edited - that we'd be
              proud to install in our own courtyards. We hope you feel the same.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-deep text-cream py-28 md:py-40">
        <div className="container-luxe grid md:grid-cols-2 gap-10 items-end">
          <Reveal>
            <p className="eyebrow text-cream/60">Visit</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02]">
              Come spend an hour with us.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:text-right">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs eyebrow bg-cream text-forest-deep rounded-sm hover:bg-cream/90 transition-colors"
            >
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

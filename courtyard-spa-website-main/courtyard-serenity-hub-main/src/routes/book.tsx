import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment - The Courtyard Spa Co." },
      {
        name: "description",
        content: "Private studio appointments by reservation. Test the water before you commit.",
      },
      { property: "og:title", content: "Book Appointment - The Courtyard Spa Co." },
      { property: "og:description", content: "Private studio appointments by reservation." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      <section className="pt-32 md:pt-44 pb-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-muted-foreground">Book Appointment</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.98]">
              By reservation,
              <br />
              <em className="italic font-light text-muted-foreground">always.</em>
            </h1>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              Our studios are intimate. Each appointment is reserved for one party at a time - we'll
              have the water at temperature when you arrive.
            </p>

            <dl className="mt-12 space-y-6 text-sm">
              <div className="border-t border-border pt-5">
                <dt className="eyebrow text-muted-foreground">Studio</dt>
                <dd className="mt-2 font-serif text-lg">418 Industrial Ln, Sausalito CA</dd>
              </div>
              <div className="border-t border-border pt-5">
                <dt className="eyebrow text-muted-foreground">Hours</dt>
                <dd className="mt-2 font-serif text-lg">Wed - Sun, 10:00 - 18:00</dd>
              </div>
              <div className="border-t border-border pt-5">
                <dt className="eyebrow text-muted-foreground">Direct</dt>
                <dd className="mt-2 font-serif text-lg">1 (800) 555 0190</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            {submitted ? (
              <div className="bg-forest-deep text-cream p-12 rounded-sm">
                <p className="eyebrow text-cream/60">Reservation received</p>
                <h2 className="mt-6 font-serif text-4xl">We'll be in touch within 24 hours.</h2>
                <p className="mt-6 text-cream/80">
                  A member of our studio team will confirm your appointment by email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-card border border-border p-8 md:p-12 rounded-sm space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="First Name" name="first" required />
                  <Field label="Last Name" name="last" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="eyebrow text-muted-foreground block mb-3">Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Swim Spas",
                      "Hot Tubs",
                      "Plug N' Plays",
                      "Cold Plunges",
                      "Just Browsing",
                    ].map((t) => (
                      <label
                        key={t}
                        className="px-4 py-2 text-xs eyebrow border border-border rounded-sm cursor-pointer hover:border-foreground transition-colors has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary"
                      >
                        <input type="checkbox" name="interest" value={t} className="sr-only" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <Field label="Preferred Date" name="date" type="date" />

                <div>
                  <label className="eyebrow text-muted-foreground block mb-3">Notes</label>
                  <textarea
                    name="notes"
                    rows={4}
                    className="w-full bg-transparent border-b border-border pb-3 outline-none focus:border-foreground transition-colors resize-none font-serif text-lg"
                    placeholder="Anything we should know"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-7 py-4 text-xs eyebrow bg-primary text-primary-foreground rounded-sm hover:bg-forest-deep transition-colors"
                >
                  Reserve Appointment
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground block mb-3">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-border pb-3 outline-none focus:border-foreground transition-colors font-serif text-lg"
      />
    </div>
  );
}

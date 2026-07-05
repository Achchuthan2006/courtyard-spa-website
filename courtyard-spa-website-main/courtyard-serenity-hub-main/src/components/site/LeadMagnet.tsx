import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { Check } from "lucide-react";
import seasonalImg from "@/assets/seasonal-collection.jpg";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
});

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
    });
    if (!parsed.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as "name" | "email";
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="container-luxe pb-28 md:pb-40">
      <div className="relative grid md:grid-cols-12 gap-0 overflow-hidden rounded-sm bg-card border border-border">
        <Parallax className="md:col-span-5 min-h-[360px] md:min-h-[520px]">
          <img
            src={seasonalImg}
            alt="A printed planning guide on a linen surface"
            width={1280}
            height={1600}
            loading="lazy"
            className="size-full object-cover"
          />
        </Parallax>

        <div className="md:col-span-7 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-sage-deep">Complimentary Download</p>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
              The Ultimate Backyard
              <br />
              <span className="italic font-light text-muted-foreground">Spa Planning Guide.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              48 pages on siting, electrical, foundations, water care, and the architectural details
              that separate a spa from a sanctuary. Sent to your inbox.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal className="mt-10 max-w-md flex items-start gap-4 p-6 border border-sage/40 bg-sage/5 rounded-sm">
              <div className="size-10 shrink-0 rounded-full bg-sage-deep text-cream flex items-center justify-center">
                <Check className="size-5" strokeWidth={2} />
              </div>
              <div>
                <p className="font-serif text-xl text-foreground">On its way.</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Check your inbox in the next few minutes for the Planning Guide.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={120}>
              <form onSubmit={onSubmit} noValidate className="mt-10 max-w-md space-y-5">
                <div>
                  <label htmlFor="lm-name" className="eyebrow text-muted-foreground block mb-2">
                    Your Name
                  </label>
                  <input
                    id="lm-name"
                    name="name"
                    type="text"
                    maxLength={100}
                    required
                    autoComplete="name"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none text-foreground placeholder:text-muted-foreground/60 transition-colors"
                    placeholder="Jane Architect"
                  />
                  {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="lm-email" className="eyebrow text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    id="lm-email"
                    name="email"
                    type="email"
                    maxLength={255}
                    required
                    autoComplete="email"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none text-foreground placeholder:text-muted-foreground/60 transition-colors"
                    placeholder="hello@studio.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center px-7 py-4 text-xs eyebrow bg-primary text-primary-foreground rounded-sm btn-lift hover:bg-sage-deep"
                >
                  Send Me the Guide
                </button>
                <p className="text-xs text-muted-foreground/80">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import { MapPin, Calendar, Phone } from "lucide-react";

export function ShowroomMap() {
  return (
    <section className="bg-stone">
      <div className="container-luxe py-24 md:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-sage-deep">By Appointment Only</p>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
            The Vaughan Studio.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Our 6,000 sq. ft. studio in Vaughan, Ontario is open exclusively for private
            consultations. Test the water. Hear the silence. Meet the team that will hand-deliver
            your install.
          </p>

          <ul className="mt-10 space-y-5 max-w-sm">
            <li className="flex gap-4 items-start">
              <MapPin className="size-5 text-sage-deep mt-0.5 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="text-sm font-medium text-foreground">9000 Jane Street</p>
                <p className="text-sm text-muted-foreground">Vaughan, ON L4K 4N7</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Calendar className="size-5 text-sage-deep mt-0.5 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="text-sm font-medium text-foreground">Tuesday – Saturday</p>
                <p className="text-sm text-muted-foreground">10am – 6pm · By appointment</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Phone className="size-5 text-sage-deep mt-0.5 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="text-sm font-medium text-foreground">+1 (905) 555 0190</p>
                <p className="text-sm text-muted-foreground">hello@courtyardspa.co</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="relative aspect-[5/4] w-full rounded-sm overflow-hidden border border-border bg-sand/30">
            {/* Stylized map — soft beige base, sage waterways, marker pin */}
            <svg
              viewBox="0 0 800 640"
              role="img"
              aria-label="Stylized map of Vaughan, Ontario showroom location"
              className="absolute inset-0 size-full"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M40 0 L0 0 0 40"
                    fill="none"
                    stroke="oklch(0.86 0.012 80)"
                    strokeWidth="0.5"
                  />
                </pattern>
                <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.42 0.05 150)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="oklch(0.42 0.05 150)" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="800" height="640" fill="oklch(0.93 0.014 80)" />
              <rect width="800" height="640" fill="url(#grid)" />

              {/* Greenways */}
              <path
                d="M0 480 Q200 420 400 460 T800 420"
                fill="none"
                stroke="oklch(0.72 0.04 145)"
                strokeWidth="60"
                strokeOpacity="0.35"
                strokeLinecap="round"
              />
              <path
                d="M120 0 Q140 200 80 360 T200 640"
                fill="none"
                stroke="oklch(0.72 0.04 145)"
                strokeWidth="40"
                strokeOpacity="0.3"
                strokeLinecap="round"
              />

              {/* Roads */}
              <g stroke="oklch(0.78 0.014 80)" strokeWidth="2" fill="none">
                <line x1="0" y1="200" x2="800" y2="200" />
                <line x1="0" y1="340" x2="800" y2="340" />
                <line x1="0" y1="500" x2="800" y2="500" />
                <line x1="280" y1="0" x2="280" y2="640" />
                <line x1="500" y1="0" x2="500" y2="640" />
                <line x1="660" y1="0" x2="660" y2="640" />
              </g>

              <g stroke="oklch(0.66 0.014 80)" strokeWidth="3" fill="none">
                <line x1="0" y1="280" x2="800" y2="280" strokeDasharray="6 8" />
                <line x1="400" y1="0" x2="400" y2="640" strokeDasharray="6 8" />
              </g>

              {/* Labels */}
              <text
                x="40"
                y="50"
                fill="oklch(0.5 0.014 150)"
                fontFamily="Inter, sans-serif"
                fontSize="11"
                letterSpacing="2.5"
              >
                VAUGHAN, ON
              </text>
              <text
                x="120"
                y="200"
                fill="oklch(0.5 0.014 150)"
                fontFamily="Inter, sans-serif"
                fontSize="10"
                letterSpacing="1.5"
                dy="-6"
              >
                HWY 7
              </text>
              <text
                x="510"
                y="320"
                fill="oklch(0.5 0.014 150)"
                fontFamily="Inter, sans-serif"
                fontSize="10"
                letterSpacing="1.5"
              >
                JANE ST
              </text>

              {/* Pulse + pin */}
              <circle cx="400" cy="340" r="120" fill="url(#pulse)" />
              <circle cx="400" cy="340" r="10" fill="oklch(0.42 0.05 150)" />
              <circle cx="400" cy="340" r="4" fill="oklch(0.975 0.012 80)" />
            </svg>

            <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-xs bg-background/95 backdrop-blur p-5 rounded-sm border border-border shadow-soft">
              <p className="eyebrow text-sage-deep text-[10px]">The Studio</p>
              <p className="mt-2 font-serif text-lg text-foreground">The Courtyard Spa Co.</p>
              <p className="mt-1 text-xs text-muted-foreground">9000 Jane Street, Vaughan</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

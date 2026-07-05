import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container-luxe py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow text-cream/60">The Courtyard Spa Co.</p>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05] max-w-md">
              Designed for the spaces you call home.
            </h2>
            <Link
              to="/book"
              className="mt-10 inline-flex items-center gap-3 text-sm link-underline text-cream"
            >
              Book a private consultation
            </Link>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="eyebrow text-cream/50 mb-4">Collections</p>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/collections/$category"
                    params={{ category: "swim-spas" }}
                    className="link-underline"
                  >
                    Swim Spas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/$category"
                    params={{ category: "hot-tubs" }}
                    className="link-underline"
                  >
                    Hot Tubs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/$category"
                    params={{ category: "plug-n-plays" }}
                    className="link-underline"
                  >
                    Plug N' Plays
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/$category"
                    params={{ category: "cold-plunges" }}
                    className="link-underline"
                  >
                    Cold Plunges
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-cream/50 mb-4">Studio</p>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="link-underline">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link to="/financing" className="link-underline">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="link-underline">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-cream/50 mb-4">Contact</p>
              <ul className="space-y-3 text-cream/80">
                <li>hello@courtyardspa.co</li>
                <li>1 (800) 555 0190</li>
                <li>By appointment only</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-cream/50">
          <p>(c) {new Date().getFullYear()} The Courtyard Spa Company. All rights reserved.</p>
          <p className="eyebrow">Made with intention.</p>
        </div>
      </div>
    </footer>
  );
}

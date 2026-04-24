import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { products, sizeBucket, type Category } from "@/lib/products";

type NavItem =
  | { kind: "mega"; category: Category; label: string }
  | { kind: "cat"; category: Category; label: string }
  | { kind: "page"; to: "/financing" | "/about"; label: string };

const NAV: NavItem[] = [
  { kind: "mega", category: "swim-spas", label: "Swim Spas" },
  { kind: "mega", category: "hot-tubs", label: "Hot Tubs" },
  { kind: "cat", category: "plug-n-plays", label: "Plug N' Plays" },
  { kind: "cat", category: "cold-plunges", label: "Cold Plunges" },
  { kind: "page", to: "/financing", label: "Financing" },
  { kind: "page", to: "/about", label: "Journal" },
];

const sizeOrder: Array<"compact" | "mid" | "large"> = ["compact", "mid", "large"];
const sizeHeading: Record<string, string> = {
  compact: "Compact",
  mid: "Mid Size",
  large: "Large Format",
};

function MegaPanel({ category, onNavigate }: { category: Category; onNavigate: () => void }) {
  const items = products.filter((p) => p.category === category);
  const grouped = sizeOrder
    .map((bucket) => ({
      bucket,
      items: items.filter((i) => sizeBucket(i.size) === bucket),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl border-t border-b border-border shadow-elev">
      <div className="container-luxe py-12 grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <p className="eyebrow text-muted-foreground">The Collection</p>
          <h3 className="mt-4 font-serif text-3xl">
            {category === "swim-spas" ? "Swim Spas" : "Hot Tubs"}
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {category === "swim-spas"
              ? "Endless current systems engineered for daily training and shared evenings."
              : "Hand-finished hydrotherapy vessels in three size families."}
          </p>
          <Link
            to="/collections/$category"
            params={{ category }}
            onClick={onNavigate}
            className="mt-6 inline-flex items-center gap-2 text-sm link-underline text-foreground"
          >
            Browse all <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
        {grouped.map((group) => (
          <div key={group.bucket} className="col-span-3">
            <p className="eyebrow text-muted-foreground mb-5">{sizeHeading[group.bucket]}</p>
            <ul className="space-y-3">
              {group.items.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    onClick={onNavigate}
                    className="group flex items-baseline justify-between gap-4 py-1"
                  >
                    <span className="font-serif text-lg text-foreground group-hover:text-sage-deep transition-colors">
                      {p.name}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {p.size}′ · {p.seats} seat
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<Category | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderDesktopLink = (item: NavItem) => {
    const baseClass = cn(
      "text-sm link-underline transition-colors py-2",
      scrolled || megaOpen
        ? "text-foreground/85 hover:text-foreground"
        : "text-cream/85 hover:text-cream",
    );

    if (item.kind === "mega") {
      return (
        <button
          key={item.label}
          onMouseEnter={() => setMegaOpen(item.category)}
          onFocus={() => setMegaOpen(item.category)}
          onClick={() => setMegaOpen((c) => (c === item.category ? null : item.category))}
          className={baseClass}
          aria-expanded={megaOpen === item.category}
        >
          {item.label}
        </button>
      );
    }

    if (item.kind === "cat") {
      return (
        <Link
          key={item.label}
          to="/collections/$category"
          params={{ category: item.category }}
          className={baseClass}
          onMouseEnter={() => setMegaOpen(null)}
          activeProps={{ className: "font-medium" }}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.to}
        className={baseClass}
        onMouseEnter={() => setMegaOpen(null)}
        activeProps={{ className: "font-medium" }}
      >
        {item.label}
      </Link>
    );
  };

  const headerSolid = scrolled || megaOpen !== null;

  return (
    <>
      <header
        onMouseLeave={() => setMegaOpen(null)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          headerSolid
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent",
        )}
      >
        <div className="container-luxe flex h-16 md:h-20 items-center justify-between gap-6">
          <Link to="/" onClick={() => setMegaOpen(null)} className="flex items-center gap-2 group">
            <span
              className={cn(
                "font-serif text-lg md:text-xl tracking-tight transition-colors",
                headerSolid ? "text-foreground" : "text-cream",
              )}
            >
              The Courtyard
            </span>
            <span
              className={cn(
                "eyebrow hidden sm:inline-block transition-colors",
                headerSolid ? "text-muted-foreground" : "text-cream/70",
              )}
            >
              Spa Co.
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => renderDesktopLink(item))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              onClick={() => setMegaOpen(null)}
              className={cn(
                "hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs eyebrow rounded-sm btn-lift",
                headerSolid
                  ? "bg-primary text-primary-foreground hover:bg-sage-deep"
                  : "bg-cream text-forest-deep hover:bg-cream/90",
              )}
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className={cn("lg:hidden p-2 -mr-2", headerSolid ? "text-foreground" : "text-cream")}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {megaOpen && <MegaPanel category={megaOpen} onNavigate={() => setMegaOpen(null)} />}
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden bg-background transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container-luxe pt-24 pb-10 h-full overflow-y-auto flex flex-col">
          <p className="eyebrow text-muted-foreground">Menu</p>
          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map((item) => {
              const className = "py-5 border-b border-border font-serif text-3xl text-foreground";
              if (item.kind === "page") {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={className}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.label}
                  to="/collections/$category"
                  params={{ category: item.category }}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center px-5 py-5 text-xs eyebrow bg-primary text-primary-foreground rounded-sm btn-lift"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}

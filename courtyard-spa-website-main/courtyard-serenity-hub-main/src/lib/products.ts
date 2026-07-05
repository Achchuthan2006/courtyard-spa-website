import swimSpaImg from "@/assets/cat-swim-spa.jpg";
import hotTubImg from "@/assets/cat-hot-tub.jpg";
import plugPlayImg from "@/assets/cat-plug-play.jpg";
import coldPlungeImg from "@/assets/cat-cold-plunge.jpg";
import hawaiiImg from "@/assets/product-hawaii.jpg";
import monacoImg from "@/assets/product-monaco.jpg";
import boraboraImg from "@/assets/product-borabora.jpg";

export type Category = "swim-spas" | "hot-tubs" | "plug-n-plays" | "cold-plunges";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  tagline: string;
  price: number;
  salePrice?: number;
  size: number;
  seats: number;
  jets: number;
  pumps: number;
  power: string;
  dimensions: string;
  image: string;
  description: string;
  isLimited?: boolean;
}

export const categories: {
  slug: Category;
  name: string;
  description: string;
  image: string;
}[] = [
  {
    slug: "swim-spas",
    name: "Swim Spas",
    description: "Endless current, year-round wellness.",
    image: swimSpaImg,
  },
  {
    slug: "hot-tubs",
    name: "Hot Tubs",
    description: "Crafted seating, hydrotherapy precision.",
    image: hotTubImg,
  },
  {
    slug: "plug-n-plays",
    name: "Plug N' Plays",
    description: "Effortless install. Standard outlet ready.",
    image: plugPlayImg,
  },
  {
    slug: "cold-plunges",
    name: "Cold Plunges",
    description: "Recovery, ritual, resilience.",
    image: coldPlungeImg,
  },
];

export const products: Product[] = [
  {
    slug: "san-fran",
    name: "San Fran",
    category: "swim-spas",
    categoryLabel: "Swim Spa",
    tagline: "The flagship swim spa, 19 feet of considered design.",
    price: 28900,
    size: 19,
    seats: 6,
    jets: 62,
    pumps: 4,
    power: "240V - 50A",
    dimensions: "19' x 7'6\" x 54\"",
    image: swimSpaImg,
    description:
      "The San Fran unifies an endless swim current with a dedicated hydrotherapy lounge. Engineered for the modern home - whether sunken into a courtyard or anchored to a deck.",
  },
  {
    slug: "new-yorker",
    name: "New Yorker",
    category: "swim-spas",
    categoryLabel: "Swim Spa",
    tagline: "Compact swim spa for refined backyards.",
    price: 19900,
    size: 14,
    seats: 4,
    jets: 48,
    pumps: 3,
    power: "240V - 40A",
    dimensions: "14' x 7'6\" x 50\"",
    image: swimSpaImg,
    description:
      "A 14-foot swim spa designed for urban backyards. Tuned current technology delivers a true endurance swim in a refined footprint.",
  },
  {
    slug: "hawaii",
    name: "Hawaii II",
    category: "hot-tubs",
    categoryLabel: "Hot Tub",
    tagline: "Six-seat lounge with a true hydrotherapy bench.",
    price: 11900,
    size: 7,
    seats: 6,
    jets: 44,
    pumps: 2,
    power: "240V - 40A",
    dimensions: '7\'4" x 7\'4" x 36"',
    image: hawaiiImg,
    isLimited: true,
    description:
      "An open six-seat configuration anchored by a full-length lounger. Twin Balboa-controlled pumps deliver zoned hydrotherapy across shoulders, lumbar, and calves.",
  },
  {
    slug: "monaco",
    name: "Monaco",
    category: "hot-tubs",
    categoryLabel: "Hot Tub",
    tagline: "A square-footprint sanctuary, sunken or freestanding.",
    price: 13900,
    size: 7,
    seats: 5,
    jets: 52,
    pumps: 3,
    power: "240V - 50A",
    dimensions: '7\'2" x 7\'2" x 38"',
    image: monacoImg,
    description:
      "Monaco's symmetric basin and three-pump architecture make it equally at home recessed into a deck or set against a stucco wall. Quiet by design.",
  },
  {
    slug: "bora-bora",
    name: "Bora Bora",
    category: "hot-tubs",
    categoryLabel: "Hot Tub",
    tagline: "Open-plan eight-seat sanctuary.",
    price: 15900,
    size: 8,
    seats: 8,
    jets: 68,
    pumps: 3,
    power: "240V - 50A",
    dimensions: '8\'4" x 7\'8" x 38"',
    image: boraboraImg,
    description:
      "A wide, open-plan basin built for gatherings. Dual loungers, six captain seats, and a triple-pump architecture that keeps every jet line full pressure.",
  },
  {
    slug: "santorini",
    name: "Santorini",
    category: "hot-tubs",
    categoryLabel: "Hot Tub",
    tagline: "A seven-seat sanctuary.",
    price: 14900,
    size: 7,
    seats: 7,
    jets: 56,
    pumps: 3,
    power: "240V - 50A",
    dimensions: '7\'7" x 7\'7" x 38"',
    image: hotTubImg,
    description:
      "The Santorini is a study in symmetry. Sculpted seating, deep hydrotherapy zones, and a full-body lounger built for evenings that linger.",
  },
  {
    slug: "atrium-5",
    name: "Atrium 5",
    category: "hot-tubs",
    categoryLabel: "Hot Tub",
    tagline: "Intimate gatherings, considered comfort.",
    price: 9900,
    size: 6,
    seats: 5,
    jets: 38,
    pumps: 2,
    power: "240V - 40A",
    dimensions: '6\'4" x 6\'4" x 34"',
    image: hotTubImg,
    description: "Five-seat configuration with deep ergonomic shells and zoned hydrotherapy.",
  },
  {
    slug: "courtyard-mini",
    name: "Courtyard Mini",
    category: "plug-n-plays",
    categoryLabel: "Plug N' Play",
    tagline: "Plug it in. Step in.",
    price: 5900,
    size: 6,
    seats: 3,
    jets: 22,
    pumps: 1,
    power: "110V - 15A",
    dimensions: '6\'2" x 6\'2" x 29"',
    image: plugPlayImg,
    description:
      "Standard 110V outlet. No electrician, no concrete pad. The Courtyard Mini brings spa-grade hydrotherapy to terraces, patios, and rooftops.",
  },
  {
    slug: "courtyard-duo",
    name: "Courtyard Duo",
    category: "plug-n-plays",
    categoryLabel: "Plug N' Play",
    tagline: "Two-seat sanctuary, anywhere.",
    price: 4400,
    size: 5,
    seats: 2,
    jets: 16,
    pumps: 1,
    power: "110V - 15A",
    dimensions: '5\'8" x 5\'8" x 27"',
    image: plugPlayImg,
    description: "An intimate two-person plunge with full hydrotherapy. Plug-and-play simplicity.",
  },
  {
    slug: "boreal-plunge",
    name: "Boreal Plunge",
    category: "cold-plunges",
    categoryLabel: "Cold Plunge",
    tagline: "37 F at the touch of a screen.",
    price: 7900,
    size: 5,
    seats: 1,
    jets: 0,
    pumps: 1,
    power: "110V - 15A",
    dimensions: '5\'2" x 2\'8" x 30"',
    image: coldPlungeImg,
    description:
      "Matte composite shell, integrated chiller, ozone filtration. Engineered for daily ritual at temperatures from 37 F to 60 F.",
  },
  {
    slug: "boreal-pro",
    name: "Boreal Pro",
    category: "cold-plunges",
    categoryLabel: "Cold Plunge",
    tagline: "The studio-grade plunge.",
    price: 11900,
    size: 6,
    seats: 1,
    jets: 0,
    pumps: 2,
    power: "240V - 30A",
    dimensions: "6'4\" x 3' x 32\"",
    image: coldPlungeImg,
    description:
      "Larger basin, faster chill recovery, true commercial filtration. For homes that train like athletes.",
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export type SizeBucket = "compact" | "mid" | "large";

export const sizeBucket = (size: number): SizeBucket =>
  size <= 6 ? "compact" : size <= 8 ? "mid" : "large";

export const sizeBucketLabel: Record<SizeBucket, string> = {
  compact: "Compact (<=6 ft)",
  mid: "Mid (7-8 ft)",
  large: "Large (14 ft+)",
};

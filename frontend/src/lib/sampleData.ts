export type Recipe = {
  slug: string;
  title: string;
  image: string;
  description: string;
  tags?: string[];
};

// Curated imagery (local)
export const heroImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop";
export const heroBgImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop";

export const recipes: Recipe[] = [
  {
    slug: "peach-burrata-salad",
    title: "Peach Burrata Salad",
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1600&auto=format&fit=crop",
    description:
      "Summer classic with arugula, cream burrata, prosciutto, pine nuts, and a balsamic-honey dressing.",
    tags: ["salad", "summer", "burrata"],
  },
  {
    slug: "green-herb-chutney",
    title: "Green Herb Chutney",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058c?q=80&w=1600&auto=format&fit=crop",
    description: "Zingy, fresh, and perfect with snacks and bowls.",
    tags: ["sauce", "herbs"],
  },
  {
    slug: "cardamom-chocolate-brownies",
    title: "Cardamom Chocolate Brownies",
    image: "https://images.unsplash.com/photo-1606312619305-114d48b6b91e?q=80&w=1600&auto=format&fit=crop",
    description: "Dark chocolate meets warm cardamom for a cozy dessert.",
    tags: ["dessert", "chocolate"],
  },
];

export const services = [
  { title: "Pop-up Dinners", desc: "Seasonal menus and themed nights across Houston.", icon: "🍽️" },
  { title: "Catering", desc: "From small gatherings to large events with custom menus.", icon: "🥂" },
  { title: "Private Classes", desc: "Hands-on sessions for teams and home cooks.", icon: "👩‍🍳" },
];

export const cookbooks = [
  {
    year: 2025,
    title: "The Gut Filling: 2025 Cookbook",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    description: "Fresh spins on classics with bright, balanced flavors.",
  },
  {
    year: 2024,
    title: "The Gut Filling: 2024 Cookbook",
    cover: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    description: "Community favorites from the past year.",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1540100716001-4b8b53c8f2d7?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499125562588-29fb8a56f9bc?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543332164-6e82f355bad3?q=80&w=1440&auto=format&fit=crop",
];

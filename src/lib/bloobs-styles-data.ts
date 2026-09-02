export interface BloobStyleEntry {
  id: string;
  number: string;
  name: string;
  prompt: string;
  category: string;
  tags: string[];
  image: string;
  accent: string;
  mood: string;
}

export const BLOOBS_STYLES: BloobStyleEntry[] = [
  {
    id: "risograph",
    number: "01",
    name: "Risograph",
    prompt: "Risograph print illustration, overlapping vibrant neon inks, misaligned screen printing, grainy paper texture, retro vintage print effect, duotone color overlays",
    category: "Print & Grain",
    tags: ["Neon Inks", "Screen Printing", "Grain Texture", "Duotone"],
    image: "/bloobs/risograph.jpg",
    accent: "#ec4899",
    mood: "Tactile, vibrant, retro-mechanical"
  },
  {
    id: "claymorphic",
    number: "02",
    name: "Claymorphic / Claymorphism",
    prompt: "Claymorphism style, soft 3D squishy clay shape, rounded edges, matte finish, playful pastel color palette, smooth inflated surface, minimal clay render",
    category: "3D & Tactile",
    tags: ["Squishy 3D", "Pastel Palette", "Matte Finish", "Clay Render"],
    image: "/bloobs/claymorphic.jpg",
    accent: "#f472b6",
    mood: "Playful, inflated, tactile warmth"
  },
  {
    id: "organic-tech",
    number: "03",
    name: "Organic Tech",
    prompt: "Organic tech design, UI elements integrated with fresh green leaves and moss, clean modern interface meeting nature, soft natural lighting, biomimetic design",
    category: "Biomimetic & UI",
    tags: ["Fresh Leaves", "Moss UI", "Natural Light", "Biomimicry"],
    image: "/bloobs/organic-tech.jpg",
    accent: "#22c55e",
    mood: "Biophilic, harmonic, futuristic tranquility"
  },
  {
    id: "holographic-iridescence",
    number: "04",
    name: "Holographic Iridescence",
    prompt: "Holographic iridescence packaging, shimmering metallic foil, shifting rainbow gradient refractions, futuristic premium cosmetic branding, sleek reflective surface",
    category: "Foil & Metallic",
    tags: ["Metallic Foil", "Rainbow Gradient", "Cosmetics", "Reflective"],
    image: "/bloobs/holographic-iridescence.jpg",
    accent: "#818cf8",
    mood: "High-spec, refractive, premium cosmetic"
  },
  {
    id: "dirty-gradients",
    number: "05",
    name: "Dirty Gradients",
    prompt: "Dirty gradient background, grainy noise texture, muddy color blending, moody atmospheric gradient, subtle film grain, muted retro color palette",
    category: "Atmospheric & Retro",
    tags: ["Grainy Noise", "Muddy Blending", "Film Grain", "Retro Mood"],
    image: "/bloobs/dirty-gradients.jpg",
    accent: "#eab308",
    mood: "Moody, brooding, nostalgic analog"
  },
  {
    id: "austurbane",
    number: "06",
    name: "Austurbane",
    prompt: "Austurbane aesthetic, minimalist product packaging, muted earthy tones, elegant serif typography, subtle luxury, warm neutral paper texture",
    category: "Minimalist Luxury",
    tags: ["Serif Typography", "Earthy Tones", "Neutral Paper", "Subtle Luxury"],
    image: "/bloobs/austurbane.jpg",
    accent: "#d97706",
    mood: "Quiet luxury, editorial stillness, organic restraint"
  },
  {
    id: "asian-chic",
    number: "07",
    name: "Asian Chic",
    prompt: "Vintage Asian commercial art style, classic matchbox label design, highly saturated retro colors, nostalgic kitsch illustration, detailed traditional print",
    category: "Vintage & Commercial Art",
    tags: ["Matchbox Label", "Retro Kitsch", "Saturated Colors", "Traditional Print"],
    image: "/bloobs/asian-chic.jpg",
    accent: "#ef4444",
    mood: "Nostalgic, vibrant, commercial heritage"
  },
  {
    id: "clean-girl-brutalism",
    number: "08",
    name: "Clean Girl Brutalism",
    prompt: "Clean girl brutalism typography, raw blocky bold sans-serif text, stark minimalist cosmetic packaging, stark contrast, editorial layout, clean monochrome tones",
    category: "Editorial & Brutalism",
    tags: ["Blocky Sans-Serif", "Stark Contrast", "Monochrome", "Cosmetic Packaging"],
    image: "/bloobs/clean-girl-brutalism.jpg",
    accent: "#a1a1aa",
    mood: "Stark, clinical, ultra-confident minimalism"
  },
  {
    id: "spray",
    number: "09",
    name: "Spray",
    prompt: "Streetwear branding, neon spray paint graffiti, airbrush blur effect, raw handmade art, rebellious graphic design, stencil overspray texture",
    category: "Streetwear & Graffiti",
    tags: ["Neon Graffiti", "Airbrush Blur", "Stencil Overspray", "Rebellious"],
    image: "/bloobs/spray.jpg",
    accent: "#06b6d4",
    mood: "Rebellious, raw, underground energy"
  },
  {
    id: "gzhel",
    number: "10",
    name: "Gzhel",
    prompt: "Gzhel porcelain style, cobalt blue floral ceramic painting on pure white surface, intricate blue ink pattern, Delftware aesthetic, traditional glazed ceramic texture",
    category: "Ceramics & Tradition",
    tags: ["Cobalt Blue", "Floral Ceramic", "Delftware", "Glazed Texture"],
    image: "/bloobs/gzhel.jpg",
    accent: "#3b82f6",
    mood: "Artisanal, porcelain purity, ceramic heritage"
  }
];

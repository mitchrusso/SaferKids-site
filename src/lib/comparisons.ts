export type ComparisonPage = {
  title: string;
  slug: string;
  description: string;
  image: string;
  keywords: string[];
  left: string;
  right: string;
  winner: string;
  rows: { label: string; left: string; right: string; note: string }[];
};

export const comparisonPages: ComparisonPage[] = [
  {
    title: "Hardware-Mounted vs Pressure-Mounted Baby Gates",
    slug: "hardware-mounted-vs-pressure-mounted-baby-gates",
    description: "Choose a baby gate by location first: stairs, doorways, rental spaces, and daily traffic all change the safer choice.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    keywords: ["baby gate safety", "hardware mounted baby gate", "pressure mounted baby gate"],
    left: "Hardware-mounted gate",
    right: "Pressure-mounted gate",
    winner: "Hardware-mounted gates are the safer default for stair tops and permanent high-risk openings.",
    rows: [
      { label: "Best location", left: "Stair tops and permanent barriers", right: "Doorways and low-risk temporary areas", note: "Avoid pressure-only gates at stair tops." },
      { label: "Install", left: "Screws into wall or banister", right: "Tension fit", note: "Both must match the opening." },
      { label: "Risk", left: "More secure when installed correctly", right: "Can shift if misused", note: "Re-check fit often." },
    ],
  },
  {
    title: "Infant Car Seat vs Convertible Car Seat",
    slug: "infant-car-seat-vs-convertible-car-seat",
    description: "Compare portability, rear-facing limits, vehicle fit, and how long each car seat type may work for your child.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80",
    keywords: ["infant car seat", "convertible car seat", "child passenger safety"],
    left: "Infant car seat",
    right: "Convertible car seat",
    winner: "The safer choice is the correctly fitted, correctly installed seat for your child's current size and vehicle.",
    rows: [
      { label: "Portability", left: "Carrier can leave the base", right: "Usually stays installed", note: "Do not use car seats as routine sleep spaces." },
      { label: "Use window", left: "Shorter infant stage", right: "Longer rear-facing potential", note: "Check exact height and weight limits." },
      { label: "Installation", left: "Base plus carrier", right: "Single larger seat", note: "Vehicle fit matters." },
    ],
  },
  {
    title: "Video Baby Monitor vs Audio Baby Monitor",
    slug: "video-baby-monitor-vs-audio-baby-monitor",
    description: "Compare visibility, privacy, Wi-Fi exposure, battery life, and what a monitor can and cannot do for safety.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    keywords: ["baby monitor safety", "video baby monitor", "audio baby monitor"],
    left: "Video monitor",
    right: "Audio monitor",
    winner: "Video helps visibility; audio can be simpler and more private. Neither replaces safe sleep setup or supervision.",
    rows: [
      { label: "Visibility", left: "See room and crib area", right: "Hear sound only", note: "Camera placement matters." },
      { label: "Privacy", left: "Wi-Fi models need stronger security", right: "Often simpler", note: "Use strong passwords and updates." },
      { label: "Best fit", left: "Parents wanting visual checks", right: "Parents wanting basic alerts", note: "Avoid relying on monitor claims alone." },
    ],
  },
  {
    title: "Wooden Toys vs Plastic Toys",
    slug: "wooden-toys-vs-plastic-toys",
    description: "Compare materials, age grading, small parts, finish claims, magnets, batteries, and cleaning before choosing toys.",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1200&q=80",
    keywords: ["safe toys by age", "wooden toys", "plastic toys"],
    left: "Wooden toys",
    right: "Plastic toys",
    winner: "The safer toy is age-appropriate, recall-free, durable, and free of small detachable hazards.",
    rows: [
      { label: "Material", left: "Simple and durable", right: "Varied designs and textures", note: "Material alone does not guarantee safety." },
      { label: "Hidden risks", left: "Finish, splinters, small pieces", right: "Small parts, batteries, magnets", note: "Inspect before use." },
      { label: "Cleaning", left: "May need gentle cleaning", right: "Often easier to wipe", note: "Follow product instructions." },
    ],
  },
];

export function getComparisonBySlug(slug: string) {
  return comparisonPages.find((page) => page.slug === slug);
}

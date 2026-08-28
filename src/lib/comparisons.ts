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
  {
    title: "Wi-Fi Baby Monitor vs Non-WiFi Baby Monitor",
    slug: "wifi-vs-non-wifi-baby-monitors",
    description: "Compare privacy, range, app access, cord placement, and realistic expectations before choosing a nursery monitor.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    keywords: ["non wifi baby monitor", "wifi baby monitor privacy", "baby monitor safety"],
    left: "Wi-Fi monitor",
    right: "Non-WiFi monitor",
    winner: "Non-WiFi monitors can be simpler for privacy; Wi-Fi monitors help when remote phone access is truly needed.",
    rows: [
      { label: "Remote access", left: "Usually supports phone viewing away from home", right: "Usually limited to a parent unit", note: "Convenience adds account and app decisions." },
      { label: "Privacy", left: "Requires password, app, network, and update hygiene", right: "Fewer cloud-account dependencies", note: "Both require safe camera and cord placement." },
      { label: "Best fit", left: "Parents who need remote access", right: "Parents who want a simpler home-only monitor", note: "Neither replaces safe sleep setup." },
    ],
  },
  {
    title: "Magnetic vs Adhesive Cabinet Locks",
    slug: "magnetic-vs-adhesive-cabinet-locks",
    description: "Compare childproof cabinet lock styles by installation, rental fit, adult usability, cabinet material, and failure points.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    keywords: ["childproof cabinet locks", "magnetic cabinet locks", "adhesive cabinet locks"],
    left: "Magnetic locks",
    right: "Adhesive locks",
    winner: "The safer choice is the lock adults will use consistently and that holds securely on the exact cabinet material.",
    rows: [
      { label: "Install", left: "Often hidden inside the cabinet", right: "Often no-drill and rental-friendly", note: "Clean surfaces and correct placement matter." },
      { label: "Adult access", left: "Requires keeping track of a magnetic key", right: "Usually visible or touch-release", note: "Adults must relock every time." },
      { label: "Failure risk", left: "Poor alignment can frustrate use", right: "Adhesive can fail on texture, moisture, or dirt", note: "Test after installation." },
    ],
  },
  {
    title: "High Chair vs Booster Seat",
    slug: "high-chair-vs-booster-seat",
    description: "Compare feeding setups by stability, restraints, posture, cleaning, chair compatibility, and when toddlers are ready to transition.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80",
    keywords: ["high chair safety", "booster seat safety", "toddler feeding chair"],
    left: "High chair",
    right: "Booster seat",
    winner: "A stable high chair is usually the safer daily default until the child fits and behaves appropriately for a secured booster.",
    rows: [
      { label: "Stability", left: "Purpose-built base", right: "Depends on dining chair compatibility", note: "Check movement and straps before every meal." },
      { label: "Fit", left: "Good for younger babies and toddlers within limits", right: "Better for older toddlers with posture control", note: "Follow age and weight limits." },
      { label: "Cleaning", left: "Larger but designed for mess", right: "Smaller and portable", note: "Missing straps or cracked parts are red flags." },
    ],
  },
  {
    title: "Window Guards vs Window Stops",
    slug: "window-guards-vs-window-stops",
    description: "Compare window fall-prevention products by opening size, emergency egress, installation, rental needs, and blind-cord safety.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    keywords: ["child safety window guards", "window stops child safety", "cordless blinds child safety"],
    left: "Window guards",
    right: "Window stops",
    winner: "The better fit depends on window type, fall risk, local egress requirements, and whether the room is used for sleeping.",
    rows: [
      { label: "Purpose", left: "Creates a physical barrier", right: "Limits how far a window opens", note: "Both require correct fit." },
      { label: "Emergency access", left: "May need a release feature", right: "Can be simpler but still must preserve egress", note: "Check local and building requirements." },
      { label: "Extra check", left: "Keep furniture away from windows", right: "Replace corded blinds where possible", note: "Cord hazards need a separate plan." },
    ],
  },
];

export function getComparisonBySlug(slug: string) {
  return comparisonPages.find((page) => page.slug === slug);
}

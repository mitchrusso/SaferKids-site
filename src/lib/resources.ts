export type ResourceArticle = {
  title: string;
  slug: string;
  publishDate: string;
  category: string;
  image: string;
  excerpt: string;
  keywords: string[];
  sections: { heading: string; body: string[] }[];
  takeaway: string;
};

export const keywordPlan = [
  { cluster: "Baby proofing", keywords: ["baby proofing checklist", "childproofing products", "baby safety products", "toddler home safety"] },
  { cluster: "Car and travel safety", keywords: ["safest car seat", "convertible car seat", "travel safety for kids", "stroller safety"] },
  { cluster: "Safe sleep and nursery", keywords: ["safe sleep products", "crib safety", "nursery safety checklist", "what not to buy for baby sleep"] },
  { cluster: "Safer toys", keywords: ["safe toys by age", "non toxic toys", "choking hazard toys", "wooden toys safety"] },
  { cluster: "Bath and daily care", keywords: ["baby bath safety", "non slip bath mat", "bath spout cover", "toddler safety products"] },
  { cluster: "Outdoor and emergency", keywords: ["kids bike helmet", "outdoor play safety", "family first aid kit", "child emergency kit"] },
];

const images = {
  home: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
  car: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80",
  sleep: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80",
  toys: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1200&q=80",
  stroller: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1200&q=80",
  bath: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1200&q=80",
  outdoor: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  health: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
};

const articlePlan = [
  ["Safer Baby Products to Buy First: A Parent's Room-by-Room Guide", "safer-baby-products-to-buy-first", "2026-07-03", "Baby Proofing", images.home, ["safer baby products", "baby safety products", "new parent safety checklist"]],
  ["Baby Proofing Checklist: Products That Actually Matter", "baby-proofing-checklist-products", "2026-07-06", "Baby Proofing", images.home, ["baby proofing checklist", "childproofing products", "toddler home safety"]],
  ["How to Choose a Safe Stroller", "how-to-choose-a-safe-stroller", "2026-07-07", "Strollers", images.stroller, ["safe stroller", "stroller safety", "best stroller safety features"]],
  ["Safest Car Seat Features Parents Should Understand", "safest-car-seat-features", "2026-07-08", "Car Safety", images.car, ["safest car seat", "car seat safety", "convertible car seat"]],
  ["Safe Sleep Products: What Belongs in the Crib and What Does Not", "safe-sleep-products-crib", "2026-07-09", "Safe Sleep", images.sleep, ["safe sleep products", "crib safety", "baby sleep safety"]],
  ["Best Baby Gates for Stairs, Doorways, and Open Rooms", "best-baby-gates-stairs-doorways", "2026-07-10", "Baby Proofing", images.home, ["best baby gates", "hardware mounted baby gate", "baby gate for stairs"]],
  ["Non-Toxic Toys: What Safety-Aware Parents Should Look For", "non-toxic-toys-parent-guide", "2026-07-13", "Toy Safety", images.toys, ["non toxic toys", "safe toys by age", "wooden toys safety"]],
  ["Choking Hazard Checklist for Toys and Small Parts", "choking-hazard-toy-checklist", "2026-07-14", "Toy Safety", images.toys, ["choking hazard toys", "small parts toys", "toy safety checklist"]],
  ["Best Bath Safety Products for Babies and Toddlers", "bath-safety-products", "2026-07-15", "Bath Safety", images.bath, ["baby bath safety", "non slip bath mat", "bath spout cover"]],
  ["How to Check if a Baby Product Has Been Recalled", "how-to-check-product-recalls", "2026-07-16", "Recalls", images.home, ["baby product recalls", "CPSC recalls", "recall check"]],
  ["Safest High Chair Features for Everyday Feeding", "safest-high-chair-features", "2026-07-17", "Feeding Safety", images.home, ["safe high chair", "high chair safety", "baby feeding safety"]],
  ["Best Toddler Helmets for Scooters and Bikes", "best-toddler-helmets", "2026-07-20", "Outdoor Safety", images.outdoor, ["kids bike helmet", "toddler helmet", "scooter helmet kids"]],
  ["Safe Outdoor Play Gear for Toddlers", "safe-outdoor-play-gear", "2026-07-21", "Outdoor Safety", images.outdoor, ["outdoor play safety", "safe outdoor toys", "toddler outdoor safety"]],
  ["Baby Monitor Safety: Audio, Video, Wi-Fi, and Privacy", "baby-monitor-safety", "2026-07-22", "Monitoring", images.sleep, ["baby monitor safety", "video baby monitor", "wifi baby monitor privacy"]],
  ["Cabinet Locks, Outlet Covers, and Corner Guards: What Works Best", "cabinet-locks-outlet-covers-corner-guards", "2026-07-23", "Baby Proofing", images.home, ["cabinet locks child safety", "outlet covers", "corner guards baby"]],
  ["Best Travel Safety Products for Kids", "travel-safety-products-for-kids", "2026-07-24", "Travel Safety", images.car, ["travel safety for kids", "car travel safety kids", "child travel products"]],
  ["How to Choose Safe Toys by Age", "how-to-choose-safe-toys-by-age", "2026-07-27", "Toy Safety", images.toys, ["safe toys by age", "age appropriate toys", "toy safety"]],
  ["Nursery Safety Checklist for New Parents", "nursery-safety-checklist", "2026-07-28", "Safe Sleep", images.sleep, ["nursery safety checklist", "crib safety", "baby room safety"]],
  ["What Not to Buy for Baby Sleep", "what-not-to-buy-for-baby-sleep", "2026-07-29", "Safe Sleep", images.sleep, ["what not to buy for baby sleep", "safe sleep products", "baby sleep safety"]],
  ["Anti-Tip Furniture Anchors: The Hidden Safety Upgrade", "anti-tip-furniture-anchor-guide", "2026-07-30", "Baby Proofing", images.home, ["furniture anchors", "anti tip furniture", "childproofing products"]],
  ["Outlet Covers and Cord Safety for Crawlers", "outlet-covers-and-cord-safety", "2026-07-31", "Baby Proofing", images.home, ["outlet covers", "cord safety baby", "electrical childproofing"]],
  ["Family First Aid Kits: What Parents Should Keep Ready", "family-first-aid-kits-for-parents", "2026-08-03", "Emergency Readiness", images.health, ["family first aid kit", "child emergency kit", "home first aid"]],
] as const;

function buildSections(title: string, category: string, keywords: readonly string[]) {
  return [
    {
      heading: "What this safety question really means",
      body: [
        `${title} is not about buying the most expensive item or trusting a marketing badge. It is about matching a product to a child's age, size, behavior, room, vehicle, or routine.`,
        `For ${category.toLowerCase()}, parents should compare the hazard first, then check product fit, installation, age grading, current instructions, and recall history before buying.`,
      ],
    },
    {
      heading: "Features to compare before buying",
      body: [
        `Start with the safety basics behind ${keywords[0]}: fit, age range, material claims, installation method, labels, durability, and whether the product can be inspected easily during daily use.`,
        "Then check current retailer and manufacturer details. Photos, bundles, and model names can change, and a safer choice is only safer when it is the right version for the child and setup.",
      ],
    },
    {
      heading: "Red flags safety-aware parents should notice",
      body: [
        "Be cautious with unclear age guidance, missing instructions, loose small parts, accessible batteries or magnets, soft infant sleep add-ons, unstable furniture, and products that do not fit your space or vehicle.",
        "If a listing makes broad safety claims without clear standards, installation guidance, or manufacturer information, slow down and compare alternatives.",
      ],
    },
    {
      heading: "The safer way to shop",
      body: [
        "Use the article as a checklist, then open the product page, verify the current model, check recall resources, read the manual, and confirm the product still matches your child's age and environment.",
        "No safety product replaces supervision, correct installation, or official guidance from pediatric, traffic safety, or consumer product safety authorities.",
      ],
    },
  ];
}

export const resourceArticles: ResourceArticle[] = articlePlan.map(([title, slug, publishDate, category, image, keywords]) => ({
  title,
  slug,
  publishDate,
  category,
  image,
  excerpt: `A safety-first parent guide to ${keywords[0]}, with practical checks, red flags, and what to verify before buying.`,
  keywords: [...keywords],
  sections: buildSections(title, category, keywords),
  takeaway: "The safer choice is the product that fits the child, the environment, the instructions, and the current recall picture.",
}));

export function getArticleBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}

export function isArticlePublished(article: ResourceArticle, now = new Date()) {
  return new Date(`${article.publishDate}T00:00:00-04:00`).getTime() <= now.getTime();
}

export function getPublishedArticles(now = new Date()) {
  return resourceArticles.filter((article) => isArticlePublished(article, now));
}

export function getScheduledArticles(now = new Date()) {
  return resourceArticles.filter((article) => !isArticlePublished(article, now));
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00-04:00`));
}

export function getNextScheduledArticle(now = new Date()) {
  return getScheduledArticles(now).sort((a, b) => a.publishDate.localeCompare(b.publishDate))[0];
}

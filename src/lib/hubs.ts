export type TopicHub = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
  keywords: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedArticleSlugs: string[];
};

export const topicHubs: TopicHub[] = [
  {
    title: "Baby Proofing Checklist",
    slug: "baby-proofing-checklist",
    eyebrow: "Room-by-Room",
    description: "A practical guide to gates, anchors, outlet covers, cabinet locks, cords, windows, bath areas, and daily re-checks.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    keywords: ["baby proofing checklist", "childproofing products", "home safety for toddlers"],
    relatedArticleSlugs: ["baby-proofing-checklist-products", "anti-tip-furniture-anchor-guide", "outlet-covers-and-cord-safety"],
    sections: [
      { heading: "Start where the child moves", body: ["Crawling, pulling up, climbing, and reaching change the safety map. Start with the rooms where the child spends the most unsupervised seconds, then handle stairs, furniture, cords, outlets, windows, and bathrooms.", "A product is only useful if it fits the exact room and is re-checked as the child grows."] },
      { heading: "Prioritize high-severity hazards", body: ["Stairs, furniture tip-over, water, cars, sleep spaces, choking hazards, and medicines deserve priority over decorative safety accessories.", "Use product guides as a checklist, then verify current recalls and installation instructions."] },
    ],
    faqs: [
      { question: "What should parents baby proof first?", answer: "Start with stairs, sleep spaces, furniture anchors, cords, outlets, medicines, cleaning products, and water access." },
      { question: "Do childproofing products replace supervision?", answer: "No. They reduce specific risks but do not replace supervision or correct installation." },
    ],
  },
  {
    title: "Car Seat Safety",
    slug: "car-seat-safety",
    eyebrow: "On the Road",
    description: "Compare car seat types, fit, rear-facing limits, installation, vehicle compatibility, and recall checks.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80",
    keywords: ["safest car seat", "convertible car seat", "child passenger safety"],
    relatedArticleSlugs: ["safest-car-seat-features", "infant-vs-convertible-car-seat", "how-to-check-product-recalls"],
    sections: [
      { heading: "Fit beats marketing claims", body: ["The right car seat must fit the child, fit the vehicle, and be installed correctly. Height and weight limits, harness position, recline, and seat-belt or LATCH routing all matter.", "Use official guidance and the manufacturer manual before trusting a product photo or review."] },
      { heading: "Rear-facing and transition timing", body: ["Many safety-aware parents keep children rear-facing to the top height or weight allowed by the seat. Transitions should happen because the child outgrows a stage, not because a calendar date arrives.", "Register the seat and watch for recalls."] },
    ],
    faqs: [
      { question: "Is the most expensive car seat always safer?", answer: "No. Correct fit and installation matter more than price." },
      { question: "Should parents buy used car seats?", answer: "Only with extreme caution. You need the full history, manuals, labels, parts, expiration date, and crash history." },
    ],
  },
  {
    title: "Safe Sleep Products",
    slug: "safe-sleep-products",
    eyebrow: "Nursery",
    description: "Focus on firm, flat sleep spaces, fitted sheets, wearable blankets, and avoiding risky soft or inclined sleep add-ons.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80",
    keywords: ["safe sleep products", "crib safety", "baby sleep safety"],
    relatedArticleSlugs: ["safe-sleep-products-crib", "what-not-to-buy-for-baby-sleep", "nursery-safety-checklist"],
    sections: [
      { heading: "Simpler is safer for sleep", body: ["Safe sleep shopping is often about what not to buy: loose blankets, pillows, bumpers, plush toys, wedges, inclined sleepers, and decorative add-ons do not belong in the infant sleep space.", "A firm, flat mattress with a fitted sheet is the core product setup."] },
      { heading: "Check current standards", body: ["Used cribs, older bassinets, and handed-down products require extra recall and standard checks. If you cannot verify the product, skip it.", "Register products when possible so recall notices can reach you."] },
    ],
    faqs: [
      { question: "Can a stroller or car seat be used for routine sleep?", answer: "Follow AAP safe sleep guidance; seating devices are not routine sleep spaces." },
      { question: "Are weighted sleep products a good idea?", answer: "Parents should review current pediatric guidance and avoid unsupported claims." },
    ],
  },
  {
    title: "Safer Toys by Age",
    slug: "safer-toys-by-age",
    eyebrow: "Play",
    description: "Shop toys by age grading, small parts, magnets, batteries, finishes, durability, and recall history.",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1200&q=80",
    keywords: ["safe toys by age", "non toxic toys", "choking hazard toys"],
    relatedArticleSlugs: ["non-toxic-toys-parent-guide", "choking-hazard-toy-checklist", "how-to-choose-safe-toys-by-age"],
    sections: [
      { heading: "Age labels are safety tools", body: ["A toy can be well made and still wrong for a younger child. Age grading considers small parts, developmental use, and predictable behavior.", "For children who mouth objects, magnets, batteries, and detachable pieces deserve extra caution."] },
      { heading: "Material claims need verification", body: ["Non-toxic, natural, wooden, BPA-free, and Montessori-style are not automatic safety guarantees. Parents should still verify finish, durability, small parts, and recall status.", "Simple toys can be excellent when they match the child's age and use."] },
    ],
    faqs: [
      { question: "Are wooden toys always safer?", answer: "No. Finish, construction, small parts, splinters, and age grading still matter." },
      { question: "Why are magnets risky?", answer: "Small high-powered magnets can be dangerous if swallowed and should be kept away from young children." },
    ],
  },
  {
    title: "Stroller Safety",
    slug: "stroller-safety",
    eyebrow: "Out and About",
    description: "Compare harnesses, brakes, folding locks, wheel stability, storage balance, and terrain fit.",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1200&q=80",
    keywords: ["safe stroller", "stroller safety", "best stroller safety features"],
    relatedArticleSlugs: ["how-to-choose-a-safe-stroller", "stroller-safety-features", "travel-safety-products-for-kids"],
    sections: [
      { heading: "Safety is about daily behavior", body: ["A safer stroller has a harness that gets used, brakes that parents actually set, a fold that locks, and a stable frame that fits your terrain.", "Heavy bags on handles can change balance; storage should go where the stroller maker recommends."] },
      { heading: "Match stroller to the route", body: ["Sidewalk errands, car travel, jogging, and double-stroller use all create different needs. Compare wheels, brakes, visibility, canopy, and fold size before buying.", "Always verify age and weight limits."] },
    ],
    faqs: [
      { question: "What stroller feature matters most?", answer: "Harness, brakes, stability, and correct age/weight fit are the first checks." },
      { question: "Can accessories make a stroller less safe?", answer: "Yes. Poorly placed bags, toys, and add-ons can affect balance or create hazards." },
    ],
  },
  {
    title: "Bath and Water Safety",
    slug: "bath-and-water-safety",
    eyebrow: "Supervision First",
    description: "Bath safety products, water temperature awareness, non-slip surfaces, soft impact protection, and constant supervision.",
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1200&q=80",
    keywords: ["baby bath safety", "non slip bath mat", "toddler bath safety"],
    relatedArticleSlugs: ["bath-safety-products", "baby-proofing-checklist-products", "nursery-safety-checklist"],
    sections: [
      { heading: "Products support supervision", body: ["Bath mats, spout covers, faucet thermometers, and kneelers can make bath time easier, but water safety starts with hands-on adult attention.", "No bath product should be treated as a babysitter."] },
      { heading: "Check fit and cleaning", body: ["Suction mats can loosen, spout covers may not fit every faucet, and bath toys can trap moisture. Choose products you can inspect and clean often.", "Water temperature and slip risk should be checked every time."] },
    ],
    faqs: [
      { question: "Do bath seats make bathing safe?", answer: "Bath seats can create a false sense of security and do not replace touch-close supervision." },
      { question: "What bath products are useful?", answer: "Non-slip surfaces, soft edge protection, and temperature awareness tools can help when used correctly." },
    ],
  },
];

export function getTopicHubBySlug(slug: string) {
  return topicHubs.find((hub) => hub.slug === slug);
}

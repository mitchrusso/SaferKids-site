export type TopicHub = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
  keywords: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  featuredProductSlugs?: string[];
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
    featuredProductSlugs: ["hardware-mounted-baby-gate", "anti-tip-furniture-anchors", "outlet-covers-cord-shorteners"],
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
    featuredProductSlugs: ["convertible-car-seat", "family-first-aid-emergency-kit", "full-harness-stroller"],
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
    featuredProductSlugs: ["safe-crib-mattress-setup", "family-first-aid-emergency-kit", "anti-tip-furniture-anchors"],
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
    featuredProductSlugs: ["non-toxic-wooden-toy-set", "family-first-aid-emergency-kit", "kids-bike-helmet"],
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
    featuredProductSlugs: ["full-harness-stroller", "kids-bike-helmet", "family-first-aid-emergency-kit"],
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
    featuredProductSlugs: ["bath-spout-cover-non-slip-mat", "family-first-aid-emergency-kit", "outlet-covers-cord-shorteners"],
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
  {
    title: "Baby Gates for Stairs",
    slug: "baby-gates-for-stairs",
    eyebrow: "High-Risk Openings",
    description:
      "Compare stair-gate safety checks including hardware mounting, latch behavior, swing direction, opening width, and installation surfaces.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    keywords: ["baby gate for stairs", "hardware mounted baby gate", "stair gate safety"],
    featuredProductSlugs: ["hardware-mounted-baby-gate", "anti-tip-furniture-anchors", "outlet-covers-cord-shorteners"],
    relatedArticleSlugs: ["baby-proofing-checklist-products", "anti-tip-furniture-anchor-guide", "how-to-check-product-recalls"],
    sections: [
      {
        heading: "Stairs call for stricter checks",
        body: [
          "For stair areas, parents should look closely at hardware mounting, latch reliability, one-way swing options, and whether the product is approved for the specific location.",
          "Pressure-mounted gates may be useful in some doorways, but stair placement requires extra care and manufacturer-specific installation guidance.",
        ],
      },
      {
        heading: "Measure before buying",
        body: [
          "Opening width, baseboard shape, banister design, wall material, and trim can all change whether a gate fits securely.",
          "Read the installation manual before trusting a listing photo, and re-check the latch and mounting hardware as children grow stronger.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should a baby gate at the top of stairs be hardware mounted?",
        answer:
          "Parents should follow the manufacturer instructions for the location, but hardware-mounted gates are commonly recommended for stair-top use because they attach more securely.",
      },
      {
        question: "What makes a stair gate a poor fit?",
        answer:
          "Poor fit signs include unstable mounting, unclear latch position, a bottom trip bar in a risky place, incompatible wall surfaces, or an opening outside the listed width range.",
      },
    ],
  },
  {
    title: "Convertible Car Seat Safety Features",
    slug: "convertible-car-seat-safety-features",
    eyebrow: "Fit Before Features",
    description:
      "A parent checklist for convertible car seat features: rear-facing limits, harness adjustment, vehicle fit, installation method, labels, and recall registration.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80",
    keywords: ["convertible car seat safety features", "rear facing car seat", "car seat installation checklist"],
    featuredProductSlugs: ["convertible-car-seat", "family-first-aid-emergency-kit", "full-harness-stroller"],
    relatedArticleSlugs: ["safest-car-seat-features", "infant-vs-convertible-car-seat", "how-to-check-product-recalls"],
    sections: [
      {
        heading: "The safest-looking seat is not enough",
        body: [
          "A convertible car seat has to fit the child, the vehicle, and the person installing it. Height and weight limits, harness position, recline, belt path, and LATCH rules are all part of the decision.",
          "Parents should compare features only after confirming the seat can be installed correctly in their vehicle.",
        ],
      },
      {
        heading: "Plan around transitions",
        body: [
          "A good car seat plan makes it clear when a child outgrows rear-facing, forward-facing harness, and booster stages.",
          "Register the seat, keep the manual accessible, and check current recall information before buying or reusing any model.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a convertible car seat safer than an infant car seat?",
        answer:
          "Neither category is automatically safer. Correct fit, installation, age and size limits, and current safety status matter more than the label.",
      },
      {
        question: "What should I do if I am unsure about installation?",
        answer:
          "Use the manufacturer manual and consider a certified child passenger safety technician or local inspection resource.",
      },
    ],
  },
  {
    title: "Non-Toxic Toys for Toddlers",
    slug: "non-toxic-toys-for-toddlers",
    eyebrow: "Age-Graded Play",
    description:
      "How safety-aware parents can compare toddler toys by age grading, materials, small parts, magnets, batteries, finishes, and recall history.",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1200&q=80",
    keywords: ["non toxic toys for toddlers", "safe toddler toys", "age appropriate toys"],
    featuredProductSlugs: ["non-toxic-wooden-toy-set", "kids-bike-helmet", "family-first-aid-emergency-kit"],
    relatedArticleSlugs: ["non-toxic-toys-parent-guide", "choking-hazard-toy-checklist", "how-to-choose-safe-toys-by-age"],
    sections: [
      {
        heading: "Non-toxic is only one checkpoint",
        body: [
          "Parents should check finish and material claims, but toy safety also depends on age grading, small parts, durability, magnets, accessible batteries, and how a child actually plays.",
          "Simple toys can be excellent, but no material choice removes the need for inspection and supervision.",
        ],
      },
      {
        heading: "Watch for hidden risks",
        body: [
          "Button batteries, small high-powered magnets, loose pieces, peeling finish, and brittle plastic can matter more than the broad category a toy belongs to.",
          "If a toy has unclear age labeling or parts that detach easily, choose another option.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are wooden toys always safer for toddlers?",
        answer:
          "No. Wooden toys still need age grading, smooth construction, safe finishes, and small-parts checks.",
      },
      {
        question: "What should I avoid in toddler toys?",
        answer:
          "Avoid unclear age labels, small detachable parts, accessible batteries, loose magnets, sharp edges, and toys with recall concerns.",
      },
    ],
  },
  {
    title: "Stroller Safety Features",
    slug: "stroller-safety-features",
    eyebrow: "Everyday Errands",
    description:
      "Compare stroller safety features such as harness design, parking brakes, folding locks, stability, terrain fit, canopy coverage, and storage balance.",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1200&q=80",
    keywords: ["stroller safety features", "safe stroller checklist", "five point harness stroller"],
    featuredProductSlugs: ["full-harness-stroller", "kids-bike-helmet", "family-first-aid-emergency-kit"],
    relatedArticleSlugs: ["how-to-choose-a-safe-stroller", "stroller-safety-features", "travel-safety-products-for-kids"],
    sections: [
      {
        heading: "The best features are the ones parents use",
        body: [
          "A reliable harness, easy brake, stable frame, and locking fold are more useful than complicated extras that make daily use harder.",
          "Parents should compare how the stroller behaves during real errands: sidewalks, curbs, car loading, store aisles, and storage.",
        ],
      },
      {
        heading: "Accessories can change stability",
        body: [
          "Organizer bags, cup holders, toys, blankets, and shopping bags can affect balance when they are placed incorrectly.",
          "Use stroller storage as directed by the manufacturer and verify weight and age limits before buying.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a five-point harness important in a stroller?",
        answer:
          "A harness that fits and gets used consistently is an important safety feature. Parents should follow the stroller manual for correct use.",
      },
      {
        question: "What stroller feature should I check first?",
        answer:
          "Start with child fit, harness, brakes, stability, folding lock, and whether the stroller matches your daily terrain.",
      },
    ],
  },
];

export function getTopicHubBySlug(slug: string) {
  return topicHubs.find((hub) => hub.slug === slug);
}

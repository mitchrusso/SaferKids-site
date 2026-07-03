export type ResourceArticle = {
  title: string;
  slug: string;
  publishDate: string;
  category: string;
  image: string;
  excerpt: string;
  keywords: string[];
  sections: { heading: string; body: { text: string; sourceIds: string[] }[] }[];
  sourceIds: string[];
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

const categorySourceIds: Record<string, string[]> = {
  "Baby Proofing": ["cpsc-childproofing", "cpsc-child-safety", "cpsc-recalls", "safer-products"],
  Strollers: ["healthychildren-stroller", "cpsc-recalls", "safer-products"],
  "Car Safety": ["nhtsa-car-seats", "nhtsa-car-seat-finder", "nhtsa-ease-of-use", "cpsc-recalls"],
  "Safe Sleep": ["aap-safe-sleep", "healthychildren-safe-sleep", "cpsc-recalls", "safer-products"],
  "Toy Safety": ["cpsc-small-parts", "cpsc-toy-safety", "cpsc-recalls", "safer-products"],
  "Bath Safety": ["cpsc-childproofing", "cpsc-child-safety", "cpsc-recalls"],
  Recalls: ["cpsc-recalls", "safer-products", "cpsc-child-safety"],
  "Feeding Safety": ["cpsc-childproofing", "cpsc-recalls", "safer-products"],
  "Outdoor Safety": ["cpsc-bike-helmets", "cpsc-child-safety", "cpsc-recalls"],
  Monitoring: ["aap-safe-sleep", "healthychildren-safe-sleep", "cpsc-recalls"],
  "Travel Safety": ["nhtsa-car-seats", "healthychildren-travel", "healthychildren-stroller", "cpsc-recalls"],
  "Emergency Readiness": ["cpsc-child-safety", "cpsc-recalls", "safer-products"],
};

const articleGuidance: Record<string, { hazard: string; buyingFocus: string; setupCheck: string; redFlag: string; verification: string }> = {
  "safer-baby-products-to-buy-first": {
    hazard: "the mismatch between what new parents are told to buy and the few safety products that actually reduce everyday risks at home, in the car, and during sleep",
    buyingFocus: "stable sleep basics, correctly used car restraints, furniture anchoring, stair protection, cabinet and outlet controls, and recall-aware product choices",
    setupCheck: "walk room by room at crawling height, then verify that each product fits the exact opening, furniture piece, vehicle, mattress, or age range it is meant to protect",
    redFlag: "bundles that include sleep positioners, plush crib add-ons, poorly labeled small parts, or vague compatibility language",
    verification: "check the manufacturer manual, current model number, and recall history before treating any baby product as ready for daily use",
  },
  "baby-proofing-checklist-products": {
    hazard: "the transition from a stationary infant to a crawler or climber who can reach outlets, drawers, cords, furniture, stairs, and low cabinets quickly",
    buyingFocus: "hardware-mounted gates where falls are possible, anchored furniture, tamper-resistant outlet protection, secured cords, and cabinet locks that adults will actually relock",
    setupCheck: "test every latch, anchor, strap, and cover after installation instead of assuming the package instructions alone solved the hazard",
    redFlag: "pressure gates at the top of stairs, outlet caps that pop out easily, adhesive locks on dirty surfaces, or anchors that are not attached to solid structure",
    verification: "repeat the checklist whenever the child begins crawling, pulling up, climbing, or spending time in a new room",
  },
  "how-to-choose-a-safe-stroller": {
    hazard: "tip-overs, falls, finger pinch points, unsecured toys, runaway parking brakes, and using stroller accessories in ways the manufacturer did not intend",
    buyingFocus: "a five-point harness, dependable brakes, stable frame, clear weight limits, compatible infant use, sun coverage, and storage that does not shift the center of gravity",
    setupCheck: "practice folding, braking, buckling, and curb handling before using the stroller in a busy parking lot or sidewalk",
    redFlag: "secondhand strollers with missing manuals, recalled models, improvised car-seat adapters, or toys tied where a child can pull them loose",
    verification: "confirm the exact model, accessory compatibility, and age or weight limits before buying or reusing a stroller",
  },
  "safest-car-seat-features": {
    hazard: "choosing a seat by ratings or price while missing the fit questions that determine whether it can protect the specific child in the specific vehicle",
    buyingFocus: "rear-facing limits, harness fit, clear installation paths, top tether use, vehicle compatibility, recline indicators, and ease-of-use features caregivers can repeat correctly",
    setupCheck: "compare the child's age, height, and weight against the seat's mode limits and test the installation in the vehicle before relying on it",
    redFlag: "used seats with unknown crash history, expired labels, missing manuals, incompatible vehicle fit, or harness settings that cannot be adjusted properly",
    verification: "use official car-seat finder and ease-of-use resources, then have installation questions reviewed by a qualified child passenger safety technician when possible",
  },
  "safe-sleep-products-crib": {
    hazard: "soft, inclined, padded, or positioning products that look comforting but do not belong in an infant sleep space",
    buyingFocus: "a firm, flat, non-inclined sleep surface, a correctly fitting mattress, fitted sheet, wearable blanket if needed, and an uncluttered crib or bassinet",
    setupCheck: "remove pillows, blankets, bumpers, loungers, positioners, loose toys, and aftermarket inserts before every sleep period",
    redFlag: "products marketed for lounging, soothing, or napping that are not intended as an infant sleep surface",
    verification: "compare each sleep product against current pediatric guidance and the product's intended-use labeling before putting it in the sleep area",
  },
  "best-baby-gates-stairs-doorways": {
    hazard: "falls on stairs and access to rooms where a child can reach cooking, cleaning, water, pets, or heavy objects",
    buyingFocus: "hardware-mounted gates for stairways, correct gate height and width, one-handed adult operation, child-resistant latches, and installation into solid mounting points",
    setupCheck: "measure the opening, baseboards, banisters, and swing clearance before buying; then tug-test the gate after installation",
    redFlag: "pressure-mounted gates used where a fall could occur, missing installation hardware, or gates mounted into weak trim",
    verification: "review the gate's instructions, current recall status, and opening compatibility before placing it at the top or bottom of stairs",
  },
  "non-toxic-toys-parent-guide": {
    hazard: "assuming that natural-looking, wooden, or minimalist toys are automatically safer than plastic toys without checking age grading, small parts, coatings, and construction",
    buyingFocus: "age-appropriate design, durable construction, compliant labeling, smooth finishes, secure parts, and materials claims that the manufacturer explains clearly",
    setupCheck: "inspect toys after unboxing and during use for loose parts, splinters, peeling coatings, accessible batteries, magnets, or breakage",
    redFlag: "vague non-toxic claims, missing age labels, marketplace listings with no manufacturer details, or toys that produce small pieces after normal play",
    verification: "match toys to the child's age and mouthing behavior, then check recall and incident resources for the product or brand",
  },
  "choking-hazard-toy-checklist": {
    hazard: "small parts, balls, balloons, magnets, batteries, and broken toy fragments that can be mouthed by infants and toddlers",
    buyingFocus: "clear age labels, no detachable small parts for children under three, secure battery compartments, and toy designs that remain intact after ordinary use",
    setupCheck: "open packaging away from children, discard loose fasteners, inspect every toy piece, and supervise mixed-age play where older-child toys are present",
    redFlag: "tiny accessories, unsealed button batteries, loose magnets, unlabeled novelty toys, or any product with warnings that conflict with the child's age",
    verification: "use choking hazard labels and recall resources as a minimum screen, not as a replacement for inspecting the actual toy in your home",
  },
  "bath-safety-products": {
    hazard: "slips, scalds, hard edges, distraction, and assuming that bath seats or accessories replace hands-on supervision",
    buyingFocus: "non-slip surfaces, spout protection, thermometer support, storage that keeps sharp or chemical items out of reach, and products that are easy to clean and dry",
    setupCheck: "place everything within adult reach before bath time so the child is never left unattended, even briefly",
    redFlag: "bath seats marketed as supervision substitutes, mats that slide, suction cups that fail, or toys that trap mold",
    verification: "inspect suction, fit, drainage, cleaning instructions, and recall status before using bath accessories regularly",
  },
  "how-to-check-product-recalls": {
    hazard: "continuing to use a product after a recall, safety warning, or incident report because the model number was never checked",
    buyingFocus: "products with clear brand, model, date code, and manufacturer contact information that make future recall checks practical",
    setupCheck: "record model numbers for major baby gear and check recall sources before buying used, accepting hand-me-downs, or moving products between children",
    redFlag: "missing labels, removed tags, no manufacturer identity, or a seller who cannot provide the exact model",
    verification: "search official recall and incident-report resources using brand, model, date code, and product category before purchase and during ongoing use",
  },
  "safest-high-chair-features": {
    hazard: "falls, tipping, tray releases, climbing, and loose harness use during a routine that happens multiple times a day",
    buyingFocus: "a stable base, secure restraint system, crotch post or anti-submarine design, easy-clean surfaces, locking tray, and clear age or weight limits",
    setupCheck: "buckle the restraint every time, lock wheels if present, and keep the chair away from counters, tables, walls, or surfaces a child can push against",
    redFlag: "wobbly frames, cracked trays, missing straps, recalled models, or booster seats used on unstable dining chairs",
    verification: "confirm instructions, model number, recall status, and all restraint parts before using a high chair or booster daily",
  },
  "best-toddler-helmets": {
    hazard: "head injury risk from biking, scooters, balance bikes, and ride-on toys when a helmet fits poorly or is not certified for the activity",
    buyingFocus: "CPSC bicycle helmet compliance, correct size range, stable fit, adjustable straps, comfortable ventilation, and activity-specific labeling",
    setupCheck: "fit the helmet level on the head, adjust the side straps and chin strap, and replace helmets after significant impact or visible damage",
    redFlag: "novelty helmets, helmets that slide back, cracked foam, missing certification labels, or buying too large for a child to grow into",
    verification: "match the helmet to the activity and check for current warnings or recalls before relying on it",
  },
  "safe-outdoor-play-gear": {
    hazard: "falls, hard surfaces, sun exposure, water access, choking hazards, and gear that is too advanced for a toddler's balance or judgment",
    buyingFocus: "age-appropriate ride-ons, helmets, shaded play, visible clothing, anchored play equipment, and simple gear that lets adults supervise closely",
    setupCheck: "scan the play area for traffic, water, cords, small objects, unstable furniture, and hot surfaces before taking products outside",
    redFlag: "high platforms without guardrails, loose fasteners, worn straps, recalled helmets, or toys that become projectiles around younger siblings",
    verification: "check product instructions, age grading, surface requirements, and recalls before leaving outdoor gear in regular rotation",
  },
  "baby-monitor-safety": {
    hazard: "cord strangulation, false reassurance, privacy exposure, and confusing a monitor with a medical or safe-sleep device",
    buyingFocus: "secure cord routing, stable mounting, privacy controls, clear audio or video, low-battery alerts, and realistic expectations about what a monitor can and cannot do",
    setupCheck: "mount cameras and cords well away from the crib or sleep space and test alerts from the rooms where caregivers actually spend time",
    redFlag: "cords within reach, reused default passwords, unsupported apps, or marketing that suggests the monitor replaces safe sleep practices",
    verification: "review manufacturer setup instructions, privacy settings, and recall notices before relying on a monitor overnight",
  },
  "cabinet-locks-outlet-covers-corner-guards": {
    hazard: "daily access to cleaning products, medicines, sharp tools, electrical outlets, cords, and hard edges at toddler height",
    buyingFocus: "locks adults can use consistently, outlet protection that resists removal, cord management, and corner guards only where they address a real impact point",
    setupCheck: "install one product type at a time and then try to defeat it the way a curious toddler would: pull, twist, lift, and repeat",
    redFlag: "adhesive locks on damp or dusty surfaces, outlet caps that become choking hazards, or relying on corner guards while leaving heavy objects unsecured",
    verification: "combine devices with storage changes, poison control planning, and recall checks for childproofing products",
  },
  "travel-safety-products-for-kids": {
    hazard: "changing sleep, car, stroller, feeding, and supervision routines in airports, hotels, rental cars, and relatives' homes",
    buyingFocus: "FAA-aware car seat planning, travel-friendly child restraints, compact first aid, stroller brakes, safe sleep arrangements, and hotel childproofing basics",
    setupCheck: "verify restraint labels, destination sleep space, medication storage, balcony/window hazards, and transport plans before the trip starts",
    redFlag: "unknown rental car seats, improvised sleep surfaces, loose hotel cords, or relying on gear that has not been practiced at home",
    verification: "use official car seat and travel guidance, then confirm current airline, vehicle, and product requirements before departure",
  },
  "how-to-choose-safe-toys-by-age": {
    hazard: "buying toys for a child's interest level instead of developmental stage, mouth behavior, sibling environment, and current safety labeling",
    buyingFocus: "age grading, durable construction, no small parts for younger children, safe battery compartments, washable surfaces, and clear manufacturer identity",
    setupCheck: "separate older-child toys from infant and toddler areas and recheck toys after rough play or battery changes",
    redFlag: "tiny accessories, high-powered magnets, button batteries, counterfeit-looking listings, or no choking-hazard labeling where it would be expected",
    verification: "confirm age labels and recall status, then supervise first use to see how the child actually plays with the toy",
  },
  "nursery-safety-checklist": {
    hazard: "combining sleep, storage, cords, furniture, monitors, and changing routines in one room where parents may be tired or distracted",
    buyingFocus: "safe sleep setup, anchored furniture, cord control, secure changing supplies, night lighting, and storage that keeps small items out of reach",
    setupCheck: "stand at the crib, changing table, door, and floor level to spot reachable cords, loose objects, unstable furniture, and sleep-space clutter",
    redFlag: "decorative crib bedding, unanchored dressers, monitor cords near the crib, or heavy objects stored above changing areas",
    verification: "check pediatric safe-sleep guidance, manufacturer instructions, and recall resources before finalizing the nursery",
  },
  "what-not-to-buy-for-baby-sleep": {
    hazard: "products that promise longer sleep or easier settling while adding soft surfaces, incline, restraint, padding, or clutter to the infant sleep space",
    buyingFocus: "what to skip: pillows, loungers, bumpers, wedges, inclined sleepers, weighted sleep products, loose blankets, and decorative items inside the crib",
    setupCheck: "keep the sleep area boring: firm, flat, uncluttered, and used according to the product's intended sleep labeling",
    redFlag: "sleep claims for products marketed mainly as loungers, positioners, nests, cushions, or soothing accessories",
    verification: "compare every registry item against current AAP and HealthyChildren safe-sleep guidance before buying it",
  },
  "anti-tip-furniture-anchor-guide": {
    hazard: "dressers, bookshelves, televisions, and ranges tipping when children climb, pull, or open drawers",
    buyingFocus: "anti-tip kits matched to the furniture, wall type, and manufacturer instructions, plus furniture choices that are stable before anchoring",
    setupCheck: "find studs or appropriate structural support, follow the anchor instructions, and avoid relying only on drywall if the kit requires stronger attachment",
    redFlag: "heavy objects on top of dressers, multiple open drawers, anchors installed into weak material, or furniture moved after installation without reanchoring",
    verification: "use CPSC anchoring guidance and product instructions, then periodically inspect straps and hardware",
  },
  "outlet-covers-and-cord-safety": {
    hazard: "electrical shock, burns, strangulation, tripping, and small removable outlet caps becoming hazards themselves",
    buyingFocus: "tamper-resistant outlets, sliding outlet covers, secure cord channels, cord shorteners, and furniture placement that blocks access without trapping heat",
    setupCheck: "walk the room after installation and tug cords, check covers, and look for chargers or power strips at child height",
    redFlag: "loose caps, overloaded power strips, dangling blind cords, or extension cords hidden under rugs",
    verification: "follow CPSC childproofing guidance and inspect outlet protection after cleaning, moving furniture, or adding electronics",
  },
  "family-first-aid-kits-for-parents": {
    hazard: "not having basic supplies, emergency contacts, dosing tools, or recall-aware product information ready when a minor injury or urgent situation happens",
    buyingFocus: "organized first-aid supplies, child-safe medication storage, emergency contact cards, thermometer, bandages, cleaning supplies, and travel duplicates",
    setupCheck: "store supplies where adults can reach them quickly but children cannot, then review the kit before travel and after every use",
    redFlag: "expired medicines, loose sharp objects, unlabeled products, missing emergency numbers, or first-aid items stored with household chemicals",
    verification: "use official safety resources for product recalls and ask your pediatrician what belongs in a child-specific home kit",
  },
};

function sourcesFor(category: string, slug: string) {
  const sourceIds = new Set([...(categorySourceIds[category] ?? ["cpsc-child-safety", "cpsc-recalls", "safer-products"])]);
  if (slug.includes("gate") || slug.includes("cabinet") || slug.includes("outlet") || slug.includes("baby-proofing")) sourceIds.add("cpsc-childproofing");
  if (slug.includes("sleep") || slug.includes("nursery")) {
    sourceIds.add("aap-safe-sleep");
    sourceIds.add("healthychildren-safe-sleep");
  }
  if (slug.includes("car-seat") || slug.includes("travel")) {
    sourceIds.add("nhtsa-car-seats");
    sourceIds.add("nhtsa-car-seat-finder");
  }
  if (slug.includes("toy") || slug.includes("choking")) {
    sourceIds.add("cpsc-small-parts");
    sourceIds.add("cpsc-toy-safety");
  }
  if (slug.includes("anchor")) sourceIds.add("cpsc-anchor-it");
  if (slug.includes("helmet") || slug.includes("outdoor")) sourceIds.add("cpsc-bike-helmets");
  return [...sourceIds];
}

function paragraph(text: string, sourceIds: string[]) {
  return { text, sourceIds };
}

function buildSections(title: string, slug: string, category: string, keywords: readonly string[]) {
  const guidance = articleGuidance[slug];
  const sourceIds = sourcesFor(category, slug);
  const primary = sourceIds.slice(0, 2);
  const verificationSources = sourceIds.includes("safer-products") ? ["cpsc-recalls", "safer-products"] : sourceIds.slice(0, 2);

  return [
    {
      heading: "What parents are really trying to prevent",
      body: [
        paragraph(`${title} starts with a practical hazard: ${guidance.hazard}. A useful shopping decision is not about finding the most expensive item; it is about matching the product to the child's age, size, behavior, and environment.`, primary),
        paragraph(`For ${category.toLowerCase()}, the safer buying process begins before the cart. Parents should identify the risk, check whether a product is designed for that exact use, and avoid relying on broad marketing language such as "safe," "natural," or "best" without instructions and standards to back it up.`, sourceIds.slice(0, 3)),
      ],
    },
    {
      heading: "What to compare before buying",
      body: [
        paragraph(`For parents searching ${keywords.map((keyword) => `"${keyword}"`).join(", ")}, the buying focus should be ${guidance.buyingFocus}. These details matter more than color, bundle size, or a product photo that looks reassuring.`, primary),
        paragraph(`The best product for one family may be wrong for another if the child is a different age, the vehicle is different, the stair opening is unusual, or the product will be used by multiple caregivers. A strong article recommendation should therefore send you back to model numbers, manuals, fit limits, and current safety information.`, sourceIds.slice(0, 3)),
      ],
    },
    {
      heading: "Setup checks that decide whether it works",
      body: [
        paragraph(`Before everyday use, ${guidance.setupCheck}. This is where many safety products succeed or fail: not in the listing, but in the way they fit the room, vehicle, crib, toy bin, stroller, or daily routine.`, primary),
        paragraph("Repeat the setup check after cleaning, travel, moving furniture, battery changes, new siblings, growth spurts, or any change in how the child interacts with the product. Child safety is not a one-time purchase; it is a series of small checks that keep pace with development.", sourceIds.slice(0, 3)),
      ],
    },
    {
      heading: "Red flags to slow down for",
      body: [
        paragraph(`Slow down if you see ${guidance.redFlag}. These are the moments when a product can look convenient while creating a new risk or failing to solve the original one.`, sourceIds.slice(0, 3)),
        paragraph("Also watch for missing model numbers, unclear manufacturer identity, marketplace listings with inconsistent photos, copied safety language, or reviews that discuss a different version than the one currently being sold. If you cannot verify the exact product, choose something easier to document.", verificationSources),
      ],
    },
    {
      heading: "How to verify the safer choice",
      body: [
        paragraph(`Use this guide as a shortlist, then ${guidance.verification}. When a product is safety-related, the last step before buying should be verification, not impulse.`, verificationSources),
        paragraph("Keep the manual, register important products when appropriate, and revisit recall resources periodically. No safety product replaces supervision, correct installation, pediatric or traffic-safety guidance, or the manufacturer's current instructions.", sourceIds),
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
  sections: buildSections(title, slug, category, keywords),
  sourceIds: sourcesFor(category, slug),
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

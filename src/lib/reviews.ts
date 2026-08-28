export type ReviewProduct = {
  name: string;
  slug: string;
  image: string;
  bestFor: string;
  category: string;
  weight: string;
  capacity: string;
  summary: string;
  features: string[];
  pros: string[];
  cons: string[];
  amazon: string;
};

export type ProductDecision = {
  bestWhen: string[];
  considerAnotherWhen: string[];
  setupTip: string;
  searchIntent: string;
};

const tag = "mitchellrusso-20";
const amazonSearch = (query: string) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`;

export const reviewProducts: ReviewProduct[] = [
  {
    name: "Hardware-Mounted Baby Gate",
    slug: "hardware-mounted-baby-gate",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best first check for stairs and high-risk openings",
    category: "Home Childproofing",
    weight: "Install type: hardware-mounted",
    capacity: "Verify opening width and mounting surface",
    summary: "A hardware-mounted gate is the safer starting point for stairs and openings where pressure-mounted gates are not appropriate.",
    features: ["Screwed-in mounting", "One-way swing option", "Latch indicator", "No bottom trip bar for stair tops", "Width extensions to verify"],
    pros: ["More secure than pressure-only gates for stair areas", "Good fit for permanent safety zones", "Encourages proper installation checks"],
    cons: ["Requires drilling", "Must match the exact opening and wall material"],
    amazon: amazonSearch("hardware mounted baby gate for stairs"),
  },
  {
    name: "Convertible Car Seat",
    slug: "convertible-car-seat",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best long-use vehicle safety category",
    category: "Car Safety",
    weight: "Fit: child height and weight limits",
    capacity: "Rear-facing and forward-facing limits to verify",
    summary: "A convertible car seat can support longer rear-facing use when it fits the child, vehicle, and installation method.",
    features: ["Rear-facing limits", "Forward-facing harness", "LATCH or seat-belt install", "Harness adjustability", "Side-impact protection claims to verify"],
    pros: ["Longer useful life than many infant-only seats", "Good for parents planning ahead", "Many models support extended rear-facing"],
    cons: ["Can be bulky", "Correct installation is essential"],
    amazon: amazonSearch("convertible car seat extended rear facing"),
  },
  {
    name: "JPMA-Style Crib and Firm Mattress Setup",
    slug: "safe-crib-mattress-setup",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best safer sleep foundation",
    category: "Safe Sleep",
    weight: "Fit: crib and mattress dimensions",
    capacity: "Firm, flat sleep surface",
    summary: "A modern crib with a firm, flat mattress and fitted sheet supports safer sleep guidance better than soft add-ons or inclined products.",
    features: ["Firm flat mattress", "Snug fitted sheet", "Current crib standard", "No soft bedding", "No bumpers or loose toys"],
    pros: ["Aligns with safe sleep basics", "Simple setup is easier to inspect", "Avoids risky add-ons"],
    cons: ["Parents must resist decorative soft items", "Used cribs need extra standard and recall checks"],
    amazon: amazonSearch("baby crib firm mattress fitted sheet safe sleep"),
  },
  {
    name: "Full-Harness Stroller",
    slug: "full-harness-stroller",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best stroller safety checklist category",
    category: "Strollers",
    weight: "Fit: child size and stroller weight",
    capacity: "Harness, brakes, wheel locks, and stability",
    summary: "A stroller should be chosen by harness design, brake behavior, stability, folding safety, and real daily terrain.",
    features: ["Five-point harness", "Reliable parking brake", "Stable wheelbase", "Locking fold", "Canopy and visibility"],
    pros: ["Good safety features are easy to inspect", "Works across everyday walks and errands", "Helps parents compare beyond style"],
    cons: ["Some models are heavy", "Accessories can affect balance if used incorrectly"],
    amazon: amazonSearch("baby stroller five point harness brake"),
  },
  {
    name: "Non-Toxic Wooden Toy Set",
    slug: "non-toxic-wooden-toy-set",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best toy safety starting point",
    category: "Toy Safety",
    weight: "Age range: verify for child",
    capacity: "No small parts for young children",
    summary: "Simple wooden toys can be a safer-feeling choice when parents verify age grading, finishes, small parts, and recall history.",
    features: ["Age-graded design", "Smooth edges", "Non-toxic finish claims to verify", "No accessible magnets", "No small detachable parts"],
    pros: ["Often durable and simple", "Less battery and electronic complexity", "Good fit for open-ended play"],
    cons: ["Wood does not automatically mean safe", "Paint, finish, and small-part checks still matter"],
    amazon: amazonSearch("non toxic wooden toys toddler age appropriate"),
  },
  {
    name: "Anti-Tip Furniture Anchors",
    slug: "anti-tip-furniture-anchors",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best hidden home hazard fix",
    category: "Home Childproofing",
    weight: "Install: wall studs or rated anchors",
    capacity: "Verify furniture and wall compatibility",
    summary: "Furniture anchors help reduce tip-over risk from dressers, bookcases, TV stands, and climbable storage furniture.",
    features: ["Wall attachment", "Furniture strap or bracket", "Hardware included", "Load rating to verify", "Installation instructions"],
    pros: ["Low-cost safety upgrade", "Targets a serious hidden hazard", "Useful across bedrooms and living rooms"],
    cons: ["Must be installed correctly", "Rental homes may require planning"],
    amazon: amazonSearch("furniture anchors anti tip child safety"),
  },
  {
    name: "Outlet Covers and Cord Shorteners",
    slug: "outlet-covers-cord-shorteners",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best electrical curiosity barrier",
    category: "Home Childproofing",
    weight: "Fit: outlet type and cord layout",
    capacity: "Tamper resistance to verify",
    summary: "Outlet covers, box covers, and cord-management products reduce access to tempting electrical hazards when chosen for the exact outlet setup.",
    features: ["Outlet box covers", "Sliding plate covers", "Cord shorteners", "Tamper-resistant options", "Room-by-room fit"],
    pros: ["Easy first childproofing step", "Targets common crawling-level hazards", "Works with other room safety checks"],
    cons: ["Loose plug caps can become hazards", "Some covers do not fit bulky plugs"],
    amazon: amazonSearch("child safety outlet covers cord shortener"),
  },
  {
    name: "Bath Spout Cover and Non-Slip Bath Mat",
    slug: "bath-spout-cover-non-slip-mat",
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best bath-time safety basics",
    category: "Bath Safety",
    weight: "Fit: tub surface and spout style",
    capacity: "Non-slip and mildew-resistant materials to verify",
    summary: "Bath safety starts with constant supervision, lower water temperature awareness, a non-slip surface, and impact protection around hard edges.",
    features: ["Non-slip suction design", "Soft spout cover", "Drainage holes", "Easy cleaning", "Tub fit to verify"],
    pros: ["Addresses slips and bumps", "Simple to inspect before each bath", "Low-cost routine upgrade"],
    cons: ["Suction mats can loosen", "No product replaces hands-on supervision"],
    amazon: amazonSearch("baby bath spout cover non slip bath mat"),
  },
  {
    name: "Kids Bike Helmet",
    slug: "kids-bike-helmet",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best outdoor protective gear essential",
    category: "Outdoor Safety",
    weight: "Fit: head circumference",
    capacity: "Certification and fit system to verify",
    summary: "A kids helmet should be selected by fit, certification label, comfort, visibility, and whether the child will actually wear it correctly.",
    features: ["CPSC bike helmet certification to verify", "Adjustable fit dial", "Chin strap", "Ventilation", "High-visibility color"],
    pros: ["Core bike and scooter safety item", "Fit is easy to check", "Can improve compliance when comfortable"],
    cons: ["Outgrown helmets need replacement", "Crash-damaged helmets should not be reused"],
    amazon: amazonSearch("kids bike helmet CPSC certified"),
  },
  {
    name: "First Aid and Emergency Readiness Kit",
    slug: "family-first-aid-emergency-kit",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best family safety backup",
    category: "Emergency Readiness",
    weight: "Fit: home, car, diaper bag",
    capacity: "Supplies and expiration dates to verify",
    summary: "A family first aid kit supports everyday readiness when parents check contents, expiration dates, storage location, and child-resistant handling.",
    features: ["Bandages and gauze", "Thermometer", "Cold pack", "Emergency contacts", "Child-safe storage"],
    pros: ["Useful at home and in the car", "Encourages readiness habits", "Easy to customize"],
    cons: ["Needs periodic restocking", "Medicines require separate safe storage"],
    amazon: amazonSearch("family first aid kit child safety home car"),
  },
  {
    name: "Non-WiFi Baby Monitor",
    slug: "non-wifi-baby-monitor",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best privacy-first nursery monitor category",
    category: "Monitoring",
    weight: "Signal: local radio monitor or closed system",
    capacity: "Verify range, battery life, camera placement, and cord routing",
    summary: "A non-WiFi baby monitor can be a simpler choice for parents who want fewer app, password, and network-security decisions.",
    features: ["Local parent unit", "No home WiFi required", "Night vision options", "Low-battery alert", "Cord-safe mounting to verify"],
    pros: ["Reduces app and cloud-account complexity", "Often easier for grandparents or babysitters", "Keeps focus on placement and safe sleep basics"],
    cons: ["Range can be limited", "Still requires safe cord routing and realistic expectations"],
    amazon: amazonSearch("non wifi baby monitor video secure nursery"),
  },
  {
    name: "Childproof Cabinet Lock Set",
    slug: "childproof-cabinet-lock-set",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best kitchen and bathroom access control",
    category: "Home Childproofing",
    weight: "Install: adhesive, magnetic, or hardware-mounted",
    capacity: "Verify cabinet material, cleaner storage, and adult usability",
    summary: "Cabinet locks are most useful when they fit the cabinet, hold up to daily use, and keep chemicals, sharp tools, medicines, and small objects out of reach.",
    features: ["Magnetic or latch design", "Adhesive or screw-in install", "Multi-pack options", "Adult release access", "Cabinet material compatibility"],
    pros: ["Targets common kitchen and bath hazards", "Works well with higher storage habits", "Useful for renters when fit is checked"],
    cons: ["Adhesive can fail on dirty or textured surfaces", "Adults must relock cabinets every time"],
    amazon: amazonSearch("childproof cabinet locks magnetic adhesive baby proofing"),
  },
  {
    name: "Stable High Chair With Harness",
    slug: "stable-high-chair-with-harness",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best daily feeding safety checklist category",
    category: "Feeding Safety",
    weight: "Fit: child age, posture, and weight limits",
    capacity: "Verify restraint, stability, tray lock, and cleaning design",
    summary: "A safer high chair choice starts with stability, restraints that are used every meal, clear limits, and a design that caregivers can clean and operate consistently.",
    features: ["Harness or restraint system", "Wide stable base", "Tray lock", "Foot support to verify", "Easy-clean surfaces"],
    pros: ["Supports repeated daily routines", "Stability and restraints are easy to inspect", "Can reduce climbing and slipping risk when used correctly"],
    cons: ["Bulky models can be hard to store", "Missing or unused straps change the safety picture"],
    amazon: amazonSearch("stable high chair harness safety baby toddler"),
  },
  {
    name: "Window Guards and Cordless Blind Safety",
    slug: "window-guards-cordless-blind-safety",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best upstairs bedroom and playroom window check",
    category: "Home Childproofing",
    weight: "Install: window type and emergency egress rules",
    capacity: "Verify guard, stop, blind cord, and landlord requirements",
    summary: "Window safety is about preventing access, reducing fall risk, and removing cord hazards without blocking required emergency escape routes.",
    features: ["Window guard or stop", "Cordless blind options", "Emergency release to verify", "Window-type compatibility", "Rental-friendly planning"],
    pros: ["Targets a serious hidden hazard", "Useful in bedrooms and playrooms", "Pairs well with furniture placement changes"],
    cons: ["Must preserve emergency egress where required", "Fit depends heavily on window design"],
    amazon: amazonSearch("child safety window guards window stops cordless blinds"),
  },
  {
    name: "Medicine Lock Box",
    slug: "medicine-lock-box",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Best poison-prevention storage upgrade",
    category: "Emergency Readiness",
    weight: "Fit: home, travel, grandparents, and shared bathrooms",
    capacity: "Verify lock type, capacity, and child-resistant storage habits",
    summary: "A medicine lock box helps keep medications, vitamins, and small health items together and out of reach when paired with high storage and regular cleanouts.",
    features: ["Locking lid", "Portable size options", "Organizer compartments", "Travel-friendly models", "Emergency access planning"],
    pros: ["Clear habit for medications and vitamins", "Useful in homes with visitors or grandparents", "Pairs well with Poison Control contact planning"],
    cons: ["Needs consistent use", "Should not be the only layer of protection"],
    amazon: amazonSearch("medicine lock box child safety medication storage"),
  },
];

export function getReviewProductBySlug(slug: string) {
  return reviewProducts.find((product) => product.slug === slug);
}

export function getProductDecision(product: ReviewProduct): ProductDecision {
  const category = product.category.toLowerCase();

  if (category.includes("car")) {
    return {
      bestWhen: ["You are matching a child to the correct seat type.", "You will verify height, weight, vehicle fit, and installation instructions.", "You want longer-use gear with clear harness and rear-facing guidance."],
      considerAnotherWhen: ["You cannot confirm vehicle compatibility.", "You need a certified technician to check installation first."],
      setupTip: "Use the manufacturer manual and NHTSA guidance; do not rely on product photos for installation.",
      searchIntent: "child passenger safety car seat shopping",
    };
  }

  if (category.includes("sleep")) {
    return {
      bestWhen: ["You want a simple, firm, flat sleep setup.", "You are avoiding soft bedding, bumpers, wedges, and decorative sleep add-ons.", "You want products that support AAP safe-sleep basics."],
      considerAnotherWhen: ["The product is inclined, plush, weighted, or marketed as a sleep aid without clear safety guidance.", "You are buying used and cannot confirm current standards or recall status."],
      setupTip: "Keep the sleep space plain: firm flat mattress, fitted sheet, baby on back, and no loose soft items.",
      searchIntent: "safe sleep nursery product shopping",
    };
  }

  if (category.includes("toy")) {
    return {
      bestWhen: ["You can verify the age grade.", "The toy avoids small parts, accessible magnets, and loose button batteries for young children.", "The materials and finish claims are clear."],
      considerAnotherWhen: ["The listing has unclear age guidance.", "Parts can detach, fit in a child mouth, or hide magnets or batteries."],
      setupTip: "Check the age label, small parts, magnets, batteries, and recall history before giving the toy to a child.",
      searchIntent: "non toxic age appropriate safe toys",
    };
  }

  if (category.includes("monitor")) {
    return {
      bestWhen: ["You want a simpler monitor setup with fewer app and account decisions.", "You can route cords safely away from the crib or sleep space.", "You understand that monitors do not replace safe sleep practices or supervision."],
      considerAnotherWhen: ["You need remote phone access while away from home.", "You cannot mount the camera and cords safely out of reach."],
      setupTip: "Place the monitor and all cords well away from the crib, then test range and alerts from normal caregiver locations.",
      searchIntent: "secure non wifi baby monitor shopping",
    };
  }

  if (category.includes("feeding")) {
    return {
      bestWhen: ["The chair fits the child's age, weight, and posture.", "Caregivers will use the restraint system every meal.", "You can keep the chair away from surfaces a child can push against."],
      considerAnotherWhen: ["The straps are missing, hard to clean, or rarely used.", "The chair wobbles, has unclear limits, or has a recall concern."],
      setupTip: "Buckle the restraint every time and place the chair where the child cannot push off a table, wall, counter, or cabinet.",
      searchIntent: "safe high chair harness shopping",
    };
  }

  if (category.includes("emergency")) {
    return {
      bestWhen: ["You want medications, first-aid supplies, or emergency items organized and out of reach.", "Adults can access the box quickly while children cannot.", "You will check expiration dates and restock supplies."],
      considerAnotherWhen: ["The lock is flimsy or easy to bypass.", "You need professional guidance on what medications or supplies belong in the home."],
      setupTip: "Keep locked supplies high, dry, labeled, and separate from ordinary child-accessible storage.",
      searchIntent: "child safe medicine lock box first aid kit",
    };
  }

  return {
    bestWhen: ["You can match the product to the exact room, age, and hazard.", "The product has clear installation or fit instructions.", "You are using it as part of supervision, not instead of supervision."],
    considerAnotherWhen: ["The product does not fit your home setup.", "The listing lacks age, installation, material, or safety information."],
    setupTip: "Install, test, register if applicable, and re-check the product as the child grows.",
    searchIntent: "child safety product shopping",
  };
}

export function getRelatedProducts(product: ReviewProduct, limit = 3) {
  return reviewProducts
    .filter((candidate) => candidate.slug !== product.slug)
    .sort((a, b) => (a.category === product.category ? 0 : 1) - (b.category === product.category ? 0 : 1))
    .slice(0, limit);
}

export function getProductFaqs(product: ReviewProduct) {
  return [
    {
      question: `What should I verify before buying ${product.name.toLowerCase()} products?`,
      answer: "Check age or size fit, recall status, current safety labels, installation instructions, material claims, seller details, and whether the product matches your home, vehicle, or daily routine.",
    },
    {
      question: `Does ${product.name.toLowerCase()} replace supervision?`,
      answer: "No. Safety products reduce specific hazards, but they do not replace adult supervision, correct installation, product registration, or official safety guidance.",
    },
    {
      question: "Why does Safer Kids link to a product category instead of only one item?",
      answer: "For safety-aware shopping, current availability, recalls, model changes, and fit details matter. Category links let parents compare current options while using the safety checklist.",
    },
  ];
}

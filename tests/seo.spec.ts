import { expect, test } from "@playwright/test";

const productionOrigin = "https://saferkids.com";
const importantRoutes = [
  "/",
  "/resources",
  "/resources/topics/baby-proofing-checklist",
  "/resources/safer-baby-products-to-buy-first",
  "/reviews/hardware-mounted-baby-gate",
  "/compare/hardware-mounted-vs-pressure-mounted-baby-gates",
  "/faq",
  "/review-methodology",
  "/safety-disclaimer",
];

function getTagContent(html: string, selector: "description" | "robots") {
  const match = html.match(new RegExp(`<meta[^>]+name=["']${selector}["'][^>]+content=["']([^"']+)["']`, "i"));
  return match?.[1] ?? "";
}

function getPropertyContent(html: string, property: string) {
  const match = html.match(new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`, "i"));
  return match?.[1] ?? "";
}

function getCanonical(html: string) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return match?.[1] ?? "";
}

test.describe("Safer Kids SEO discovery and metadata", () => {
  for (const route of importantRoutes) {
    test(`${route} has indexable metadata and supported schema`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.ok()).toBeTruthy();
      const html = await response.text();

      expect(html).toMatch(/<title>.*(Safer Kids|Safety|Baby|Child|Stroller|Car Seat|FAQ).*<\/title>/i);

      const description = getTagContent(html, "description");
      expect(description.length).toBeGreaterThan(50);
      expect(description.length).toBeLessThan(220);

      const canonical = getCanonical(html);
      expect(canonical).toBe(`${productionOrigin}${route === "/" ? "" : route}`);

      expect(getPropertyContent(html, "og:title")).toBeTruthy();
      expect(getPropertyContent(html, "og:description")).toBeTruthy();

      const robots = getTagContent(html, "robots");
      expect(robots).not.toContain("noindex");

      const jsonLdBlocks = Array.from(html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map(
        (match) => match[1],
      );
      expect(jsonLdBlocks.length).toBeGreaterThan(0);
      const jsonLd = jsonLdBlocks.map((block) => JSON.parse(block));
      const serialized = JSON.stringify(jsonLd);
      expect(serialized).not.toContain('"@type":"Product"');
    });
  }

  test("discovery and trust files are crawlable", async ({ request }) => {
    for (const route of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/.well-known/security.txt", "/security.txt"]) {
      const response = await request.get(route);
      expect(response.ok()).toBeTruthy();
    }

    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toContain(`${productionOrigin}/sitemap.xml`);

    const llms = await (await request.get("/llms.txt")).text();
    expect(llms).toContain("Safer Kids");
    expect(llms).toContain("child safety");

    const security = await (await request.get("/.well-known/security.txt")).text();
    expect(security).toContain(`${productionOrigin}/.well-known/security.txt`);
  });

  test("sitemap includes public routes and omits utility endpoints", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();
    const sitemap = await response.text();

    for (const route of importantRoutes.slice(0, 6)) {
      expect(sitemap).toContain(`${productionOrigin}${route === "/" ? "" : route}`);
    }

    expect(sitemap).not.toContain("/api/contact");
    expect(sitemap).not.toContain("/api/script.js");
    expect(sitemap).not.toContain("/security.txt");
  });

  test("Rybbit analytics proxy snippet is present", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const script = page.locator('script[src="/api/script.js"][data-site-id="c54121fe864a"]');
    await expect(script).toHaveCount(1);
  });

  test("Amazon links are tagged and marked as sponsored external links", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const amazonLinks = page.locator('a[href*="amazon.com"]');
    const count = await amazonLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index += 1) {
      const link = amazonLinks.nth(index);
      const href = await link.getAttribute("href");
      const target = await link.getAttribute("target");
      const rel = await link.getAttribute("rel");

      expect(href).toContain("tag=mitchellrusso-20");
      expect(target).toBe("_blank");
      expect(rel).toContain("sponsored");
      expect(rel).toContain("nofollow");
      expect(rel).toContain("noreferrer");
    }
  });

  test("mobile navigation exposes core routes", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only navigation check");

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.getByLabel(/open menu/i).click();
    await expect(page.locator("details[open]")).toHaveCount(1);
    await expect(page.locator('#mobile-navigation a[href="/resources"]')).toBeVisible();
    await expect(page.locator('#mobile-navigation a[href="/contact"]')).toBeVisible();
  });
});

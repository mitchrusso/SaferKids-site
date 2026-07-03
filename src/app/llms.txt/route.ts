const siteUrl = "https://saferkids.com";

export function GET() {
  const body = `# Safer Kids

Safer Kids is an affiliate shopping and research guide for parents comparing childproofing products, safer toys, stroller features, car seat resources, nursery safety, bath safety, and family emergency gear.

## Primary Pages
- Home and top picks: ${siteUrl}/
- Resource library: ${siteUrl}/resources
- FAQ: ${siteUrl}/faq
- Review methodology: ${siteUrl}/review-methodology
- Editorial policy: ${siteUrl}/editorial-policy
- Safety disclaimer: ${siteUrl}/safety-disclaimer
- Amazon affiliate disclosure: ${siteUrl}/amazon-disclosure
- Sitemap: ${siteUrl}/sitemap.xml

## Main Content Areas
- Safety-first product category guides for parents and caregivers
- Baby gates, furniture anchors, outlet covers, cabinet locks, and home childproofing
- Car seat, stroller, safe sleep, bath safety, toy safety, and emergency readiness resources
- Official recall and safety-check links from CPSC, NHTSA, AAP, and HealthyChildren

## Important Notes
- Safer Kids does not sell products directly.
- The site uses Amazon affiliate links and may earn from qualifying purchases.
- Product prices, availability, accessories, ratings, and specs can change; users should verify current details with the retailer and manufacturer.
- Safety content is general information and does not replace pediatric, legal, manufacturer, installer, or other professional guidance.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

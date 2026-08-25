# SaferKids.com SEO Launch Checklist

## Local Verification

Run these before pushing SEO, content, analytics, or routing changes:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:seo
npm audit --audit-level=high
```

Spot-check these local or production routes after major changes:

- `/`
- `/resources`
- `/resources/topics/baby-proofing-checklist`
- `/resources/safer-baby-products-to-buy-first`
- `/reviews/hardware-mounted-baby-gate`
- `/compare/hardware-mounted-vs-pressure-mounted-baby-gates`
- `/faq`
- `/contact`

## Google Search Console

1. Confirm `https://saferkids.com` or the domain property is verified.
2. Submit or resubmit:

   ```text
   https://saferkids.com/sitemap.xml
   ```

3. Inspect and request indexing for:
   - `https://saferkids.com/`
   - `https://saferkids.com/resources`
   - `https://saferkids.com/resources/topics/baby-proofing-checklist`
   - `https://saferkids.com/resources/safer-baby-products-to-buy-first`
   - `https://saferkids.com/reviews/hardware-mounted-baby-gate`
   - `https://saferkids.com/compare/hardware-mounted-vs-pressure-mounted-baby-gates`

## Bing Webmaster Tools

1. Add or import the property from Google Search Console.
2. Submit:

   ```text
   https://saferkids.com/sitemap.xml
   ```

## Structured Data

- Homepage: WebPage, ItemList, FAQPage, plus sitewide Organization and WebSite.
- Resource library: CollectionPage, ItemList, BreadcrumbList.
- Topic hubs: CollectionPage, ItemList, FAQPage, BreadcrumbList.
- Articles: Article, ItemList, FAQPage, BreadcrumbList, citation URLs.
- Review/checklist pages: Article, FAQPage, BreadcrumbList.
- Comparison pages: WebPage, BreadcrumbList.
- Avoid Product JSON-LD unless current visible offer, price, availability, review, and aggregate rating data are present and verified.

## AI Search Readiness

1. Confirm `https://saferkids.com/llms.txt` loads.
2. Confirm `robots.txt` allows crawlers and points to the sitemap.
3. Keep official sources visible in resource articles.
4. Use conservative safety language; do not imply medical, pediatric, legal, or engineering advice.
5. Keep About, Contact, Review Methodology, Editorial Policy, Safety Disclaimer, Privacy Policy, Terms, Cookie Policy, Accessibility, and Amazon Disclosure reachable from the footer or contextual links.

## Analytics And Conversion

- Confirm the Rybbit proxy script is present with `data-site-id="c54121fe864a"`.
- Confirm Amazon links open in a new tab and include `tag=mitchellrusso-20`.
- Confirm affiliate links use `rel="sponsored nofollow noreferrer"`.
- Verify the contact form after Vercel environment variable changes.

## Security And Trust

- Confirm these return `200`:
  - `https://saferkids.com/.well-known/security.txt`
  - `https://saferkids.com/security.txt`
  - `https://saferkids.com/robots.txt`
  - `https://saferkids.com/sitemap.xml`
  - `https://saferkids.com/llms.txt`
- Confirm production responses include:
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`
  - `Strict-Transport-Security`

## Publishing Rules

- Keep future scheduled resource articles hidden until their publish time.
- Keep sitemap membership aligned with the route indexation matrix.
- Re-run sitemap submission after large article batches or route changes.

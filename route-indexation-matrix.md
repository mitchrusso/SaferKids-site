# SaferKids.com Route Indexation Matrix

Use this matrix before adding, removing, or renaming public routes. The goal is to keep sitemap, robots, canonical, structured data, and internal-link decisions aligned.

| Route | Primary role | Index? | Sitemap? | Canonical | Structured data notes |
| --- | --- | --- | --- | --- | --- |
| `/` | Homepage and main conversion path | Yes | Yes | `/` | WebPage, ItemList, FAQPage, sitewide Organization and WebSite. |
| `/reviews/[slug]` | Safety checklist and affiliate comparison intent | Yes | Yes | `/reviews/[slug]` | Article, FAQPage, BreadcrumbList. Avoid Product schema unless current visible offers, reviews, ratings, price, and availability are verified. |
| `/compare/[slug]` | Product-type comparison guide | Yes | Yes | `/compare/[slug]` | WebPage and BreadcrumbList. |
| `/resources` | Resource library and topic discovery | Yes | Yes | `/resources` | CollectionPage, ItemList, BreadcrumbList. |
| `/resources/[slug]` | Published resource article | Yes, only after scheduled publish time | Yes, only after scheduled publish time | `/resources/[slug]` | Article, ItemList, FAQPage, BreadcrumbList, citation URLs. |
| `/resources/topics/[slug]` | Topical hub and cluster page | Yes | Yes | `/resources/topics/[slug]` | CollectionPage, ItemList, FAQPage, BreadcrumbList. |
| `/about` | Brand/entity trust page | Yes | Yes | `/about` | WebPage where present. |
| `/faq` | General FAQ and objection handling | Yes | Yes | `/faq` | FAQPage and BreadcrumbList. |
| `/contact` | Contact and trust path | Yes | Yes | `/contact` | WebPage/contact route metadata. |
| `/review-methodology` | Editorial trust and review-process disclosure | Yes | Yes | `/review-methodology` | WebPage/trust content. |
| `/editorial-policy` | Editorial standards | Yes | Yes | `/editorial-policy` | WebPage/trust content. |
| `/safety-disclaimer` | Safety and limitation disclosure | Yes | Yes | `/safety-disclaimer` | WebPage/trust content. |
| `/amazon-disclosure` | Affiliate disclosure | Yes | Yes | `/amazon-disclosure` | WebPage/compliance content. |
| `/privacy-policy` | Legal policy | Yes | Yes | `/privacy-policy` | WebPage/legal content. |
| `/terms-and-conditions` | Terms of service | Yes | Yes | `/terms-and-conditions` | WebPage/legal content. |
| `/cookie-policy` | Cookie policy | Yes | Yes | `/cookie-policy` | WebPage/legal content. |
| `/accessibility-statement` | Accessibility statement | Yes | Yes | `/accessibility-statement` | WebPage/trust content. |
| `/robots.txt` | Crawler directives | Utility only | No page entry | N/A | Allows crawl and points to sitemap. |
| `/sitemap.xml` | Discovery file | Utility only | N/A | N/A | Includes only indexable public routes and currently published articles. |
| `/llms.txt` | AI/GEO discovery | Utility only | No page entry | N/A | Factual site summary for AI systems. |
| `/security.txt` and `/.well-known/security.txt` | Security disclosure | Utility only | No page entry | N/A | Public security contact and canonical. |
| `/api/contact` | Contact API route | No | No | N/A | API endpoint only. |
| `/api/script.js` and `/api/track` | Rybbit analytics proxy | No | No | N/A | Utility proxy routes for analytics detection and privacy. |

## Content Rules

- Keep scheduled articles out of the sitemap and public route output until `publishAt` or `publishDate` has passed.
- Do not add Product JSON-LD to affiliate checklist pages unless the page visibly displays current offer, rating, review, price, and availability data.
- Use Article, CollectionPage, WebPage, FAQPage, ItemList, and BreadcrumbList schema to clarify content truthfully.
- Keep safety language conservative: Safer Kids helps parents compare safety factors, but it does not provide medical, legal, engineering, or pediatric advice.

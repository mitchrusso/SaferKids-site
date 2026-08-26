import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { getTopicHubBySlug, topicHubs } from "@/lib/hubs";
import { getArticleBySlug, isArticlePublished, type ResourceArticle } from "@/lib/resources";
import { getReviewProductBySlug, type ReviewProduct } from "@/lib/reviews";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

export const dynamic = "force-dynamic";

type HubPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return topicHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: HubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getTopicHubBySlug(slug);

  if (!hub) {
    return {
      title: "Resource Topic Not Found",
    };
  }

  return {
    title: hub.title,
    description: hub.description,
    alternates: {
      canonical: `/resources/topics/${hub.slug}`,
    },
    openGraph: {
      title: `${hub.title} | ${siteName}`,
      description: hub.description,
      url: absoluteUrl(`/resources/topics/${hub.slug}`),
      images: [
        {
          url: absoluteUrl(hub.image),
          alt: `${hub.title} guide image`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${hub.title} | ${siteName}`,
      description: hub.description,
      images: [absoluteUrl(hub.image)],
    },
  };
}

export default async function HubPage({ params }: HubPageProps) {
  const { slug } = await params;
  const hub = getTopicHubBySlug(slug);

  if (!hub) {
    notFound();
  }

  const relatedArticles = hub.relatedArticleSlugs
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((article): article is ResourceArticle => Boolean(article && isArticlePublished(article)));
  const featuredProducts = (hub.featuredProductSlugs ?? [])
    .map((productSlug) => getReviewProductBySlug(productSlug))
    .filter((product): product is ReviewProduct => Boolean(product));
  const hubUrl = absoluteUrl(`/resources/topics/${hub.slug}`);
  const hubJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${hubUrl}#webpage`,
        url: hubUrl,
        name: hub.title,
        description: hub.description,
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        about: hub.keywords,
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${hubUrl}#related-articles`,
        name: `${hub.title} related Safer Kids resources`,
        itemListElement: relatedArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/resources/${article.slug}`),
          name: article.title,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: hub.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: absoluteUrl("/resources"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: hub.title,
            item: hubUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#18211f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(hubJsonLd)} />
      <header className="border-b border-[#dce5dc] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-5 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Safer Kids home">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#dff5eb] text-[#0e7a5f]">
              <ShieldCheck className="h-6 w-6" aria-hidden />
            </span>
            <span className="text-lg font-black tracking-tight">Safer Kids</span>
          </Link>
          <Link href="/resources" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#cbd8cf] bg-white px-4 py-2 text-sm font-black text-[#10231f] hover:border-[#0e7a5f]">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Resources
          </Link>
        </div>
      </header>

      <section className="bg-[#eef6ed]">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e7a5f]">{hub.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{hub.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[#40514b]">{hub.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hub.keywords.map((keyword) => (
                <span key={keyword} className="rounded-md bg-white px-3 py-2 text-xs font-bold text-[#40514b] shadow-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="flex h-[260px] items-center justify-center rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#dce5dc] sm:h-[300px] lg:h-[340px]">
            <Image src={hub.image} alt={`${hub.title} guide image`} width={520} height={520} className="h-full w-full object-contain" priority />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 lg:grid-cols-[1fr_280px] lg:items-start">
        <article className="rounded-lg border border-[#dce5dc] bg-white p-6 shadow-sm sm:p-8">
          {hub.sections.map((section) => (
            <section key={section.heading} className="border-b border-[#e6ece5] py-7 first:pt-0 last:border-b-0 last:pb-0">
              <h2 className="text-2xl font-black leading-tight">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#4c5d56]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {featuredProducts.length > 0 ? (
            <section className="mt-8 rounded-lg bg-[#eef6ed] p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#0e7a5f]">Featured Safety Picks</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">Start with products that match this safety problem.</h2>
                </div>
                <Link href="/#reviews" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#cbd8cf] bg-white px-4 py-2 text-sm font-black text-[#10231f] hover:border-[#0e7a5f]">
                  All safety picks
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#5d6d66]">
                We may earn a commission through Amazon links. Always verify current recalls, fit, installation instructions, age limits, and manufacturer guidance before use.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {featuredProducts.map((product) => (
                  <article key={product.slug} className="rounded-lg border border-[#dce5dc] bg-white p-4 shadow-sm">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-[#fbfcf8]">
                      <Image
                        src={product.image}
                        alt={`${product.name} category image`}
                        width={360}
                        height={270}
                        className="h-full w-full rounded-md object-cover"
                      />
                    </div>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-[#0e7a5f]">{product.bestFor}</p>
                    <h3 className="mt-2 text-lg font-black leading-tight">{product.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6d66]">{product.summary}</p>
                    <div className="mt-4 grid gap-2 text-sm font-bold text-[#40514b]">
                      {product.pros.slice(0, 2).map((pro) => (
                        <p key={pro} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#0e7a5f]" aria-hidden />
                          <span>{pro}</span>
                        </p>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      <Link href={`/reviews/${product.slug}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#cbd8cf] px-4 py-2 text-sm font-black hover:border-[#0e7a5f]">
                        Checklist
                      </Link>
                      <a
                        href={product.amazon}
                        target="_blank"
                        rel="sponsored nofollow noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#10231f] px-4 py-2 text-sm font-black text-white hover:bg-[#0e7a5f]"
                      >
                        Amazon
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-8 rounded-lg bg-[#eef6ed] p-5">
            <h2 className="text-2xl font-black">Frequently Asked Questions</h2>
            <div className="mt-5 grid gap-4">
              {hub.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-white p-4">
                  <h3 className="font-black">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5d6d66]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="rounded-lg border border-[#dce5dc] bg-white p-5 shadow-sm">
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-[#0e7a5f]">Related Reading</h2>
          <div className="mt-4 grid gap-3">
            {relatedArticles.length > 0 ? (
              relatedArticles.map((article) => (
                <Link key={article.slug} href={`/resources/${article.slug}`} className="group rounded-lg border border-[#e6ece5] p-4 hover:border-[#0e7a5f]">
                  <p className="text-sm font-black leading-6 group-hover:text-[#0e7a5f]">{article.title}</p>
                  <p className="mt-2 text-xs leading-5 text-[#5d6d66]">{article.excerpt}</p>
                </Link>
              ))
            ) : (
              <p className="text-sm leading-7 text-[#5d6d66]">Related articles will appear here as they publish.</p>
            )}
          </div>
          <div className="mt-6 rounded-lg bg-[#fbfcf8] p-4">
            <h3 className="flex items-center gap-2 text-sm font-black">
              <CheckCircle2 className="h-4 w-4 text-[#0e7a5f]" aria-hidden />
              Buying note
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#5d6d66]">
              Verify fit, capacity, safety instructions, and return policies directly with the retailer or manufacturer before buying.
            </p>
          </div>
          <Link href="/" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0e7a5f]">
            Compare safety picks
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <div className="mt-5 border-t border-[#e6ece5] pt-5">
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#0e7a5f]">Trust Links</h3>
            <div className="mt-3 grid gap-2 text-sm font-bold text-[#40514b]">
              <Link href="/review-methodology" className="hover:text-[#0e7a5f]">Review Methodology</Link>
              <Link href="/editorial-policy" className="hover:text-[#0e7a5f]">Editorial Policy</Link>
              <Link href="/safety-disclaimer" className="hover:text-[#0e7a5f]">Safety Disclaimer</Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Baby, BadgeCheck, Bath, Car, Check, Home as HomeIcon, Menu, ShieldCheck, ShoppingBag, Sparkles, ToyBrick, X } from "lucide-react";
import { comparisonPages } from "@/lib/comparisons";
import { reviewProducts } from "@/lib/reviews";
import { siteFaqs } from "@/lib/trust";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

const navItems = [
  { href: "#reviews", label: "Safety Picks" },
  { href: "#rooms", label: "Rooms" },
  { href: "#compare", label: "Compare" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const roomGuides = [
  { title: "Nursery & Sleep", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/safe-sleep-products", copy: "Firm, flat sleep spaces, crib checks, fitted sheets, and what to avoid." },
  { title: "Car & Travel", image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/car-seat-safety", copy: "Car seats, stroller checks, travel routines, and fit-first buying guidance." },
  { title: "Home Childproofing", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/baby-proofing-checklist", copy: "Gates, anchors, outlets, cords, cabinet locks, windows, and water access." },
  { title: "Toys & Play", image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1200&q=80", href: "/resources/topics/safer-toys-by-age", copy: "Age labels, small parts, magnets, batteries, materials, and recall checks." },
];

const quickMatchCards = [
  { title: "I need to baby proof stairs", answer: "Start with hardware-mounted gate guidance.", href: "/reviews/hardware-mounted-baby-gate", icon: HomeIcon },
  { title: "I need a car seat plan", answer: "Compare fit, rear-facing limits, and installation.", href: "/resources/topics/car-seat-safety", icon: Car },
  { title: "I am setting up a nursery", answer: "Focus on firm, flat sleep and fewer add-ons.", href: "/resources/topics/safe-sleep-products", icon: Baby },
  { title: "I want safer toys", answer: "Check age grading, small parts, magnets, and batteries.", href: "/resources/topics/safer-toys-by-age", icon: ToyBrick },
];

const safetyRules = [
  "Check recall status before buying or accepting hand-me-down gear.",
  "Choose products by child age, size, behavior, and the exact room or vehicle.",
  "Read installation instructions before relying on any childproofing product.",
  "Avoid product claims that sound like supervision, medical, or safety guarantees.",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const topProducts = reviewProducts.slice(0, 6);
  const pageJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/#webpage"), name: `${siteName} | Safety-First Parent Shopping Guide`, description: "Safety-first shopping guides for childproofing, car seats, safe sleep, strollers, toys, bath safety, and emergency readiness.", url: absoluteUrl("/") },
      { "@type": "ItemList", "@id": absoluteUrl("/#safety-picks"), name: "Parent safety shopping categories", itemListElement: topProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: absoluteUrl(`/reviews/${product.slug}`), name: product.name })) },
      { "@type": "FAQPage", mainEntity: siteFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  }), [topProducts]);

  return (
    <main className="min-h-screen bg-[#f5f8f7] text-[#172427]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageJsonLd)} />
      <header className="sticky top-0 z-50 border-b border-[#d7e4df] bg-[#f5f8f7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="Safer Kids home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#2d8f7b] text-white"><ShieldCheck className="h-5 w-5" aria-hidden /></span>
            <span className="text-lg font-black tracking-tight">Safer Kids</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-[#53666a] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-[#1f7b68]">{item.label}</a>)}
          </nav>
          <a href="#reviews" className="hidden min-h-11 items-center gap-2 rounded-md bg-[#172427] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3e42] sm:inline-flex">
            <ShoppingBag className="h-4 w-4" aria-hidden /> Shop Safety Picks
          </a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#c8d9d3] bg-white text-[#172427] lg:hidden" aria-label="Open menu" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#d7e4df] bg-[#f5f8f7] px-5 py-4 lg:hidden">
            <nav className="grid gap-2 text-base font-black" aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md border border-[#d7e4df] bg-white px-4 py-3">{item.label}</a>)}
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="bg-[#eef7f2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-[#b9ded2] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1f7b68]"><Sparkles className="h-4 w-4" aria-hidden /> Safety-first parent shopping guide</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">Find the safer version of everything kids use.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53666a]">Safer Kids helps safety-aware parents compare childproofing products, car seats, strollers, sleep gear, toys, bath safety, and emergency essentials with recall-aware buying checklists.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#reviews" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#2d8f7b] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#227361]">Explore safety picks <ArrowRight className="h-4 w-4" aria-hidden /></a>
              <Link href="/resources/topics/baby-proofing-checklist" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#c8d9d3] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#172427] hover:border-[#2d8f7b]">Baby proofing guide <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Recall-aware shopping", "Safety sources linked", "Affiliate disclosure visible"].map((item) => (
                <div key={item} className="rounded-md border border-[#d7e4df] bg-white px-3 py-3 text-sm font-black text-[#405a55]">
                  <Check className="mb-2 h-4 w-4 text-[#2d8f7b]" aria-hidden />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center rounded-lg border border-[#d7e4df] bg-white p-5 shadow-sm sm:h-[360px] lg:h-[420px]">
            <Image src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80" alt="Bright child-safe nursery room" width={1200} height={760} className="h-full w-full rounded-md object-cover" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7e4df] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f7b68]">Quick Match</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">What are you trying to make safer?</h2>
            </div>
            <Link href="/faq" className="text-sm font-black text-[#2d8f7b] hover:text-[#1f7b68]">Read safety FAQ</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickMatchCards.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-lg border border-[#d7e4df] bg-[#f5f8f7] p-5 shadow-sm hover:border-[#2d8f7b]">
                <item.icon className="h-7 w-7 text-[#2d8f7b]" aria-hidden />
                <h3 className="mt-4 text-lg font-black leading-tight group-hover:text-[#1f7b68]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#53666a]">{item.answer}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#2d8f7b]">See checklist <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f7b68]">Safety Picks</p><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Parent shopping categories with safety checks.</h2></div>
          <Link href="/review-methodology" className="text-sm font-black text-[#2d8f7b] hover:text-[#1f7b68]">How we organize picks</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topProducts.map((product, index) => (
            <article key={product.slug} className="rounded-lg border border-[#d7e4df] bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3"><span className="rounded-md bg-[#e6f7f1] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#1f7b68]">#{index + 1} Safety Category</span><span className="text-xs font-bold text-[#6b7d80]">{product.category}</span></div>
              <div className="mt-4 flex h-56 items-center justify-center rounded-md bg-[#f5f8f7] p-2"><Image src={product.image} alt={product.name} width={520} height={390} className="h-full w-full rounded-md object-cover" /></div>
              <h3 className="mt-5 text-xl font-black leading-tight">{product.name}</h3>
              <p className="mt-2 text-sm font-black text-[#2d8f7b]">{product.bestFor}</p>
              <p className="mt-3 text-sm leading-6 text-[#53666a]">{product.summary}</p>
              <div className="mt-4 grid gap-2 text-sm text-[#53666a]">
                {product.pros.slice(0, 2).map((pro) => <p key={pro} className="flex gap-2"><Check className="mt-1 h-4 w-4 flex-none text-[#2d8f7b]" aria-hidden />{pro}</p>)}
              </div>
              <div className="mt-5 flex gap-2"><Link href={`/reviews/${product.slug}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-[#c8d9d3] px-4 py-2 text-sm font-black hover:border-[#2d8f7b]">Checklist</Link><a href={product.amazon} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-[#172427] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3e42]">Amazon</a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="rooms" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f7b68]">Room and routine guides</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Shop by the place safety decisions happen.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {roomGuides.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-lg border border-[#d7e4df] bg-[#f5f8f7] p-4 shadow-sm hover:border-[#2d8f7b]">
                <div className="flex h-44 items-center justify-center rounded-md bg-white">
                  <Image src={item.image} alt={`${item.title} safety guide`} width={600} height={380} className="h-full w-full rounded-md object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-black group-hover:text-[#1f7b68]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#53666a]">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.75fr_1fr]">
        <div className="rounded-lg bg-[#172427] p-7 text-white">
          <BadgeCheck className="h-8 w-8 text-[#9de4d1]" aria-hidden />
          <h2 className="mt-5 text-3xl font-black leading-tight">Safety-aware buying rules.</h2>
          <div className="mt-6 grid gap-4">
            {safetyRules.map((rule) => <p key={rule} className="flex gap-3 text-sm leading-6 text-[#e8f1ee]"><Check className="mt-1 h-4 w-4 flex-none text-[#9de4d1]" aria-hidden />{rule}</p>)}
          </div>
        </div>
        <div className="grid gap-4">
          {comparisonPages.map((comparison) => (
            <Link key={comparison.slug} href={`/compare/${comparison.slug}`} className="rounded-lg border border-[#d7e4df] bg-white p-5 shadow-sm hover:border-[#2d8f7b]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f7b68]">Comparison</p>
              <h3 className="mt-2 text-2xl font-black">{comparison.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#53666a]">{comparison.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e8f5ef] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {[{icon:ShieldCheck,title:"Recall-aware",copy:"Check CPSC recalls and manufacturer registration before relying on kid gear."},{icon:Baby,title:"Age and fit first",copy:"Match products to the child's age, size, behavior, and daily routine."},{icon:Bath,title:"Supervision remains",copy:"Safety products reduce specific hazards; they do not replace adult attention."}].map((item)=> <div key={item.title} className="rounded-lg border border-[#c7ded6] bg-white p-6"><item.icon className="h-7 w-7 text-[#2d8f7b]" aria-hidden /><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#53666a]">{item.copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f7b68]">FAQ</p>
        <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Common parent safety shopping questions.</h2>
        <div className="mt-8 grid gap-4">
          {siteFaqs.slice(0, 8).map((faq) => <details key={faq.question} className="rounded-lg border border-[#d7e4df] bg-white p-5"><summary className="cursor-pointer text-lg font-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-[#53666a]">{faq.answer}</p></details>)}
        </div>
        <Link href="/faq" className="mt-6 inline-flex min-h-11 items-center rounded-md border border-[#c8d9d3] bg-white px-4 py-2 text-sm font-black text-[#172427] hover:border-[#2d8f7b]">
          View full FAQ
        </Link>
      </section>

      <footer className="border-t border-[#d7e4df] bg-[#f5f8f7]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-[#2d8f7b] text-white"><ShieldCheck className="h-5 w-5" aria-hidden /></span><span className="text-lg font-black">Safer Kids</span></div><p className="mt-4 max-w-2xl text-sm leading-7 text-[#53666a]">Safer Kids is a participant in the Amazon Services LLC Associates Program. We may earn from qualifying purchases. Safety content is general shopping information; always follow official guidance and manufacturer instructions.</p></div>
            <div className="grid grid-cols-2 gap-3 text-sm font-bold text-[#53666a]">
              {[['Resources','/resources'],['FAQ','/faq'],['Contact Us','/contact'],['Editorial Policy','/editorial-policy'],['Review Methodology','/review-methodology'],['Safety Disclaimer','/safety-disclaimer'],['Privacy Policy','/privacy-policy'],['Cookie Policy','/cookie-policy'],['TOS','/terms-and-conditions'],['Accessibility','/accessibility-statement'],['Amazon Disclosure','/amazon-disclosure']].map(([label,href]) => <Link key={href} href={href} className="hover:text-[#1f7b68]">{label}</Link>)}
            </div>
          </div>
          <p className="mt-8 border-t border-[#d7e4df] pt-5 text-xs text-[#6b7d80]">Copyright 2026 Safer Kids.</p>
        </div>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Editorial Policy", description: "How Safer Kids creates, reviews, updates, and discloses child safety buying guides, reviews, and articles.", alternates: { canonical: "/editorial-policy" } };

const principles = ["Content is written for parents and caregivers who need practical safety-first buying information.", "We organize recommendations by child age, room, product category, and use case instead of pretending one product is safest for every family.", "We avoid fake ratings, invented prices, and unsupported safety claims.", "Affiliate relationships do not change the price a reader pays and are disclosed on the site."];

export default function EditorialPolicyPage() {
  return <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]"><article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12"><Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#a3421f]">Back to Safer Kids</Link><h1 className="mt-8 text-4xl font-black">Editorial Policy</h1><p className="mt-6 text-base leading-8 text-[#536166]">Safer Kids exists to make child safety shopping easier to understand. The site emphasizes age and fit, clear comparisons, recall-aware buying questions, and manufacturer verification.</p><ul className="mt-6 space-y-3">{principles.map((item) => <li key={item} className="rounded-lg border border-[#ddd5c7] bg-[#f3f4f6] p-4 text-base leading-7 text-[#536166]">{item}</li>)}</ul></article></main>;
}

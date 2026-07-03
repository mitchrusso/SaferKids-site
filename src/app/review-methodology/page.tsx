import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Review Methodology",
  description: "How Safer Kids organizes child safety reviews, buying guides, comparisons, and resource content.",
  alternates: { canonical: "/review-methodology" },
};

const criteria = [
  { title: "Age and fit", body: "Products are organized by the child age, size, room, and use case they are meant to support, because a well-made product can still be wrong for a specific child or home." },
  { title: "Installation and daily use", body: "We look for clear installation requirements, understandable instructions, maintenance needs, cleaning needs, and common misuse risks parents should check before buying." },
  { title: "Recall-aware shopping", body: "We encourage parents to check official recall resources and manufacturer registration options for categories such as car seats, strollers, cribs, gates, toys, and nursery products." },
  { title: "Safety and usability", body: "Stable construction, appropriate warnings, age labels, fit limits, non-toxic claims, small-parts risk, and caregiver usability are important buying considerations." },
  { title: "Buyer verification", body: "Readers are encouraged to confirm current price, specifications, availability, warranty, return policy, recalls, and safety instructions with the retailer or manufacturer." },
];

export default function ReviewMethodologyPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#a3421f]">Back to Safer Kids</Link>
        <h1 className="mt-8 text-4xl font-black">Review Methodology</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">Safer Kids reviews and organizes products through practical parent buying decisions: who the product is for, where it will be used, what safety checks matter, and what shoppers should verify before purchasing.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {criteria.map((item) => <section key={item.title} className="rounded-lg border border-[#ddd5c7] bg-[#f3f4f6] p-5"><h2 className="text-xl font-black">{item.title}</h2><p className="mt-3 text-base leading-8 text-[#536166]">{item.body}</p></section>)}
        </div>
      </article>
    </main>
  );
}

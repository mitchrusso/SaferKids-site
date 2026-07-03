import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Safer Kids, a safety-first shopping guide for parents and caregivers.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#18211f]">
      <article className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#0e7a5f]">
          Back to Safer Kids
        </Link>
        <h1 className="mt-8 text-4xl font-black">About Safer Kids</h1>
        <p className="mt-6 text-base leading-8 text-[#5d6d66]">
          Safer Kids helps parents compare childproofing products, safer toys, stroller features, car seat resources, nursery items, bath safety gear, and family emergency essentials.
        </p>
        <p className="mt-4 text-base leading-8 text-[#5d6d66]">
          The site was created for safety-aware families who want clear product-category guidance, recall-aware buying checklists, and plain-English next steps before making a purchase.
        </p>
      </article>
    </main>
  );
}

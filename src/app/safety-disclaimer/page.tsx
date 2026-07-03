import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Disclaimer",
  description: "Important safety disclaimer for Safer Kids buying guides, reviews, and resource articles.",
  alternates: { canonical: "/safety-disclaimer" },
};

export default function SafetyDisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#a3421f]">Back to Safer Kids</Link>
        <h1 className="mt-8 text-4xl font-black">Safety Disclaimer</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">Safer Kids provides general buying information about childproofing products, toys, strollers, car seats, nursery items, bath safety gear, and family safety products. It is not pediatric, medical, legal, installation, manufacturer, or professional safety advice.</p>
        <p className="mt-4 text-base leading-8 text-[#536166]">Children, homes, vehicles, and caregivers differ. A product that is appropriate for one family may be wrong for another if the child age, size, room layout, installation, supervision level, or use case does not match.</p>
        <p className="mt-4 text-base leading-8 text-[#536166]">Before purchase or use, verify product specifications, age ranges, fit limits, certifications, warnings, recalls, included parts, warranty, return policy, and compatibility directly with the retailer or manufacturer.</p>
      </article>
    </main>
  );
}

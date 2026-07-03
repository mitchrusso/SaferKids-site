export const siteUrl = "https://saferkids.com";
export const siteName = "Safer Kids";
export const defaultDescription =
  "Safety-first shopping guides for parents comparing safer baby gear, childproofing products, toys, strollers, car seats, and home safety essentials.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

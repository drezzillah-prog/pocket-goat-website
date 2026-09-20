import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const publicSite = process.env.NEXT_PUBLIC_SITE_ENV === "production";
  return publicSite
    ? { rules: { userAgent: "*", allow: "/" } }
    : { rules: { userAgent: "*", disallow: "/" } };
}

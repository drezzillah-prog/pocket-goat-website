import type { Metadata } from "next";
import Link from "next/link";
import { resolveLocale } from "@/lib/locale";
import { SiteHeader } from "@/components/SiteHeader";
import { Logo } from "@/components/Logo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const publicSite = process.env.NEXT_PUBLIC_SITE_ENV === "production";
  return {
    title: locale === "ro" ? "Pocket Goat · Cărți, ceai, cultură și quiet company" : "Pocket Goat · Books, tea, culture and quiet company",
    description: locale === "ro"
      ? "Pocket Goat este un café, tea room, refugiu cultural și spațiu de quiet company în Constanța."
      : "Pocket Goat is a café, tea room, cultural refuge and quiet-company space in Constanța.",
    robots: { index: publicSite, follow: publicSite }
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";
  return (
    <div className="site-shell">
      <SiteHeader locale={locale} />
      {children}
      <footer className="site-footer">
        <div className="footer-brand">
          <Logo />
          <p>Books · Tea · Stories · Culture · Quiet Company · Kindness</p>
        </div>
        <nav className="footer-links" aria-label={ro ? "Navigație subsol" : "Footer navigation"}>
          <Link href={`/${locale}/space`}>{ro ? "Spațiul" : "The Space"}</Link>
          <Link href={`/${locale}/events`}>{ro ? "Program" : "What’s On"}</Link>
          <Link href={`/${locale}/accessibility`}>{ro ? "Accesibilitate" : "Accessibility"}</Link>
          <Link href={`/${locale}/contact`}>{ro ? "Vizitează" : "Visit"}</Link>
        </nav>
        <div className="footer-place">
          <span>{ro ? "PRE-OPENING" : "PRE-OPENING"}</span>
          <div className="footer-note">Constanța · Dobrogea · Black Sea dusk</div>
        </div>
      </footer>
    </div>
  );
}

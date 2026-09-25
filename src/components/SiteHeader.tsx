import Link from "next/link";
import { Locale, copy } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LocaleSwitch } from "./LocaleSwitch";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <header className="site-header">
      <Link href={`/${locale}`} className="logo-link"><Logo /></Link>
      <nav className="main-nav" aria-label={locale === "ro" ? "Navigație principală" : "Main navigation"}>
        <Link href={`/${locale}/space`}>{t.nav.space}</Link>
        <Link href={`/${locale}/books`}>{t.nav.books}</Link>
        <Link href={`/${locale}/cafe`}>{t.nav.cafe}</Link>
        <Link href={`/${locale}/culture`}>{t.nav.culture}</Link>
        <Link href={`/${locale}/cinematic`}>{t.nav.cinematic}</Link>
        <Link href={`/${locale}/community`}>{t.nav.community}</Link>
        <Link href={`/${locale}/contact`}>{t.nav.visit}</Link>
      </nav>
      <div className="header-actions">
        <LocaleSwitch />
        <MobileMenu locale={locale} />
      </div>
    </header>
  );
}

import Link from "next/link";
import { Locale, copy } from "@/lib/i18n";

export function MobileMenu({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const base = `/${locale}`;
  return (
    <details className="mobile-menu">
      <summary aria-label={locale === "ro" ? "Deschide meniul" : "Open menu"}>
        <span>MENU</span><i aria-hidden="true" />
      </summary>
      <nav aria-label={locale === "ro" ? "Navigație mobilă" : "Mobile navigation"}>
        <Link href={`${base}/space`}>{t.nav.space}</Link>
        <Link href={`${base}/cafe`}>{t.nav.cafe}</Link>
        <Link href={`${base}/culture`}>{t.nav.culture}</Link>
        <Link href={`${base}/cinematic`}>{t.nav.cinematic}</Link>
        <Link href={`${base}/dobrogea`}>Dobrogea</Link>
        <Link href={`${base}/community`}>{t.nav.community}</Link>
        <Link href={`${base}/accessibility`}>Accessibility</Link>
        <Link href={`${base}/contact`}>{t.nav.visit}</Link>
      </nav>
    </details>
  );
}

import { resolveLocale } from "@/lib/locale";
import { SiteHeader } from "@/components/SiteHeader";
import { Logo } from "@/components/Logo";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  return (
    <div className="site-shell">
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <footer className="site-footer">
        <div><Logo /><p>Books · Tea · Stories · Culture · Quiet Company · Kindness</p></div>
        <div className="footer-note">Constanța · Dobrogea · Black Sea dusk</div>
      </footer>
    </div>
  );
}

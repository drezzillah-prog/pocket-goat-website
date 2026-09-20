import Link from "next/link";
export function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="section-link" href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LocaleSwitch() {
  const pathname = usePathname();
  const current = pathname.split("/")[1] === "en" ? "en" : "ro";
  const next = current === "ro" ? "en" : "ro";
  const localizedPath = /^\/(ro|en)(?=\/|$)/.test(pathname)
    ? pathname.replace(/^\/(ro|en)(?=\/|$)/, `/${next}`)
    : `/${next}`;

  return (
    <Link className="locale-switch" href={localizedPath} hrefLang={next} aria-label={next === "ro" ? "Schimbă limba în română" : "Switch language to English"}>
      {next.toUpperCase()}
    </Link>
  );
}

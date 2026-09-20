import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Pocket Goat", template: "%s · Pocket Goat" },
  description: "Books, tea, stories, culture, quiet company and kindness in Constanța."
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const locale = h.get("x-pocket-goat-locale") === "en" ? "en" : "ro";
  return <html lang={locale}><body>{children}</body></html>;
}

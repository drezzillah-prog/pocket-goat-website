import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/") return NextResponse.redirect(new URL("/ro", request.url));

  const locale = pathname.split("/")[1] === "en" ? "en" : "ro";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pocket-goat-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] };

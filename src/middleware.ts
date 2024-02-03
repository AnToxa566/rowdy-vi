import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { AppPath, CookieKey } from "@/common/enums";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(CookieKey.ACCESS_TOKEN)?.value;

  if (accessToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(AppPath.LOGIN, request.url));
}

export const config = {
  matcher: ["/admin"],
};

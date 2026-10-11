import { NextResponse } from "next/server";

import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

}

export const config = {
  matcher: ["/cartDetails/:path*", "/profile/:path*", "/category/:path*"],
};

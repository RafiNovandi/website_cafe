import { NextRequest } from "next/server";
import { updaeSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updaeSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|payment|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

import { NextRequest } from "next/server";
import { updaeSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updaeSession(request);
}

export const config = {
  matcher: ["/admin/:path*", "/order/:path*"],
};

import { NextResponse } from "next/server";
import { auth } from "@/_lib/auth";
// export default function middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }
export const middleware = auth;

export const config = {
  matcher: ["/profile"], //the code in our middleware only works for these routes.
};

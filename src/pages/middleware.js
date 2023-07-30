// import { NextResponse } from "next/server";

// export function middleware(request) {
// 	const path = request.nextUrl.pathname;

// 	// if paths are form /admin/* then isPrivatePath = true
// 	const isPrivatePath = path.startsWith("/admin");

// 	// Get the token from the request cookies
// 	const token = request.cookies;

// 	// If it's a private path and there's no token, redirect to the login page
// 	if (isPrivatePath && token != {}) {
// 		return NextResponse.redirect("/login");
// 	}

// 	// If it's a private path and there is a token, allow the request to continue
// 	if (isPrivatePath && token) {
// 		return NextResponse.next();
// 	}

// 	// If it's not a private path, allow the request to continue
// 	return NextResponse.next();
// }

// export const config = {
// 	// Add all the paths that need authentication here
// 	matcher: ["/admin/:path*"],
// };

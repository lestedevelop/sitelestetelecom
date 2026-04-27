import { NextResponse } from "next/server";
import { isRouteAllowed, siteLockConfig } from "@/lib/siteLockConfig";

function isStaticAsset(pathname = "") {
    return /\.[^/]+$/.test(pathname);
}

function isAllowedPath(pathname = "") {
    if (isRouteAllowed(pathname)) {
        return true;
    }

    if (
        pathname.startsWith("/_next/") ||
        pathname === "/favicon.ico" ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap.xml" ||
        isStaticAsset(pathname)
    ) {
        return true;
    }

    return false;
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const requestId = request.headers.get("x-request-id") || crypto.randomUUID();
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-request-id", requestId);

    if (siteLockConfig.enabled && !isAllowedPath(pathname)) {
        const redirectUrl = new URL(siteLockConfig.redirectPath, request.url);
        return NextResponse.redirect(redirectUrl);
    }

    const response = NextResponse.next({
        request: { headers: requestHeaders },
    });

    response.headers.set("x-request-id", requestId);
    return response;
}

export const config = {
    matcher: ["/:path*"],
};

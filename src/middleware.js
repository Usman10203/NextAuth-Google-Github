// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log("middleware executed");
    const { pathname } = request.nextUrl;

    // Check if the user is trying to access the signin route
    if (pathname === '/api/auth/signin') {
        // Redirect to the home page
        return NextResponse.redirect(new URL('/', request.url));
    }

    // // Allow the request to proceed if no redirect is needed
    // return NextResponse.next();
}

// Specify the routes where this middleware should run
export const config = {
    matcher: ['/api/auth/signin'], // Only apply middleware to this route
};

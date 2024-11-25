import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('token');
    if (cookie === undefined || '') {
        return NextResponse.rewrite(new URL('/auth/login', request.url));
    }
    try {
        return NextResponse.next();

    } catch (error) {
        return NextResponse.rewrite(new URL('/auth/login', request.url));
    }
} 

export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
}
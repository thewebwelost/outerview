import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization');
  const accessToken = auth?.split(' ')[1];
  if (!accessToken || accessToken !== 'undefined') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/app/:path*',
};

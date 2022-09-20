import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // console.log('req.headers', req.headers);
  // return NextResponse.next();
}

export const config = {
  matcher: '/app/:path*',
};

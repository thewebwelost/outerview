import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // check if user is logged in
  // then redirect or go forth
  // if (req.cookies.get('OuterviewAuthToken')) {
  //   const res = NextResponse.next();
  //   console.log('[res]', res);
  //   res.cookies.set('vercel', 'fast', { path: '/test' });
  //   NextResponse.redirect('http://localhost:8080/login');
  // } else {
  //   NextResponse.redirect('http://localhost:8080/login');
  // }
}

export const config = {
  matcher: '/app/:path*',
};

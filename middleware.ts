import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // middleware to protect Next routes

  // JWT IS HERE
  // console.log('[req.cookies]', req.cookies);
  const res = NextResponse.next();

  if (req.cookies.get('OuterviewAuthToken')) {
    const res = NextResponse.next();
    res.cookies.set('authorization', req.cookies.get('OuterviewAuthToken'), {
      path: '/',
    });
    res.cookies.set('jwt', req.cookies.get('jwt'), {
      path: '/',
    });
  } else {
    NextResponse.redirect('http://localhost:8080/login');
  }
}

export const config = {
  matcher: '/app/:path*',
};

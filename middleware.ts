import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('[REQUEST WENT THROUG MIDDLEWARE]');

  if (req.url.includes('/login')) {
    const authToken = req.cookies.get('OuterviewAuthToken');
    const refreshToken = req.cookies.get('jwt');

    authToken && sessionStorage.setItem('auth', authToken);
    refreshToken && sessionStorage.setItem('refresh', refreshToken);
  } else {
    NextResponse.redirect('http://localhost:3000/login');
  }
}

export const config = {
  matcher: '/app/:path*',
};

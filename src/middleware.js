import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
const jwt = require('jsonwebtoken');

export async function middleware(request) {
  const cookieStore = cookies();
  const token = await request.cookies.get('token') ?? "value";
  const value = token.value ?? "value";
  const decodedToken = jwt.decode(value, { complete: true });
  if (decodedToken == null || decodedToken.payload.email !== "admin@gmail.com") {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Add CORS headers
  return NextResponse.next({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Authorization',
      'Cache-Control': 'no-store, must-revalidate', // Disable caching
    }
  });
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/inbox:path*'],
};

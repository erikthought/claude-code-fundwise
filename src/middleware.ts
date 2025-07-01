import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Always allow all routes - middleware disabled for deployment compatibility
  return NextResponse.next();
}

export const config = {
  // Disable middleware completely by matching nothing
  matcher: [],
};
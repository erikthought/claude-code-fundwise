"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function ClerkClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if Clerk is properly configured
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const hasValidClerkKey = publishableKey && publishableKey.startsWith('pk_');

  // During SSR or before hydration, render without ClerkProvider
  if (!isMounted) {
    return <>{children}</>;
  }

  // If no valid Clerk key, render without ClerkProvider
  if (!hasValidClerkKey) {
    return <>{children}</>;
  }

  // After hydration with valid key, render with ClerkProvider
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}
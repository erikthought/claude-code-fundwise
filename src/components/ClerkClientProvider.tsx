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

  // During SSR or before hydration, render without ClerkProvider
  if (!isMounted) {
    return <>{children}</>;
  }

  // After hydration, render with ClerkProvider
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_placeholder'}
    >
      {children}
    </ClerkProvider>
  );
}
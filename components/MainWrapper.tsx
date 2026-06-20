'use client';

import { useAuth } from '@/hooks/use-auth';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <main className={`overflow-x-hidden ${user ? 'nb-padding-authed' : ''}`}>
      {children}
    </main>
  );
}

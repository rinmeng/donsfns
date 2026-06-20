'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Text } from '@/components/Text';
import { useAuth } from '@/hooks/use-auth';

export default function InvoicingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  return (
    <div className='mx-auto max-w-7xl px-4 nb-padding sm:px-6 lg:px-8'>
      <Text as='h1' variant='hd-xl'>
        Invoicing
      </Text>
      <Text variant='muted' className='mt-2'>
        Manage your invoices here.
      </Text>
    </div>
  );
}

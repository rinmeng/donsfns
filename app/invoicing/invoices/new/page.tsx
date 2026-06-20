import type { Client } from '@/types/database';
import { InvoiceForm } from '@/components/invoicing/InvoiceForm';
import { Text } from '@/components/Text';
import { createAdminClient } from '@/utils/supabase/server-admin';
import { Button } from '@/components/ui';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default async function NewInvoicePage() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from('clients')
    .select('*')
    .order('name', { ascending: true });

  const clients = (data ?? []) as Client[];

  return (
    <div>
      <Button variant='outline' size='sm' asChild className='mb-2 w-full lg:w-auto'>
        <Link href='/invoicing/invoices'>
          <ChevronLeft />
          Back to Invoices
        </Link>
      </Button>
      <div className='mx-auto max-w-4xl'>
        <Text as='h2' variant='hd-md' className='mb-6'>
          New Invoice
        </Text>
        <InvoiceForm clients={clients} />
      </div>
    </div>
  );
}

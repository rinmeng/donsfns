import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import type { LineItem } from '@/types/database';
import { createAdminClient } from '@/utils/supabase/server-admin';

async function getNextInvoiceNumber(
  supabase: ReturnType<typeof createAdminClient>
): Promise<string> {
  const year = new Date().getFullYear();
  const { data } = await supabase
    .from('invoices')
    .select('invoice_number')
    .like('invoice_number', `INV-${year}-%`)
    .order('invoice_number', { ascending: false })
    .limit(1);
  const last = (data as { invoice_number: string }[] | null)?.[0]?.invoice_number;
  const seq = last ? parseInt(last.split('-')[2] ?? '0') + 1 : 1;
  return `INV-${year}-${String(seq).padStart(3, '0')}`;
}

export async function GET() {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from('invoices')
    .select('*, clients(*)')
    .order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const supabase = createAdminClient();
  const invoice_number = await getNextInvoiceNumber(supabase);
  const { data: row, error } = await supabase
    .from('invoices')
    .insert({
      client_id: body.client_id,
      issue_date: body.issue_date,
      line_items: body.line_items as LineItem[],
      subtotal: body.subtotal,
      tax_rate: body.tax_rate,
      tax_amount: body.tax_amount,
      total: body.total,
      notes: body.notes ?? null,
      invoice_number,
    })
    .select('id')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  revalidatePath('/invoicing/invoices');
  return NextResponse.json({ id: (row as { id: string }).id }, { status: 201 });
}

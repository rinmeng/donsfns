import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import { createAdminClient } from '@/utils/supabase/server-admin';

export async function GET() {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from('clients').select('*').order('name');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const supabase = createAdminClient();
  const { error } = await supabase.from('clients').insert({
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    address: body.address ?? null,
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  revalidatePath('/invoicing/clients');
  return NextResponse.json({}, { status: 201 });
}

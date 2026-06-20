import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import { createAdminClient } from '@/utils/supabase/server-admin';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const supabase = createAdminClient();
  const { error } = await supabase
    .from('clients')
    .update({
      name: body.name,
      email: body.email,
      phone: body.phone ?? null,
      address: body.address ?? null,
    })
    .eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  revalidatePath('/invoicing/clients');
  return NextResponse.json({});
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { error } = await supabase.from('clients').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  revalidatePath('/invoicing/clients');
  return NextResponse.json({});
}

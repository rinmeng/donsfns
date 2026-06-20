import { NextRequest, NextResponse } from 'next/server';

import { createAdminClient } from '@/utils/supabase/server-admin';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await context.params;

  const pdfPath = request.nextUrl.searchParams.get('pdf_path');
  if (!pdfPath) {
    return NextResponse.json({ error: 'pdf_path query param required' }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase.storage
    .from('donsfns_invoices')
    .createSignedUrl(pdfPath, 3600);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ url: data.signedUrl });
}

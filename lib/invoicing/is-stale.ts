import type { Client, Invoice, InvoiceSnapshot, LineItem } from '@/types/database';

const cents = (n: number) => Math.round(n * 100);

const serializeItems = (items: LineItem[]) =>
  JSON.stringify(
    items.map((li) => ({
      description: li.description.trim(),
      quantity: li.quantity,
      rate: cents(li.rate),
      amount: cents(li.amount),
    }))
  );

export function computeIsStale(
  invoice: Invoice & { clients: Client },
  snapshot: InvoiceSnapshot | null
): boolean {
  if (invoice.status !== 'sent' || !snapshot) return false;
  return (
    cents(invoice.subtotal) !== cents(snapshot.subtotal) ||
    cents(invoice.tax_amount) !== cents(snapshot.tax_amount) ||
    cents(invoice.total) !== cents(snapshot.total) ||
    invoice.tax_rate !== snapshot.tax_rate ||
    invoice.issue_date !== snapshot.issue_date ||
    (invoice.notes ?? '') !== (snapshot.notes ?? '') ||
    invoice.clients.email !== snapshot.client.email ||
    serializeItems(invoice.line_items) !== serializeItems(snapshot.line_items)
  );
}

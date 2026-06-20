import type { LineItem } from '@/types/database';

interface SnapshotShape {
  line_items: LineItem[];
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  total: number;
}

export interface SnapshotDiff {
  changed: boolean;
  fields: string[];
}

export function diffSnapshot(current: SnapshotShape, snapshot: SnapshotShape): SnapshotDiff {
  const fields: string[] = [];
  const cents = (n: number) => Math.round(n * 100);

  if (cents(current.subtotal) !== cents(snapshot.subtotal)) fields.push('subtotal');
  if (cents(current.tax_amount) !== cents(snapshot.tax_amount)) fields.push('tax');
  if (cents(current.total) !== cents(snapshot.total)) fields.push('total');

  const serializeItems = (items: LineItem[]) =>
    JSON.stringify(
      items.map((li) => ({
        description: li.description.trim(),
        quantity: li.quantity,
        rate: cents(li.rate),
        amount: cents(li.amount),
      }))
    );

  if (serializeItems(current.line_items) !== serializeItems(snapshot.line_items))
    fields.push('line items');

  return { changed: fields.length > 0, fields };
}

'use client';

import { forwardRef } from 'react';

import { Input } from '@/components/ui/input';

export function formatPhone(raw: string): string {
  let d = raw.replace(/\D/g, '');
  // Strip leading country code if 11-digit number starting with 1
  if (d.length === 11 && d[0] === '1') d = d.slice(1);
  d = d.slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

type Props = Omit<React.ComponentProps<typeof Input>, 'onChange' | 'value'> & {
  value?: string;
  onChange?: (value: string) => void;
};

export const PhoneInput = forwardRef<HTMLInputElement, Props>(
  ({ value = '', onChange, ...props }, ref) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      onChange?.(formatPhone(e.target.value));
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key !== 'Backspace') return;
      const el = e.currentTarget;
      const pos = el.selectionStart ?? 0;
      // When cursor is right after a dash, skip it and delete the digit before it
      if (pos > 0 && value[pos - 1] === '-') {
        e.preventDefault();
        const next = formatPhone(value.slice(0, pos - 2) + value.slice(pos));
        onChange?.(next);
        requestAnimationFrame(() => el.setSelectionRange(pos - 2, pos - 2));
      }
    }

    return (
      <Input
        ref={ref}
        type='tel'
        inputMode='numeric'
        placeholder='XXX-XXX-XXXX'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={12}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

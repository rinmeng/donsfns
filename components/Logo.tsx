import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

export function Logo({ onClick, className }: LogoProps) {
  return (
    <Link href='/' className={cn('flex items-center gap-2', className)} onClick={onClick}>
      <Image
        src='/dons_fences_icon_1x1.svg'
        alt="Don's Fences & Services"
        width={36}
        height={36}
        className='h-9 w-9'
      />
      <span className='font-display hidden text-xl leading-none tracking-wide sm:block'>
        Don's Fences
      </span>
    </Link>
  );
}

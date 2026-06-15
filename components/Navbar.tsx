'use client';

import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { ModeToggle } from './ModeToggle';
import { Logo } from './Logo';
import { getDelayClass } from '@/utils/animations';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='fixed z-50 w-full border-b bg-background'>
      <div
        className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6
          lg:px-8'
      >
        <Logo
          className={`fade-in-from-right ${getDelayClass(1)}`}
          onClick={() => setOpen(false)}
        />

        <div className='hidden items-center gap-4 lg:flex'>
          {navLinks.map((link, index) => (
            <Button
              key={link.href}
              variant={pathname === link.href ? 'secondary' : 'ghost'}
              className={`fade-in-from-right ${getDelayClass(index + 2)}`}
              asChild
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button
            asChild
            className={`fade-in-from-right ${getDelayClass(navLinks.length + 2)}`}
          >
            <Link href='/contact'>
              Get a Quote <ArrowRight />
            </Link>
          </Button>
          <ModeToggle
            className={`fade-in-from-right ${getDelayClass(navLinks.length + 3)}`}
          />
        </div>

        <div className='lg:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                className={`fade-in-from-right ${getDelayClass(2)}`}
                size='icon'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-75 sm:w-100'>
              <SheetHeader>
                <SheetTitle>
                  <Logo onClick={() => setOpen(false)} />
                </SheetTitle>
              </SheetHeader>
              <div className='mt-6 flex flex-col items-center gap-4'>
                {navLinks.map((link, index) => (
                  <Button
                    key={link.href}
                    variant={pathname === link.href ? 'secondary' : 'ghost'}
                    className={`w-1/2 fade-in-from-right ${getDelayClass(index + 2)}`}
                    asChild
                  >
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
                <Button
                  asChild
                  className={`w-1/2 fade-in-from-right ${getDelayClass( navLinks.length +
                    2 )}`}
                >
                  <Link href='/contact' onClick={() => setOpen(false)}>
                    Get a Quote <ArrowRight />
                  </Link>
                </Button>
                <ModeToggle
                  className={`fade-in-from-right ${getDelayClass(navLinks.length + 3)}`}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

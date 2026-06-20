'use client';

import { ArrowRight, Receipt } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui';
import { LoginDialog } from './LoginDialog';
import { ModeToggle } from './ModeToggle';
import { Logo } from './Logo';
import { NavbarMobile } from './NavbarMobile';
import { useAuth } from '@/hooks/use-auth';
import { getDelayClass } from '@/utils/animations';
import { Text } from './Text';

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
  const { user } = useAuth();

  return (
    <nav className='fixed z-50 w-full border-b bg-background t200e'>
      <div className='mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8'>
        {/* Main row */}
        <div className='flex items-center justify-between py-4'>
          <Logo
            className={`fade-in-from-right ${getDelayClass(1)}`}
            onClick={() => setOpen(false)}
          />

          <div className='hidden items-center gap-4 lg:flex t200e'>
            {navLinks.map((link, index) => (
              <Button
                key={link.href}
                variant={pathname === link.href ? 'default' : 'outline'}
                className={`fade-in-from-right ${getDelayClass(index + 2)}`}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button
              asChild
              className={`bg-accent text-accent-foreground hover:bg-accent/90
                fade-in-from-right ${getDelayClass(navLinks.length + 2)}`}
            >
              <Link href='/contact'>
                Get a Quote <ArrowRight />
              </Link>
            </Button>
            <ModeToggle
              className={`fade-in-from-right ${getDelayClass(navLinks.length + 3)}`}
            />
            <div
              className={`h-5 w-px bg-border fade-in-from-right
                ${getDelayClass(navLinks.length + 3)}`}
            />
            <LoginDialog
              className={`fade-in-from-right ${getDelayClass(navLinks.length + 4)}`}
            />
          </div>

          <NavbarMobile open={open} onOpenChange={setOpen} />
        </div>

        {/* Invoicing row — desktop only, visible when logged in */}
        {user && (
          <div
            className='fade-in-from-bottom hidden border-t py-2 lg:flex justify-center
              gap-2 items-center flex-col'
          >
            <Text variant='default' size='sm'>
              Welcome, <span className='font-bold'>Don</span>. What would you like to do
              today?
            </Text>
            <Button
              variant={pathname === '/invoicing' ? 'default' : 'outline'}
              size='sm'
              asChild
            >
              <Link href='/invoicing'>
                <Receipt className='h-4 w-4' />
                Invoicing
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

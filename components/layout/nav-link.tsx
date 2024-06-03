'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
        href === pathname ? 'bg-muted text-primary' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;

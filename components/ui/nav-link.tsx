'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import type { Route } from '@/app/routes';

type Props = {
  route: Route;
  children: React.ReactNode;
};

const NavLink = ({ route, children }: Props) => {
  const pathname = usePathname();
  const href = route === 'dashboard' ? '/' : `/${route}`;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'flex capitalize items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
          href === pathname ? 'bg-muted text-primary' : 'text-muted-foreground'
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;

import Link from 'next/link';
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import NavLink from './nav-link';
import SidenavFooter from './sidenav-footer';

function Sidenav() {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span className=''>Fendi Inc</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1 border border-yellow-500'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <NavLink href='/'>
              <Home className='h-4 w-4' />
              Dashboard
            </NavLink>
            <NavLink href='/orders'>
              <ShoppingCart className='h-4 w-4' />
              Orders
            </NavLink>
            <NavLink href='/products'>
              <Package className='h-4 w-4' />
              Products
            </NavLink>
            <NavLink href='/customers'>
              <Users className='h-4 w-4' />
              Customers
            </NavLink>
            <NavLink href='/analytics'>
              <LineChart className='h-4 w-4' />
              Analytics
            </NavLink>
          </nav>
        </div>
        <SidenavFooter />
      </div>
    </div>
  );
}

export default Sidenav;

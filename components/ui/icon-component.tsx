import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react';

import type { Route } from '@/app/routes';

type Props = {
  route: Route;
};

const IconComponent = ({ route }: Props) => {
  switch (route) {
    case 'dashboard':
      return <Home className='h-4 w-4' />;
    case 'orders':
      return <ShoppingCart className='h-4 w-4' />;
    case 'products':
      return <Package className='h-4 w-4' />;
    case 'customers':
      return <Users className='h-4 w-4' />;
    case 'analytics':
      return <LineChart className='h-4 w-4' />;
    default:
      break;
  }
};

export default IconComponent;

export const routes = {
  dashboard: 'dashboard',
  orders: 'orders',
  products: 'products',
  customers: 'customers',
  analytics: 'analytics',
} as const;

export type Route = (typeof routes)[keyof typeof routes];

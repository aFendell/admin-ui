import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import UserActivityChart from './user-activity-chart';
import { Suspense } from 'react';

import type { UserActivity } from '../data/userActivity';

const getUserActivity = async () => {
  const res = await fetch('http://localhost:3000/api/analytics');
  if (!res.ok) throw new Error('Faild to fetch data');

  const data: UserActivity = await res.json();

  return data;
};

const Analytics = async () => {
  const userActivity = await getUserActivity();

  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Active Users</CardDescription>
      </CardHeader>
      <CardContent className='pt-6 h-80 w-full'>
        <Suspense fallback={<p>Loading activity...</p>}>
          <UserActivityChart userActivity={userActivity} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default Analytics;

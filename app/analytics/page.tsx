import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import UserActivityChart from './user-activity-chart';
import { Suspense } from 'react';

const Analytics = () => {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Active Users</CardDescription>
      </CardHeader>
      <CardContent className='pt-6 h-80 w-full'>
        <Suspense fallback={<h2>Loading activity...</h2>}>
          <UserActivityChart />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default Analytics;

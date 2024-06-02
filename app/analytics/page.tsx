'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const userActivity = [
  {
    date: '6d ago',
    activeUsers: 120,
  },
  {
    date: '5d ago',
    activeUsers: 200,
  },
  {
    date: '4d ago',
    activeUsers: 150,
  },
  {
    date: '3d ago',
    activeUsers: 135,
  },
  {
    date: '2d ago',
    activeUsers: 180,
  },
  {
    date: '1d ago',
    activeUsers: 220,
  },
  {
    date: 'today',
    activeUsers: 240,
  },
];

function Analytics() {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Active Users</CardDescription>
      </CardHeader>
      <CardContent className='pt-6 h-80 w-full'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarChart width={64} height={64} data={userActivity}>
            <Tooltip />
            <XAxis dataKey='date' />
            <YAxis dataKey='activeUsers' />
            <Bar dataKey='activeUsers' fill='#940cfd' />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default Analytics;

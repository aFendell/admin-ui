'use client';

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { UserActivity } from '../data/userActivity';

function UserActivityChart({ userActivity }: { userActivity: UserActivity }) {
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart width={64} height={64} data={userActivity}>
        <Tooltip />
        <XAxis dataKey='date' />
        <YAxis dataKey='activeUsers' />
        <Bar dataKey='activeUsers' fill='#940cfd' />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default UserActivityChart;

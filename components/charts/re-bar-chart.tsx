'use client';

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Props = {
  data: any[] | undefined;
  size?: number;
  fill?: string;
};
const ReBarChart = ({ data, size = 64, fill = '#940cfd' }: Props) => {
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart width={size} height={size} data={data}>
        <Tooltip />
        <XAxis dataKey='date' />
        <YAxis dataKey='activeUsers' />
        <Bar dataKey='activeUsers' fill={fill} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReBarChart;

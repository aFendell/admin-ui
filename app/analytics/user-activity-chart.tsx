import type { UserActivity } from '../data/userActivity';
import ReBarChart from '@/components/charts/re-bar-chart';
import { fetchData } from '../api/utils';

const UserActivityChart = async () => {
  const { data, errorMessage } = await fetchData<UserActivity>(
    'http://localhost:3000/api/analytics'
  );

  if (errorMessage) {
    return <div>There was an error: {errorMessage}</div>;
  }

  return <ReBarChart data={data} />;
};

export default UserActivityChart;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Dashboard = () => {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Dashbaord</CardTitle>
        <CardDescription>Recent dashboard updates</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default Dashboard;

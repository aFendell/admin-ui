import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Dashboard() {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Dashbaord</CardTitle>
        <CardDescription>Recent dashboard updates</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

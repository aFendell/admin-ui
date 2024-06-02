import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Customers() {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Customers</CardTitle>
        <CardDescription>Customers updates</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

export default Customers;

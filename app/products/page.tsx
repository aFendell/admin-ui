import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Products = () => {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Products</CardTitle>
        <CardDescription>Products updates</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default Products;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

const SidenavFooter = () => {
  return (
    <div className='mt-auto p-4 border border-pink-500'>
      <Card x-chunk='dashboard-02-chunk-0'>
        <CardHeader className='p-2 pt-0 md:p-4'>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
          <Button size='sm' className='w-full'>
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SidenavFooter;

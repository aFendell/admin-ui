import { userActivity } from '@/app/data/userActivity';

export async function GET() {
  return Response.json(userActivity);
}

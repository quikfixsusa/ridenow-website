import { DeleteUserPage } from '@/features/delete-user';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Account | RideNow',
  description: 'Permanently delete your RideNow account.',
};

export default function Page() {
  return <DeleteUserPage />;
}

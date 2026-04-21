import { ServicesPage } from '@/features/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios | RideNow',
  description: 'Descubre nuestros servicios de movilidad y logística urbana.',
};

export default function Page() {
  return <ServicesPage />;
}

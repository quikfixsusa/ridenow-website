import { AboutUsPage } from '@/features/about-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | RideNow',
  description: 'Conoce más sobre RideNow, nuestra misión de movilidad urbana y servicios de transporte compartido, paquetes y carga.',
};

export default function Page() {
  return <AboutUsPage />;
}

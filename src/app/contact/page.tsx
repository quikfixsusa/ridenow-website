import { ContactPage } from '@/features/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RideNow',
  description: 'Have questions or need assistance? Our team is here to help you 24/7. Get in touch with RideNow for any inquiries about our services.',
};

export default function Page() {
  return <ContactPage />;
}

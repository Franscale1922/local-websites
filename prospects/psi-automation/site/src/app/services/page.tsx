import { redirect } from 'next/navigation';

/**
 * /services — redirect to custom-solutions (PSI's "services" = custom motor engineering)
 * This page exists from the base template but PSI uses custom-solutions instead.
 */
export default function ServicesPage() {
  redirect('/custom-solutions');
}

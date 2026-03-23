import { redirect } from 'next/navigation';

/**
 * /services/[slug] — redirect to /custom-solutions
 * Template leftover — PSI does not use this routing pattern.
 */
export default function ServiceDetailPage() {
  redirect('/custom-solutions');
}

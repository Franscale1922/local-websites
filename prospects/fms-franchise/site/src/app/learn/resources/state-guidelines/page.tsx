// Route alias: /learn/resources/state-guidelines → /learn/state-guidelines
import { redirect } from 'next/navigation';

export default function StateGuidelinesRedirect() {
  redirect('/learn/state-guidelines');
}

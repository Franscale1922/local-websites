// Route alias: /learn/industry-facts → /learn/franchise-industry-facts
import { redirect } from 'next/navigation';

export default function IndustryFactsRedirect() {
  redirect('/learn/franchise-industry-facts');
}

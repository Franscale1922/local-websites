// Route alias: /learn/faqs → /learn/faq
import { redirect } from 'next/navigation';

export default function FAQsRedirect() {
  redirect('/learn/faq');
}

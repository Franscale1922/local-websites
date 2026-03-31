// Route alias: /learn/resources/franchising-guidelines → forwards to existing guidelines
import { redirect } from 'next/navigation';

export default function FranchisingGuidelinesRedirect() {
  redirect('/learn/resources');
}

// Route alias: /about → /about-us (canonical About page)
import { redirect } from 'next/navigation';

export default function AboutRedirect() {
  redirect('/about-us');
}

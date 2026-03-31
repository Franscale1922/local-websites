// Route alias: /about-us/blog → /blog
import { redirect } from 'next/navigation';

export default function AboutBlogRedirect() {
  redirect('/blog');
}

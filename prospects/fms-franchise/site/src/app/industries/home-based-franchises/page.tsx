// Route alias: /industries/home-based-franchises → /industries/home-based
import { redirect } from 'next/navigation';

export default function HomeBasedFranchisesRedirect() {
  redirect('/industries/home-based');
}

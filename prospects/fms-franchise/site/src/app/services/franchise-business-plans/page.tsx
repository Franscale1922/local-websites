// Route alias: /services/franchise-business-plans → /services/franchise-business-plan
import { redirect } from 'next/navigation';

export default function FranchiseBusinessPlansRedirect() {
  redirect('/services/franchise-business-plan');
}

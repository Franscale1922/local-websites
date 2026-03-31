// Route alias: /services/marketing-your-franchise → /services
import { redirect } from 'next/navigation';

export default function MarketingYourFranchiseRedirect() {
  redirect('/services');
}

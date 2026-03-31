import type { Metadata } from 'next';
import FeasibilityClient from './FeasibilityClient';

export const metadata: Metadata = {
  title: 'FREE Franchise Feasibility Questionnaire | FMS Franchise',
  description: 'FMS provides a free franchise feasibility questionnaire to help business owners understand whether they can franchise their business effectively. Takes only 5 minutes.',
  openGraph: {
    title: 'FREE Franchise Feasibility Questionnaire | FMS Franchise',
    description: 'Take our free 5-minute franchise feasibility questionnaire and find out if your business is ready to franchise.',
  },
};

export default function FeasibilityQuestionnairePage() {
  return <FeasibilityClient />;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franchise Readiness Assessment — Get Your Score in 5 Minutes | FMS',
  description: 'Take the free FMS Franchise Readiness Assessment: 10 questions, instant personalized score. Find out whether your business is ready to franchise — and what to do next.',
};

export default function FranchiseReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

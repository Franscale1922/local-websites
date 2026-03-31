import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franchise ROI Calculator — Model Your 5-Year Franchisor Revenue | FMS',
  description: 'Use the free FMS Franchise ROI Calculator to estimate your 5-year franchisor revenue. Model franchise fees, royalties, and unit growth projections across different scenarios.',
};

export default function ROICalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { ReactNode } from 'react';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh?: () => Promise<void>;
}

export default function PullToRefresh({ children, onRefresh }: PullToRefreshProps) {
  // Simple wrapper component - pull to refresh functionality can be added later
  return <>{children}</>;
}

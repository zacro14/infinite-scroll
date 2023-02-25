import React from 'react';

export function MainPage({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl m-10">{children}</div>;
}

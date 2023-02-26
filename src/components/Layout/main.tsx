import React from 'react';

export function MainPage({ children }: { children: React.ReactNode }) {
  return <div className="m-10 max-w-full">{children}</div>;
}

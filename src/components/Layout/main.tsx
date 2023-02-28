import React from 'react';
import Footer from '../Footer';
import { Header } from '../Header';

export function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="m-10 max-w-full min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

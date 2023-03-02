import React from 'react';
import Footer from '../Footer';
import { Header } from '../Header';

export function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="m-10 max-w-full min-h-screen mx-40">{children}</main>
      <Footer />
    </>
  );
}

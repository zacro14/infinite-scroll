import React from 'react';

type content = {
  children: React.ReactNode;
};

export function Card({ children }: content) {
  return (
    <div className="bg-gray-100 container mx-auto p-5 rounded-md shadow-lg">
      {children}
    </div>
  );
}

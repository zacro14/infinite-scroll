import React from 'react';

type CardProps = {
  children: React.ReactNode;
  title: string;
};

export function Card(props: CardProps) {
  const { title, children } = props;
  return (
    <div className="mb-4 bg-gray-100 container mx-auto p-5 rounded-md shadow-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

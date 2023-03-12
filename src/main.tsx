import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './routes/error-page';
import Root from './routes/root';
import { Routes } from './constant';
import About from './routes/about';
import Ships from './routes/ships';
import Services from './routes/services';
import Launches from './routes/launches';
import ShipPage from './routes/ship-details';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: Routes.About.path,
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: Routes.Services.path,
    element: <Services />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Ships />,
        path: Routes.Ships.path,
      },
      {
        element: <Launches />,
        path: Routes.Launches.path,
      },
    ],
  },
  {
    element: <ShipPage />,
    path: Routes.Ship.path,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

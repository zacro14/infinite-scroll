import { MainPage } from '@/components/Layout';
import { Routes } from '@/constant';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      Services
      <Link to={Routes.Ships.path}>ships</Link>
      <Link to={Routes.Launches.path}>launches</Link>
      <Outlet />
    </div>
  );
};

export default Services;

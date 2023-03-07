import { Routes } from '@/constant';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <Outlet />
      Services
      <Link to={Routes.Ships.path}>ships</Link>
      <Link to={Routes.Launches.path}>launches</Link>
    </div>
  );
};

export default Services;

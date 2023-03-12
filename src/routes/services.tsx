import { MainPage } from '@/components/Layout';
import { Routes } from '@/constant';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <MainPage>
      <Link to={Routes.Ships.path}>ships</Link>
      <Link to={Routes.Launches.path}>launches</Link>
      <Outlet />
    </MainPage>
  );
};

export default Services;

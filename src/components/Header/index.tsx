import { Routes } from '@/constant';
import { Link, Outlet, Route } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar w-auto max-w-full mx-40">
      <div className="navbar-start">
        <h1 className="normal-case font-bold text-xl">SpaceXInfo.io</h1>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-2">
          <li>
            <a href={'/'}>Home</a>
          </li>
          <li tabIndex={0}>
            <span>
              <Link to={Routes.Services.path}>Services</Link>
            </span>
            <ul className="rounded-box bg-base-100 p-2 z-10">
              <li>
                <Link to={Routes.Ships.path}>Ships</Link>
              </li>
              <li>
                <Link to={Routes.Launches.path}>Launches</Link>
              </li>
              <li>
                <Link to={Routes.Launches.path}>Launchpads</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href={Routes.About.path}>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

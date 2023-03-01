import { Routes } from '@/constant';

export const Header = () => {
  return (
    <div className="navbar w-auto mx-10 max-w-full">
      <div className="navbar-start">
        <h1 className="normal-case font-bold text-xl">SpaceXInfo.io</h1>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-2">
          <li>
            <a href={'/'}>Home</a>
          </li>
          <li tabIndex={0}>
            <span>Services</span>
            <ul className="rounded-box bg-base-100 p-2">
              <li>
                <a href={Routes.Ships.path}>Ships</a>
              </li>
              <li>
                <a href={'/launches'}>Launches</a>
              </li>
              <li>
                <a href={'/launchpads'}>Launchpads</a>
              </li>
            </ul>
          </li>
          <li>
            <a href={Routes.About.path}>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

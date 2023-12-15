import { useLocation } from 'react-router-dom';
import { navLinksData } from '../../data/navigation-links-data';
import { Logo } from '../logo';
import { NavLink } from './nav-link';

export const Navbar = () => {
  const currentPathName = useLocation();
  return (
    <nav className='container flex justify-between py-5'>
      <Logo />
      <ul className='flex items-center gap-5'>
        {navLinksData.map((link, index) => (
          <NavLink
            key={index}
            url={link.url}
            title={link.title}
            currentUrl={currentPathName.pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

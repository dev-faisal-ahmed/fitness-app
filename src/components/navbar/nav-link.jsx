import { Link } from 'react-router-dom';

export const NavLink = ({ url, title, currentUrl }) => {
  console.log({ url, currentUrl });
  return (
    <Link
      to={url}
      className={`${
        currentUrl === url ? 'text-primary font-semibold' : 'text-white'
      }`}
    >
      {title}
    </Link>
  );
};

import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer';

export const RootLayout = () => {
  const router = useLocation();
  console.log(router.pathname);
  return (
    <main className='bg-background min-h-screen text-white'>
      {router.pathname !== '/' ? <Navbar /> : null}
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

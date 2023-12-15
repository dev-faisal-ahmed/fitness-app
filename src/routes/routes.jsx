import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layout/root-layout';
import { Home } from '../pages/home/home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: 'Gallery Page',
      },
      {
        path: '/trainer',
        element: 'Trainer Page',
      },
      {
        path: '/classes',
        element: 'Classes Page',
      },
    ],
  },
]);

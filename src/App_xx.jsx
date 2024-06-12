import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import LandingStatic_91 from './pages/open/page/LandingStatic_91';
import Landing_91 from './pages/open/page/Landing_91';

import GlobalStyles from './styles/GlobalStyles';

import {
  Account_xx,
  Bookings_xx,
  Cabins_xx,
  Dashboard_xx,
  Login_91,
  PageNotFound_xx,
  Settings_xx,
  NewUsers_xx,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing_91 />
  },
  {
    path: '/landing',
    element: <Landing_91 />
  },
  {
    path: '/login',
    element: <Login_91 />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <Dashboard_xx />,
      },
      {
        path: 'dashboard',
        element: <Dashboard_xx />,
      },
      {
        path: 'bookings',
        element: <Bookings_xx />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_xx />,
      },
      {
        path: 'cabins',
        element: <Cabins_xx />,
      },
      {
        path: 'users',
        element: <NewUsers_xx />,
      },
      {
        path: 'settings',
        element: <Settings_xx />,
      },
      {
        path: 'account',
        element: <Account_xx />,
      },
    ],
  },
]);

const App_xx = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_xx;

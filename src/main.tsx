import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { UserProvider } from './Contexts/UserProvider';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/v1/poke-app',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'main',
        children: [
          {
            path: 'user/:userId',
            element: <App />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);

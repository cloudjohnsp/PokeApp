import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './Contexts/UserProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './http/config/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);

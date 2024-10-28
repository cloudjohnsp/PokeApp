import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './Contexts/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './http/config/router';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);

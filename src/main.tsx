import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { StrictMode } from 'react';
import Auth from './Pages/Auth/Auth';
import { baseUrl } from './Helpers/Router';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './Contexts/AuthProvider';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={`${baseUrl}`} element={<Auth />} />
          <Route
            path={`${baseUrl}/user/:userId`}
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${baseUrl}/main/:userId`}
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);

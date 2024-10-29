import './index.css';
import App from './App';
import { StrictMode } from 'react';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Contexts/AuthProvider';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import { baseUrl } from './Helpers/Router';
import Register from './Pages/Register/Register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={`${baseUrl}/login`} element={<Login />} />
          <Route path={`${baseUrl}/register`} element={<Register />} />
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
  </StrictMode>
);

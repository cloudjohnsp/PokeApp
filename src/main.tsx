import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { StrictMode } from 'react';
import Auth from './Pages/Auth/Auth';
import { baseUrl } from './Helpers/Router';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './Contexts/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import TypeInfo from './Components/TypeInfo/TypeInfo';
import AppContainer from './Components/AppContainer/AppContainer';
import PokemonProvider from './Contexts/PokemonProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <PokemonProvider>
          <Routes>
            <Route path={`${baseUrl}`} element={<Auth />} />
            <Route path={`${baseUrl}/user/:userId`} element={<Profile />} />
            <Route path={`${baseUrl}/main`} element={<AppContainer />} />
            <Route path={`${baseUrl}/types/:typeId`} element={<TypeInfo />} />
          </Routes>
        </PokemonProvider>
      </AuthProvider>
    </Router>
    <ToastContainer />
  </StrictMode>
);

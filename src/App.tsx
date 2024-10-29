import { jwtDecode } from 'jwt-decode';
import { baseUrl } from './Helpers/Router';
import { useEffect, useState } from 'react';
import { TDecodedToken } from './types/types';
import { useNavigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import FilterMenu from './Components/Filter/FilterMenu';
import PokemonProvider from './Contexts/PokemonProvider';
import PokemonList from './Components/PokemonList/PokemonList';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  useEffect(() => {
    return () => {
      const sessionCookie = document.cookie;
      if (!sessionCookie) {
        navigate(`${baseUrl}/login`);
      } else {
        const currentTime = Date.now() / 1000;
        const decodedToken = jwtDecode<TDecodedToken>(sessionCookie);

        if (decodedToken) {
          if (decodedToken.exp < currentTime) {
            navigate(`${baseUrl}/login`);
          }
        }
      }
    };
  });

  return (
    <PokemonProvider>
      <Header />
      <Button
        btnOnClick={toggleFilters}
        btnClassName='toggle-filter-button'
        btnText={showFilters ? 'Hide Filters' : 'Show Filters'}
      />
      <div className={`filter-menu-container ${showFilters ? 'show' : 'hide'}`}>
        <FilterMenu />
      </div>
      <PokemonList />
    </PokemonProvider>
  );
}

export default App;

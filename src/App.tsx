import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import FilterMenu from './Components/Filter/FilterMenu';
import PokemonProvider from './Contexts/PokemonProvider';
import PokemonList from './Components/PokemonList/PokemonList';
import { useState } from 'react';

function App() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

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

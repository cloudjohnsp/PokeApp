import PokemonList from './Components/PokemonList/PokemonList';
import FilterMenu from './Components/Filter/FilterMenu';
import PokemonProvider from './Contexts/PokemonProvider';

function App() {
  return (
    <>
      <PokemonProvider>
        <FilterMenu />
        <PokemonList />
      </PokemonProvider>
    </>
  );
}

export default App;

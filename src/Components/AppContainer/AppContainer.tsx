import './AppContainer.scss';
import Header from '../Header/Header';
import PokemonList from '../PokemonList/PokemonList';
import FilterContainer from '../FilterContainer/FilterContainer';
import { TPokemonContext } from '../../types/types';
import { PokemonContext } from '../../Contexts/PokemonContext';
import { useContext } from 'react';
import TailSpinner from '../TailSpinner/TailSpinner';
import { tailSpinCenterStyle } from '../../styles';

function AppContainer() {
  const { filteredPokemons } = useContext<TPokemonContext>(PokemonContext);

  return (
    <>
      <Header />
      <FilterContainer />
      {filteredPokemons && filteredPokemons.length > 0 ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <TailSpinner wrapperStyle={tailSpinCenterStyle} />
      )}
    </>
  );
}

export default AppContainer;

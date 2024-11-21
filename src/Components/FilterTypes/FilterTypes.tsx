import './FilterTypes.scss';
import { useContext } from 'react';
import { gen1PokemonTypes } from '../../Helpers/Pokemons';
import { PokemonContext } from '../../Contexts/PokemonContext';
import TypeItem from '../TypeItem/TypeItem';

const FilterTypes = () => {
  const { handleTypeFilterChange, typeFilter } = useContext(PokemonContext);

  return (
    <div className='pokemon-filter-types'>
      {gen1PokemonTypes.map((type) => (
        <TypeItem
          key={type}
          type={type}
          typeFilter={typeFilter}
          onClickMethod={() => handleTypeFilterChange(type)}
        />
      ))}
    </div>
  );
};

export default FilterTypes;

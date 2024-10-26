import './FilterMenu.css';
import { useContext } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { gen1PokemonTypes } from '../../Helpers/Pokemons';
import { PokemonContext } from '../../Contexts/PokemonContext';

const FilterMenu = () => {
  const {
    nameFilter,
    typeFilter,
    resetFilters,
    handleTypeFilterChange,
    handleNameFilterChange,
  } = useContext(PokemonContext);
  return (
    <div className='pokemon-filter'>
      <Input
        typeInput='text'
        placeholderInput='Search By Name'
        valueInput={nameFilter}
        onChangeInputHandler={handleNameFilterChange}
        classNameInput='pokemon-filter-name'
      />
      <div className='pokemon-filter-types'>
        {gen1PokemonTypes.map((type) => (
          <div
            key={type}
            onClick={() => handleTypeFilterChange(type)}
            className={`pokemon-filter-item ${type} ${
              typeFilter === type ? 'active' : ''
            }`}
          >
            {type}
          </div>
        ))}
      </div>

      <Button
        btnOnClick={resetFilters}
        btnClassName='pokemon-filter-reset'
        btnText='Reset Filters'
      />
    </div>
  );
};

export default FilterMenu;

import './FilterMenu.scss';
import { useContext } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { PokemonContext } from '../../Contexts/PokemonContext';
import FilterTypes from '../FilterTypes/FilterTypes';

const FilterMenu = () => {
  const { nameFilter, resetFilters, handleNameFilterChange } =
    useContext(PokemonContext);
  return (
    <div className='pokemon-filter'>
      <Input
        typeInput='text'
        placeholderInput='Search By Name'
        valueInput={nameFilter}
        onChangeInputHandler={handleNameFilterChange}
        classNameInput='pokemon-filter-name'
      />

      <FilterTypes />

      <Button
        btnOnClick={resetFilters}
        btnClassName='pokemon-filter-reset-button'
        children='Reset Filters'
      />
    </div>
  );
};

export default FilterMenu;

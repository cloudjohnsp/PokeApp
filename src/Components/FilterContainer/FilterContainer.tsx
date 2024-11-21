import './FilterContainer.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import FilterMenu from '../Filter/FilterMenu';

const FilterContainer = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleFilters = (): void => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };
  return (
    <>
      <Button
        btnOnClick={toggleFilters}
        btnClassName='toggle-filter-button'
        children={showFilters ? 'Hide Filters' : 'Show Filters'}
      />
      <div className={`filter-menu-container ${showFilters ? 'show' : 'hide'}`}>
        <FilterMenu />
      </div>
    </>
  );
};

export default FilterContainer;

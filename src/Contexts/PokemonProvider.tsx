import { memo, useState } from 'react';
import pokemons from '../mocks/pokemon';
import { PokemonContext } from './PokemonContext';
import {
  ContextProviderProps,
  TPokemonContext,
  TPokemonData,
} from '../types/types';

const PokemonProvider = memo(({ children }: ContextProviderProps) => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');

  const handleNameFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNameFilter(e.target.value);
  };

  const handleTypeFilterChange = (type: string): void => {
    setTypeFilter((prevType) => (prevType === type ? '' : type));
  };

  const resetFilters = (): void => {
    setNameFilter('');
    setTypeFilter('');
  };

  const filteredPokemons: TPokemonData[] = pokemons.filter(
    (pokemon): boolean => {
      const matchesName: boolean = pokemon.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const matchesType: boolean = typeFilter
        ? pokemon.types.some((t) => t.type.name === typeFilter)
        : true;
      return matchesName && matchesType;
    }
  );

  const context: TPokemonContext = {
    nameFilter,
    typeFilter,
    resetFilters,
    filteredPokemons,
    handleNameFilterChange,
    handleTypeFilterChange,
  };

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
});

export default PokemonProvider;

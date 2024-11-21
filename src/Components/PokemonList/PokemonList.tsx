import './PokemonList.scss';
import PokemonItem from '../PokemonItem/PokemonItem';
import { TPokemonData } from '../../types/types';
import { memo } from 'react';

type PokemonListProps = {
  pokemons: TPokemonData[];
};

const PokemonList = memo(({ pokemons }: PokemonListProps) => {
  return (
    <div className='pokemon-list-container'>
      <div className='pokemon-list-grid'>
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
});

export default PokemonList;

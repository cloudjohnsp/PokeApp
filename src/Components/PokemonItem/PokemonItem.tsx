import './PokemonItem.scss';
import { memo } from 'react';
import { TPokemonData } from '../../types/types';
import { PokemonTypesId, spriteUrl } from '../../Helpers/Pokemons';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';

type PokemonItemProps = {
  pokemon: TPokemonData;
};

const PokemonItem = memo(({ pokemon }: PokemonItemProps) => {
  const { id, name } = pokemon;

  return (
    <div className='pokemon-item'>
      <img className='pokemon-item-img' src={spriteUrl(id)} alt={name} />
      <div className='pokemon-item-data'>
        <div className='pokemon-item-data-number'>{`Nº${id}`}</div>
        <div className='pokemon-item-data-name'>{name}</div>
        <div className='pokemon-item-data-types'>
          {pokemon.types.map(({ type: { name } }) => (
            <Link
              key={name}
              to={`${baseUrl}/types/${
                PokemonTypesId[name as keyof typeof PokemonTypesId]
              }`}
            >
              <div className={`${name} pokemon-item-data-types-type`}>
                {name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default PokemonItem;

import './PokemonItem.scss';
import { memo, useState } from 'react';
import { TPokemonData } from '../../types/types';
import HeartIconRed from '../../assets/heart-svgrepo-com-red.svg';
import HeartIconWhite from '../../assets/heart-svgrepo-com-white.svg';
import { PokemonTypesId, spriteUrl } from '../../Helpers/Pokemons';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';

type PokemonItemProps = {
  pokemon: TPokemonData;
};

const PokemonItem = memo(({ pokemon }: PokemonItemProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { id, name } = pokemon;

  return (
    <div className='pokemon-item'>
      <div className='pokemon-item-favorite-wrapper'>
        <img
          className='pokemon-item-favorite-icon'
          src={isFavorite ? HeartIconRed : HeartIconWhite}
          alt='favorite'
          onClick={() => setIsFavorite((prevState) => !prevState)}
        />
      </div>
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

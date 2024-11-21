import { memo } from 'react';
import { TPokemonTypeItem } from '../../types/types';
import TypeItem from '../TypeItem/TypeItem';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';
import { PokemonTypesId } from '../../Helpers/Pokemons';

type TypeContainerProps = {
  dataArray: TPokemonTypeItem[];
};

const TypeContainer = memo(({ dataArray }: TypeContainerProps) => {
  return (
    <div className='type-container'>
      {dataArray.length <= 0 ? (
        <div>Empty</div>
      ) : (
        dataArray.map(({ name }) => (
          <Link
            key={name}
            to={`${baseUrl}/types/${
              PokemonTypesId[name as keyof typeof PokemonTypesId]
            }`}
          >
            <TypeItem type={name} />
          </Link>
        ))
      )}
    </div>
  );
});

export default TypeContainer;

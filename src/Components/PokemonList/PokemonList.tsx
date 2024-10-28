import './PokemonList.css';
import { spriteUrl } from '../../Helpers/Pokemons';
import { useContext } from 'react';
import { PokemonContext } from '../../Contexts/PokemonContext';
import TailSpinner from '../TailSpinner/TailSpinner';

const PokemonList = () => {
  const { filteredPokemons } = useContext(PokemonContext);
  const renderPokemonList = () => {
    return (
      <div className='pokemon-list-container'>
        <div className='pokemon-grid'>
          {filteredPokemons.map((pokemon) => (
            <div className='pokemon-item' key={pokemon.id}>
              <img
                className='pokemon-item-img'
                src={spriteUrl(pokemon.id)}
                alt={pokemon.name}
              />
              <div className='pokemon-item-data'>
                <div className='pokemon-item-data-number'>{`Nº${pokemon.id}`}</div>
                <div className='pokemon-item-data-name'>{pokemon.name}</div>
                <div className='pokemon-item-data-types'>
                  {pokemon.types.map((t) => (
                    <div
                      className={`${t.type.name} pokemon-item-data-types-type`}
                      key={t.type.name}
                    >
                      {t.type.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <>{filteredPokemons.length > 0 ? renderPokemonList() : <TailSpinner />}</>
  );
};

export default PokemonList;

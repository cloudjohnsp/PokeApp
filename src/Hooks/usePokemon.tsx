import { useEffect, useState } from 'react';
import { TPokemonData } from '../types/types';

const usePokemon = () => {
  const [pokemonData, setPokemonData] = useState<TPokemonData[]>([]);

  const pokemonUrl = (id: number): string =>
    `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    const fetchPokemon = async (): Promise<void> => {
      const fetchedData: TPokemonData[] = [];

      for (let i = 1; i < 152; i += 1) {
        try {
          const response = await fetch(pokemonUrl(i));
          const { id, name, types }: TPokemonData = await response.json();
          fetchedData.push({ id, name, types });
        } catch (error) {
          console.error('Failed to fetch Pokémon:', error);
        }
      }

      setPokemonData(fetchedData);
    };

    fetchPokemon();
  }, []);

  return [pokemonData];
};

export default usePokemon;

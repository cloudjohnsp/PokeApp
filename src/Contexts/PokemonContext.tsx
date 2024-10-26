import { createContext } from 'react';
import { TPokemonContext } from '../types/types';

export const PokemonContext = createContext<TPokemonContext>(
  {} as TPokemonContext
);

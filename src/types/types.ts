import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TUser = {
  id: string;
  email: string;
  nickName: string;
  createdAt: Date;
  lastUpdatedAt: Date;
};

export type TAuthContext = {
  userData: TUser | undefined;
  setUserData: Dispatch<SetStateAction<TUser | undefined>>;
  signIn(email: string, password: string): Promise<string | never>;
};

export type TPokemonContext = {
  nameFilter: string;
  typeFilter: string;
  resetFilters(): void;
  handleTypeFilterChange(type: string): void;
  handleNameFilterChange(e: React.ChangeEvent<HTMLInputElement>): void;
  filteredPokemons: TPokemonData[];
};

export type TPokemonTypeItem = {
  name: string;
};
export type TPokemonTypeObject = {
  type: TPokemonTypeItem;
};

export type TPokemonData = {
  id: number;
  name: string;
  types: TPokemonTypeObject[];
};

export type TContextProviderProps = {
  children: ReactNode;
};

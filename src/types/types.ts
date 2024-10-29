import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TUser = {
  id: string;
  email: string;
  nickName: string;
  createdAt: Date;
  lastUpdatedAt: Date;
};

export type TAuthContext = {
  userData: TUser;
  setUserData: Dispatch<SetStateAction<TUser>>;
  signIn(email: string, password: string): Promise<TUser | null>;
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

export type TDecodedToken = {
  _id: string;
  email: string;
  iat: number;
  exp: number;
};

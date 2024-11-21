import { ReactNode } from 'react';

export type TUserInfo = {
  id: string;
  email: string;
  nickName: string;
  createdAt: Date | null;
  lastUpdatedAt: Date | null;
};

export type TAuthContext = {
  signUp(signUpData: TSignUpData): Promise<boolean | undefined>;
  signIn(
    email: string,
    password: string
  ): Promise<TUserInfo | null | undefined>;
  updateUser(id: string, nickName: string): Promise<boolean | undefined>;
};

export type TPokemonContext = {
  nameFilter: string;
  typeFilter: string;
  resetFilters(): void;
  handleTypeFilterChange(type: string): void;
  handleNameFilterChange(e: React.ChangeEvent<HTMLInputElement>): void;
  filteredPokemons: TPokemonData[];
};

export type TDamageRelations = {
  double_damage_from: TPokemonTypeItem[];
  double_damage_to: TPokemonTypeItem[];
  half_damage_from: TPokemonTypeItem[];
  half_damage_to: TPokemonTypeItem[];
  no_damage_from: TPokemonTypeItem[];
  no_damage_to: TPokemonTypeItem[];
};

export type TTypeRelations = {
  damage_relations: TDamageRelations;
};

export type TPokemonTypeItem = {
  name: string;
  url: string;
};

export type TTypeArray = {
  type: TPokemonTypeItem;
};

export type TPokemonData = {
  id: number;
  name: string;
  types: TTypeArray[];
};

export type ContextProviderProps = {
  children: ReactNode;
};

export type TDecodedToken = {
  _id: string;
  email: string;
  iat: number;
  exp: number;
};

export type TSignUpData = {
  nickName: string;
  email: string;
  password: string;
};

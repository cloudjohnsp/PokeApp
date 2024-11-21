export const spriteUrl = (pokemonId: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

export const gen1PokemonTypes = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
];

export enum PokemonTypesId {
  normal = 1,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  fire,
  water,
  grass,
  electric,
  psychic,
  ice,
  dragon,
}

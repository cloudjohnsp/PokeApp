const pokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    types: [
      { type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12' } },
      { type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4' } },
    ],
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 3,
    name: 'venusaur',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 4,
    name: 'charmander',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 5,
    name: 'charmeleon',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 6,
    name: 'charizard',
    types: [
      { type: { name: 'fire', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 7,
    name: 'squirtle',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 8,
    name: 'wartortle',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 9,
    name: 'blastoise',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 10,
    name: 'caterpie',
    types: [{ type: { name: 'bug', url: 'string' } }],
  },
  {
    id: 11,
    name: 'metapod',
    types: [{ type: { name: 'bug', url: 'string' } }],
  },
  {
    id: 12,
    name: 'butterfree',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 13,
    name: 'weedle',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 14,
    name: 'kakuna',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 15,
    name: 'beedrill',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 16,
    name: 'pidgey',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 17,
    name: 'pidgeotto',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 18,
    name: 'pidgeot',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 19,
    name: 'rattata',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 20,
    name: 'raticate',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 21,
    name: 'spearow',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 22,
    name: 'fearow',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 23,
    name: 'ekans',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 24,
    name: 'arbok',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 25,
    name: 'pikachu',
    types: [{ type: { name: 'electric', url: 'string' } }],
  },
  {
    id: 26,
    name: 'raichu',
    types: [{ type: { name: 'electric', url: 'string' } }],
  },
  {
    id: 27,
    name: 'sandshrew',
    types: [{ type: { name: 'ground', url: 'string' } }],
  },
  {
    id: 28,
    name: 'sandslash',
    types: [{ type: { name: 'ground', url: 'string' } }],
  },
  {
    id: 29,
    name: 'nidoran♀',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 30,
    name: 'nidorina',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 31,
    name: 'nidoqueen',
    types: [
      { type: { name: 'poison', url: 'string' } },
      { type: { name: 'ground', url: 'string' } },
    ],
  },
  {
    id: 32,
    name: 'nidoran♂',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 33,
    name: 'nidorino',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 34,
    name: 'nidoking',
    types: [
      { type: { name: 'poison', url: 'string' } },
      { type: { name: 'ground', url: 'string' } },
    ],
  },
  {
    id: 35,
    name: 'clefairy',
    types: [{ type: { name: 'fairy', url: 'string' } }],
  },
  {
    id: 36,
    name: 'clefable',
    types: [{ type: { name: 'fairy', url: 'string' } }],
  },
  {
    id: 37,
    name: 'vulpix',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 38,
    name: 'ninetales',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 39,
    name: 'jigglypuff',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'fairy', url: 'string' } },
    ],
  },
  {
    id: 40,
    name: 'wigglytuff',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'fairy', url: 'string' } },
    ],
  },
  {
    id: 41,
    name: 'zubat',
    types: [
      { type: { name: 'poison', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 42,
    name: 'golbat',
    types: [
      { type: { name: 'poison', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 43,
    name: 'oddish',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 44,
    name: 'gloom',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 45,
    name: 'vileplume',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 46,
    name: 'paras',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'grass', url: 'string' } },
    ],
  },
  {
    id: 47,
    name: 'parasect',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'grass', url: 'string' } },
    ],
  },
  {
    id: 48,
    name: 'venonat',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 49,
    name: 'venomoth',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 50,
    name: 'diglett',
    types: [{ type: { name: 'ground', url: 'string' } }],
  },
  {
    id: 51,
    name: 'dugtrio',
    types: [{ type: { name: 'ground', url: 'string' } }],
  },
  {
    id: 52,
    name: 'meowth',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 53,
    name: 'persian',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 54,
    name: 'psyduck',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 55,
    name: 'golduck',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 56,
    name: 'mankey',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 57,
    name: 'primeape',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 58,
    name: 'growlithe',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 59,
    name: 'arcanine',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 60,
    name: 'poliwag',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 61,
    name: 'poliwhirl',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 62,
    name: 'poliwrath',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'fighting', url: 'string' } },
    ],
  },
  {
    id: 63,
    name: 'abra',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
  {
    id: 64,
    name: 'kadabra',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
  {
    id: 65,
    name: 'alakazam',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
  {
    id: 66,
    name: 'machop',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 67,
    name: 'machoke',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 68,
    name: 'machamp',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 69,
    name: 'bellsprout',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 70,
    name: 'weepinbell',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 71,
    name: 'victreebel',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 72,
    name: 'tentacool',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 73,
    name: 'tentacruel',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 74,
    name: 'geodude',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'ground', url: 'string' } },
    ],
  },
  {
    id: 75,
    name: 'graveler',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'ground', url: 'string' } },
    ],
  },
  {
    id: 76,
    name: 'golem',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'ground', url: 'string' } },
    ],
  },
  {
    id: 77,
    name: 'ponyta',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 78,
    name: 'rapidash',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 79,
    name: 'slowpoke',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'psychic', url: 'string' } },
    ],
  },
  {
    id: 80,
    name: 'slowbro',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'psychic', url: 'string' } },
    ],
  },
  {
    id: 81,
    name: 'magnemite',
    types: [
      { type: { name: 'electric', url: 'string' } },
      { type: { name: 'steel', url: 'string' } },
    ],
  },
  {
    id: 82,
    name: 'magneton',
    types: [
      { type: { name: 'electric', url: 'string' } },
      { type: { name: 'steel', url: 'string' } },
    ],
  },
  {
    id: 83,
    name: 'farfetchd',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 84,
    name: 'doduo',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 85,
    name: 'dodrio',
    types: [
      { type: { name: 'normal', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  { id: 86, name: 'seel', types: [{ type: { name: 'water', url: 'string' } }] },
  {
    id: 87,
    name: 'dewgong',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'ice', url: 'string' } },
    ],
  },
  {
    id: 88,
    name: 'grimer',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  { id: 89, name: 'muk', types: [{ type: { name: 'poison', url: 'string' } }] },
  {
    id: 90,
    name: 'shellder',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 91,
    name: 'cloyster',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'ice', url: 'string' } },
    ],
  },
  {
    id: 92,
    name: 'gastly',
    types: [
      { type: { name: 'ghost', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 93,
    name: 'haunter',
    types: [
      { type: { name: 'ghost', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 94,
    name: 'gengar',
    types: [
      { type: { name: 'ghost', url: 'string' } },
      { type: { name: 'poison', url: 'string' } },
    ],
  },
  {
    id: 95,
    name: 'onix',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'ground', url: 'string' } },
    ],
  },
  {
    id: 96,
    name: 'drowzee',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
  {
    id: 97,
    name: 'hypno',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
  {
    id: 98,
    name: 'krabby',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 99,
    name: 'kingler',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 100,
    name: 'voltorb',
    types: [{ type: { name: 'electric', url: 'string' } }],
  },
  {
    id: 101,
    name: 'electrode',
    types: [{ type: { name: 'electric', url: 'string' } }],
  },
  {
    id: 102,
    name: 'exeggcute',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'psychic', url: 'string' } },
    ],
  },
  {
    id: 103,
    name: 'exeggutor',
    types: [
      { type: { name: 'grass', url: 'string' } },
      { type: { name: 'psychic', url: 'string' } },
    ],
  },
  {
    id: 104,
    name: 'cubone',
    types: [{ type: { name: 'ground', url: 'string' } }],
  },
  {
    id: 105,
    name: 'marowak',
    types: [{ type: { name: 'ground', url: 'string' } }],
  },
  {
    id: 106,
    name: 'hitmonlee',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 107,
    name: 'hitmonchan',
    types: [{ type: { name: 'fighting', url: 'string' } }],
  },
  {
    id: 108,
    name: 'lickitung',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 109,
    name: 'koffing',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 110,
    name: 'weezing',
    types: [{ type: { name: 'poison', url: 'string' } }],
  },
  {
    id: 111,
    name: 'rhyhorn',
    types: [
      { type: { name: 'ground', url: 'string' } },
      { type: { name: 'rock', url: 'string' } },
    ],
  },
  {
    id: 112,
    name: 'rhydon',
    types: [
      { type: { name: 'ground', url: 'string' } },
      { type: { name: 'rock', url: 'string' } },
    ],
  },
  {
    id: 113,
    name: 'chansey',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 114,
    name: 'tangela',
    types: [{ type: { name: 'grass', url: 'string' } }],
  },
  {
    id: 115,
    name: 'kangaskhan',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 116,
    name: 'horsea',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 117,
    name: 'seadra',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 118,
    name: 'goldeen',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 119,
    name: 'seaking',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 120,
    name: 'staryu',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 121,
    name: 'starmie',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'psychic', url: 'string' } },
    ],
  },
  {
    id: 122,
    name: 'mr.mime',
    types: [
      { type: { name: 'psychic', url: 'string' } },
      { type: { name: 'fairy', url: 'string' } },
    ],
  },
  {
    id: 123,
    name: 'scyther',
    types: [
      { type: { name: 'bug', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 124,
    name: 'jynx',
    types: [
      { type: { name: 'ice', url: 'string' } },
      { type: { name: 'psychic', url: 'string' } },
    ],
  },
  {
    id: 125,
    name: 'electabuzz',
    types: [{ type: { name: 'electric', url: 'string' } }],
  },
  {
    id: 126,
    name: 'magmar',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 127,
    name: 'pinsir',
    types: [{ type: { name: 'bug', url: 'string' } }],
  },
  {
    id: 128,
    name: 'tauros',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 129,
    name: 'magikarp',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 130,
    name: 'gyarados',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 131,
    name: 'lapras',
    types: [
      { type: { name: 'water', url: 'string' } },
      { type: { name: 'ice', url: 'string' } },
    ],
  },
  {
    id: 132,
    name: 'ditto',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 133,
    name: 'eevee',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 134,
    name: 'vaporeon',
    types: [{ type: { name: 'water', url: 'string' } }],
  },
  {
    id: 135,
    name: 'jolteon',
    types: [{ type: { name: 'electric', url: 'string' } }],
  },
  {
    id: 136,
    name: 'flareon',
    types: [{ type: { name: 'fire', url: 'string' } }],
  },
  {
    id: 137,
    name: 'porygon',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 138,
    name: 'omanyte',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'water', url: 'string' } },
    ],
  },
  {
    id: 139,
    name: 'omastar',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'water', url: 'string' } },
    ],
  },
  {
    id: 140,
    name: 'kabuto',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'water', url: 'string' } },
    ],
  },
  {
    id: 141,
    name: 'kabutops',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'water', url: 'string' } },
    ],
  },
  {
    id: 142,
    name: 'aerodactyl',
    types: [
      { type: { name: 'rock', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 143,
    name: 'snorlax',
    types: [{ type: { name: 'normal', url: 'string' } }],
  },
  {
    id: 144,
    name: 'articuno',
    types: [
      { type: { name: 'ice', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 145,
    name: 'zapdos',
    types: [
      { type: { name: 'electric', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 146,
    name: 'moltres',
    types: [
      { type: { name: 'fire', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 147,
    name: 'dratini',
    types: [{ type: { name: 'dragon', url: 'string' } }],
  },
  {
    id: 148,
    name: 'dragonair',
    types: [{ type: { name: 'dragon', url: 'string' } }],
  },
  {
    id: 149,
    name: 'dragonite',
    types: [
      { type: { name: 'dragon', url: 'string' } },
      { type: { name: 'flying', url: 'string' } },
    ],
  },
  {
    id: 150,
    name: 'mewtwo',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
  {
    id: 151,
    name: 'mew',
    types: [{ type: { name: 'psychic', url: 'string' } }],
  },
];

export default pokemons;

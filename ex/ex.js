const findPokemon = (list, { key, value }, { onSuccess, onError }) => {
  setTimeout(() => {
    const pokemon = list.find((pokemon) => pokemon[key] === value);
    pokemon ? onSuccess(pokemon) : onError({ msg: 'ERROR: Pokémon Not Found' });
  }, 2000);
};

const onSuccess = ({ name, type }) =>
  console.log(`Found Pokémon: ${name}, Type: ${type}`);
const onError = ({ msg }) => console.log(msg);

const pokemons = [
  {
    name: 'Pikachu',
    type: 'Electric',
  },
  {
    name: 'Charizard',
    type: 'Fire/Flying',
  },
];

// Cerca amb èxit
console.log('findPokemon success');
findPokemon(
  pokemons,
  { key: 'name', value: 'Pikachu' },
  { onSuccess, onError }
);

// Cerca amb error
console.log('findPokemon error');
findPokemon(
  pokemons,
  { key: 'name', value: 'Bulbasaur' },
  { onSuccess, onError }
);

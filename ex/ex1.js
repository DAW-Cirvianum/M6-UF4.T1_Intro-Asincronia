function findPokemon(list, { key, value }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pokemon = list.find((pokemon) => pokemon[key] === value);
      pokemon ? resolve(pokemon) : reject({ msg: 'ERROR: Pokémon Not Found' });
    }, 2000);
  });
}

const pokemons = [
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Charizard', type: 'Fire/Flying' },
];

// Cerca amb èxit
findPokemon(pokemons, { key: 'name', value: 'Pikachu' })
  .then((pokemon) =>
    console.log(`Found Pokémon: ${pokemon.name}, Type: ${pokemon.type}`)
  )
  .catch((error) => console.log(error.msg));

// Cerca amb error
findPokemon(pokemons, { key: 'name', value: 'Bulbasaur' })
  .then((pokemon) =>
    console.log(`Found Pokémon: ${pokemon.name}, Type: ${pokemon.type}`)
  )
  .catch((error) => console.log(error.msg));

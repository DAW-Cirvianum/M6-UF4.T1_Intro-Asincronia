const findPokemon = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pokemon = list.find((pokemon) => pokemon[key] === value);
      pokemon ? resolve(pokemon) : reject({ msg: 'ERROR: Pokémon Not Found' });
    }, 2000);
  });
};

const pokemons = [
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Charizard', type: 'Fire/Flying' },
];

async function searchPokemon() {
  try {
    const pokemon = await findPokemon(pokemons, {
      key: 'name',
      value: 'Pikachu',
    });
    const pokemon2 = await findPokemon(pokemons, {
      key: 'name',
      value: 'Pikach',
    });
    console.log(`Found Pokémon: ${pokemon.name}, Type: ${pokemon.type}`);
  } catch (error) {
    console.log(error.msg);
  }
}

searchPokemon();

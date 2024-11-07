const findPokemon = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pokemon = list.find((pokemon) => pokemon[key] === value);
      pokemon
        ? resolve(pokemon)
        : reject({ msg: 'ERROR: Pokémon Not Found', valor: value });
    }, 2000);
  });
};

const pokemons = [
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Charizard', type: 'Fire/Flying' },
];

//const searchAllPokemon = async ()=>{}
async function searchAllPokemon() {
  try {
    const result = await Promise.all([
      findPokemon(pokemons, { key: 'name', value: 'Pikachu' }),
      findPokemon(pokemons, { key: 'name', value: 'Charizard' }),
      findPokemon(pokemons, { key: 'name', value: 'basur' }),
      findPokemon(pokemons, { key: 'name', value: 'Bulbasur' }),
    ]);

    result.forEach(({ name, type }) => {
      console.log(`Found Pokémon: ${name}, Type: ${type}`);
    });
  } catch (error) {
    console.log(error.msg, error.valor);
  }
}

searchAllPokemon();

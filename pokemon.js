// Clase para representar una habilidad de Pokémon
class PokemonAbility {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
    }
}

// Clase para representar un Pokémon
class Pokemon {
    constructor(name, height, id, abilities) {
        this.name = name;
        this.height = height;
        this.id = id;
        this.abilities = abilities.map(ability => new PokemonAbility(ability.pokemon_v2_ability.name, ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect));
    }
}

// Clase para representar los datos del JSON
class PokemonData {
    constructor(pokemon) {
        this.pokemon = pokemon.map(pokeData => new Pokemon(pokeData.name, pokeData.height, pokeData.id, pokeData.pokemon_v2_pokemonabilities));
    }
}

// Instancia de la clase DataSource
const dataSource = new DataSource();

// Obtener los datos
const jsonData = dataSource.getData();

// Resto del código...


// Parsear los datos JSON
const pokemonData = new PokemonData(jsonData.data.pokemon);

// Ejemplo de uso:
pokemonData.pokemon.forEach(pokemon => {
    console.log(`Nombre: ${pokemon.name}`);
    console.log(`Altura: ${pokemon.height}`);
    console.log(`ID: ${pokemon.id}`);
    console.log('Habilidades:');
    pokemon.abilities.forEach(ability => {
        console.log(`- ${ability.name}: ${ability.effect}`);
    });
    console.log('---');
});

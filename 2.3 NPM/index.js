import generateStupidName from "sillyname";
import pokemon from "pokemon";
import { randomSuperhero } from "superheroes";

var sillyName = generateStupidName();
console.log("My name is Sethu and my silly name is " + sillyName);

var myPokemon = pokemon.random();
console.log(`I'm ${sillyName} and I chooooose ${myPokemon}`);

var heroName = randomSuperhero();
console.log(`Hero - ${heroName}`);


// var pokemons = pokemon.all();
// console.log(pokemons);
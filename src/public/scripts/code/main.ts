import {pokeApi} from "./api.js";
import {createCard} from "./card-model.js";

const pokedex = document.querySelector(".poke-index");
const offset = 0;
const limit = 20;

const loadPokemonsData = (offset:number, limit:number):void => {
    pokeApi.get(offset, limit).then((poke=[]) => {
        const cards = poke?.map((data:any) => createCard(data)).join("");

        if(pokedex){pokedex.innerHTML += cards;}
    });
};

loadPokemonsData(offset, limit);

import { Pokemon } from "./class-pokemon.js";

const pokeAPI = {
    get: (offset:number, limit:number) => {
        const _URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

        return fetch(_URL)
            .then((response) => response.json())
            .then((body) => body.results)
            .then((pokemons) => pokemons.map(pokeAPI.getDetails))
            .then((detailsRequest) => Promise.all(detailsRequest))
            .then((details) => details)
            .catch((err) => {
                console.error(err);
            });

    },

    getDetails: (poke:any) => {
        return fetch(poke.url)
            .then((response) => response.json())
            .then(convertToModel);
    }
};

function convertToModel(poke:any){
    const pokemon = new Pokemon(
        poke.order,
        poke.name,
        poke.types.map((typeSlot:any) => typeSlot.type.name),
        poke.sprites.other["official-artwork"].front_default
    );

    return pokemon;
}

export const pokeApi = pokeAPI;

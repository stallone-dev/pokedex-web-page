import {Pokemon} from "./class-pokemon.js";

export const createCard = (data:Pokemon) => {
    const types_list = data.types.map(type => `<li class="type ${type}">${type}</li>`).join("");

    return `<li class="poke-card ${data.main_type}">
        <span class="id">${data.id}</span>
        <span class="name">${data.name}</span>
        <div class="details">
            <ol class="types">
                ${types_list}
            </ol>
            <img src="${data.photo}" alt="${data.name} Artwork">
        </div>
    </li>`;
};

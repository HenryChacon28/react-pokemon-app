import { pokemon } from '../data/pokemon';

// funcion que exporta el id de la imagen 

export const getPokemonById = ( id ) => {

    return pokemon.find( pokemo => pokemo.id === id );

}

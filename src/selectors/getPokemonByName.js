import { pokemon } from '../data/pokemon';

// funcion que convierte los caracteres a minuscula 

export const getPokemonByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return pokemon.filter( pokemon => pokemon.monsters.toLocaleLowerCase().includes( name )  );

}
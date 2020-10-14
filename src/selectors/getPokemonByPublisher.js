import { pokemon } from '../data/pokemon';

// funcion que valida la correcta categoria del la imagen

export const getPokemonByPublisher = ( generacion ) => {

    const validGeneracion = ['Primera', 'Octava'];

    if ( !validGeneracion.includes( generacion ) ) {
        throw new Error(`generacion "${ generacion }" no es correcto`);
    }

    return pokemon.filter( pokemo => pokemo.generacion === generacion );

}

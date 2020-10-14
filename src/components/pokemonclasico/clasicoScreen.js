import React from 'react'
import { PokemonList } from '../pokemon/PokemonList'

import "../pokemonclasico/clasicoScreen.css";

// funcion que muestra los datos de la lista primera

export const ClasicoScreen = () => {
    return (
        <div className="Pokemon-Primera">
            <h1>Pokemon Primera Generación</h1>
            <hr />
            <PokemonList generacion="Primera" />
        </div>
    )
}

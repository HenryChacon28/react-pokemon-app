import React from 'react'
import { PokemonList } from '../pokemon/PokemonList'

import "../pokemonnew/NewScreen.css";

// funcion que muestra los datos de la lista octava

export const NewScreen = () => {
    return (
        <div className="Pokemon-Octava">
            <h1>Pokemon Ultima Generación</h1>
            <hr />

            <PokemonList generacion="Octava" />

        </div>
    )
}

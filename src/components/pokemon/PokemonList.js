import React, { useMemo } from 'react';
import { getPokemonByPublisher } from '../../selectors/getPokemonByPublisher';
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ generacion }) => {

    const pokemon = useMemo(() => getPokemonByPublisher( generacion ), [ generacion ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               pokemon.map( pokemon => (
                   <PokemonCard 
                        key={ pokemon.id }
                        { ...pokemon }
                    />
                   
               ))
           } 
        </div>
    )
}

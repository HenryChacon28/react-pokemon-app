import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPokemonById } from '../../selectors/getPokemonById';

import "../pokemon/PokemonScreen.css"

export const PokemonScreen = ({ history }) => {

    const { pokemonId } = useParams();

    const pokemon = useMemo(() => getPokemonById( pokemonId ), [ pokemonId ]);


    if ( !pokemon ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        monsters,
        generacion,
        especie,
        n,
        tipo,
        habilidad,
        habilidad_oculta,
    } = pokemon;

    // vista de los datos de las cartas al dar click en más
    
    return (
        
        <div className="row justify-content-md-center mt-4 ">
            <div className="col-4">
                <img 
                    src={ `../assets/monsters/${ pokemonId }.png` }
                    alt={ monsters }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-6 animate__animated animate__fadeIn">
                <h3> { monsters } </h3>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark"> <b> N # </b> { n } </li>
                    <li className="list-group-item list-group-item-dark"> <b> Especie: </b> { especie } </li>
                    <li className="list-group-item list-group-item-dark"> <b> Generación: </b> { generacion } </li>
                    <li className="list-group-item list-group-item-dark"> <b> Tipos: </b> { tipo } </li>
                </ul>

                <h5> Habilidad </h5>
                <p> { habilidad } </p>

                <h5> Habilidad Oculta </h5>
                <p> { habilidad_oculta } </p>

                <button 
                    className="btn btn-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}

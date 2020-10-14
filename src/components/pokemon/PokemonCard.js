import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonCard = ({
    id,
    monsters,
    especie,
    tipo,
    n,
}) => {

    // vista de los datos en forma de cartas en el fron-end

    return (
        <div className="card border-primary ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `./assets/monsters/${ id }.png` } className="card-img" alt={ monsters } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { monsters } </h5>
                        <p className="card-text"> { especie } </p>

                        {
                            ( especie !== n ) 
                                && <p className="card-text"> { n } </p>
                        }

                        <p className="card-text">
                            <small className="text"> { tipo } </small>
                        </p>

                        <Link to={ `./pokemon/${ id }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}

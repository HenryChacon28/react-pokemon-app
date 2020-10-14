import React, { useMemo } from 'react';
import queryString from 'query-string';
import { PokemonCard } from '../pokemon/PokemonCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getPokemonByName } from '../../selectors/getPokemonByName';

import "../search/SearchScreen.css";

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const pokemonFiltered = useMemo(() => getPokemonByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    // retorna y valida las funciones de busqueda

    return (
        <div className="container mt-4">  
            <div className="row">
                
                <div className="col-sm">
                    <h4> Search your Pokemon </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your pokemon"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a Pokemon
                            </div>
                    }

                    { 
                        (q !=='' && pokemonFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a pokemon with { q }
                            </div>
                    }

                    {
                        pokemonFiltered.map( pokemon => (
                            <PokemonCard 
                                key={ pokemon.id }
                                { ...pokemon }
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

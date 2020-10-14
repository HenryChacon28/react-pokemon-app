import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import  Pokemon  from "../../../src/img/pokemonAll.jpg";

import "../login/Login.css"

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Henry Chacon'
            }
        });

        history.replace( lastPath );
        
    }

    return (
            <>
            <div>
            <img
                className="Pokemon"
                src={Pokemon}
                alt={Pokemon}
            />

            <button
                className="btn btn-secondary btn-lg btn-block"
                onClick={ handleLogin }
            >
                
                Login
            </button>
            
            </div>
            </>
        
    )
}

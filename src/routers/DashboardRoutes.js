import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ClasicoScreen } from '../components/pokemonclasico/clasicoScreen';
import { PokemonScreen } from '../components/pokemon/PokemonScreen';
import { NewScreen } from '../components/pokemonnew/NewScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {


    // Control de las rutas principales del proyecto

    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/pokemonclasico" component={ ClasicoScreen } />
                    <Route exact path="/pokemon/:pokemonId" component={ PokemonScreen } />
                    <Route exact path="/pokemonnew" component={ NewScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/pokemonclasico" />
                </Switch>
            </div>


        </>
    )
}

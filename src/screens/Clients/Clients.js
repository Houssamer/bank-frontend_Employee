import React from 'react';
import AccountDetail from '../../components/AccountDetail/AccountDetail';
import AllClients from '../../components/AllClients/AllClients';
import ClientDetail from '../../components/ClientDetail/ClientDetail';
import Header from '../../components/Header/Header';
import './style.css';
import { Switch, Route } from 'react-router-dom';

function Clients() {
    return (
        <div className="clients_container">
            <Header col="clients" />   
            <Switch>
                <Route path="/clients/account/:id">
                    <AccountDetail />
                </Route>
                <Route path="/clients/client/:id">
                    <ClientDetail />
                </Route>
                <Route path="/clients/">
                    <AllClients />
                </Route>
            </Switch>
        </div>
    )
}

export default Clients

import React from 'react';
import AllClients from '../../components/AllClients/AllClients';
import ClientDetail from '../../components/ClientDetail/ClientDetail';
import Header from '../../components/Header/Header';
import './style.css';

function Clients() {
    return (
        <div className="clients_container">
            <Header col="clients" />

            <ClientDetail />
        </div>
    )
}

export default Clients

import React, { useState } from 'react';
import './style.css';
import accept from '../../assets/accept.png';
import refuse from '../../assets/refuse.png';
import { useHistory } from 'react-router';

function AllClients() {
  const history = useHistory();
  const [clients, setClients] = useState([
    {
      id: 1,
      email: 'test@gmail.com',
    },
  ]);
  const [nonVerified, setNonVerified] = useState([
    {
      id: 1,
      email: 'test1@gmail.com',
    },
  ]);
  return (
    <div className="allClients_container">
      <div className="AllClients_leftSide">
        <input type="email" placeholder="Email" className="allClient_input" />
        <div className="allClients_clients">
          {clients.map((client) => (
            <div
              key={client.id}
              className="allClients_client"
              onClick={() => history.push('/clients/client/' + client.id)}
            >
              <h3>{client.email}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="allClients_rightSide">
        <h1>Account Request</h1>
        <div className="allClients_accounts">
          {nonVerified.map((client) => (
            <div key={client.id} className="allClients_account">
              <h3>{client.email}</h3>
              <div className="allClients_icons">
                <img src={accept} alt="accept" className="allClients_icon" />
                <img src={refuse} alt="refuse" className="allClients_icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllClients;

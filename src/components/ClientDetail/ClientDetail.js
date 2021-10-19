import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';

function ClientDetail() {
  const history = useHistory();
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      number: '961715552555369759046004',
    },
  ]);

  const [client, setClient] = useState(
    {
      id: 1,
      firstName: 'test',
      lastName: 'test',
      email: 'test@gmail.com',
    },
  );
  return (
    <div className="clientDetail_container">
      <div className="clientDetail_leftSide">
        <h1>Client Details</h1>
        <div className="clientDetail_client">
          <h3>ID: {client.id}</h3>
          <h3>First Name: {client.firstName}</h3>
          <h3>Last Name: {client.lastName}</h3>
          <h3>Email: {client.email}</h3>
        </div>
        <button className="clientDetail_button">Delete Client</button>
      </div>
      <div className="clientDetail_rightSide">
        <h1>Accounts</h1>
        <div className="clientDetail_accounts">
          {accounts.map((account) => (
            <div className="clientDetail_account">
              <h3 onClick={() => history.push('/clients/account/'+ client.id)}>account number : {account.number}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientDetail;

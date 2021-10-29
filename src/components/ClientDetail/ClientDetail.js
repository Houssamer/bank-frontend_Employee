import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './style.css';
import axios from '../../axios/axios';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

function ClientDetail() {
  const history = useHistory();
  const id = useParams().id;
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState({});

  function Delete(id) {
    setLoading(true);
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios
      .delete('/api/client/delete?id=' + id, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The client has been deleted',
          icon: 'success',
          button: 'ok',
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
        history.push('/clients');
      })
      .catch((err) => {
        setLoading(false);
        swal({
          title: 'Error',
          text: 'An error has been occured, please try later',
          icon: 'error',
          button: 'ok',
        });
      });
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };

    axios
      .get('/api/client?id=' + id, config)
      .then((res) => {
        setClient({
          id: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          username: res.data.username,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const body = JSON.stringify({
      userEmail: client.username,
    });

    console.log(body);

    axios.post('/api/account/user', body, config).then((res) => {
      setAccounts(res.data);
    });
  }, []);

  return (
    <div className="clientDetail_container">
      {loading && (
        <div className={`${loading}` ? 'loading' : 'hiddenLoading'}>
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height="8%"
            width="8%"
          />
        </div>
      )}
      <div className="clientDetail_leftSide">
        <h1>Client Details</h1>
        <div className="clientDetail_client">
          <h3>ID: {client.id}</h3>
          <h3>First Name: {client.firstName}</h3>
          <h3>Last Name: {client.lastName}</h3>
          <h3>Email: {client.username}</h3>
        </div>
        <button className="clientDetail_button" onClick={() => Delete(id)}>
          Delete Client
        </button>
      </div>
      <div className="clientDetail_rightSide">
        <h1>Accounts</h1>
        <div className="clientDetail_accounts">
          {accounts.map((account) => (
            <div className="clientDetail_account" key={account?.id}>
              <h3 onClick={() => history.push('/clients/account/' + client.id)}>
                account number : {account?.number}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientDetail;

import React, { useEffect, useState } from 'react';
import './style.css';
import accept from '../../assets/accept.png';
import refuse from '../../assets/refuse.png';
import { useHistory } from 'react-router';
import axios from '../../axios/axios';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

function AllClients() {
  const history = useHistory();
  const [clients, setClients] = useState([]);
  const [nonVerified, setNonVerified] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    }
    axios.get('/api/client/all', config)
      .then((res) => {
        setClients(res.data);
      }).catch((err) => {
        console.log(err);
      })

    axios.get('/api/client/disabled', config)
      .then((res) => {
        setNonVerified(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  function Accept(email) {
    setLoading(true);
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      email: email
    });
    axios.post('/api/client/enable', body, config)
      .then(() => {
         setLoading(false);
         swal({
           title: 'Success',
           text: 'The User has been enabled successfully',
           icon: 'success',
           button: 'ok'
         })
         setTimeout(() => {
           window.location.reload(false);
         }, 2000);
      }).catch((err) => {
        setLoading(false);
        swal({
          title: 'Error',
          text: 'An Error has been occured, please try later',
          icon: 'error',
          button: 'ok'
        })
      })
  }

  function Refuse(id) {
    setLoading(true);
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    axios.delete('/api/client/delete?id='+id, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The user has been deleted successfully',
          icon: 'success',
          button: 'ok'
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }).catch((err) => {
        setLoading(false);
        swal({
          title: 'Error',
          text: 'An error has been occured, please try later',
          icon: 'error',
          button: 'ok'
        });
      })
  }

  return (
    <div className="allClients_container">
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
      <div className="AllClients_leftSide">
        <input type="email" placeholder="Email" className="allClient_input" />
        <div className="allClients_clients">
          {clients.map((client) => (
            <div
              key={client.id}
              className="allClients_client"
              onClick={() => history.push('/clients/client/' + client.id)}
            >
              <h3>{client.username}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="allClients_rightSide">
        <h1>Account Request</h1>
        <div className="allClients_accounts">
          {nonVerified.map((client) => (
            <div key={client.id} className="allClients_account">
              <h3>{client.username}</h3>
              <div className="allClients_icons">
                <img
                  src={accept}
                  alt="accept"
                  className="allClients_icon"
                  onClick={() => Accept(client.username)}
                />
                <img
                  src={refuse}
                  alt="refuse"
                  className="allClients_icon"
                  onClick={() => Refuse(client.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllClients;

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './style.css';
import axios from '../../axios/axios';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

function ManagerDet() {
  const id = useParams().id;
  const [manager, setManager] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function Delete(id) {
    setLoading(true);
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios
      .delete('/api/manager/delete?id=' + id, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The manager has been deleted',
          icon: 'success',
          button: 'ok',
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
        history.push('/managers');
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
      },
    };

    axios
      .get('/api/manager?id=' + id, config)
      .then((res) => {
        setManager({
          id: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          username: res.data.username,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="managerDet_container">
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
      <h1>Emplyee Details</h1>
      <div className="managerDet_info">
        <p>
          <span className="key">ID:</span> {manager.id}
        </p>
        <p>
          <span className="key">First Name:</span> {manager.firstName}
        </p>
        <p>
          <span className="key">Last Name:</span> {manager.lastName}
        </p>
        <p>
          <span className="key">Email:</span> {manager.username}
        </p>
      </div>
      <button
        className="managerDet_button"
        onClick={() => Delete(manager.id)}
      >
        Delete Manager
      </button>
    </div>
  );
}

export default ManagerDet;

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './style.css';
import axios from '../../axios/axios';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

function EmployeeDet() {
  const id = useParams().id;
  const [employee, setEmployee] = useState({});
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
      .delete('/api/employee/delete?id=' + id, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The employee has been deleted',
          icon: 'success',
          button: 'ok',
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
        history.push('/employees');
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
      .get('/api/employee?id=' + id, config)
      .then((res) => {
        setEmployee({
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
    <div className="employeeDet_container">
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
      <div className="employeeDet_info">
        <p>
          <span className="key">ID:</span> {employee.id}
        </p>
        <p>
          <span className="key">First Name:</span> {employee.firstName}
        </p>
        <p>
          <span className="key">Last Name:</span> {employee.lastName}
        </p>
        <p>
          <span className="key">Email:</span> {employee.username}
        </p>
      </div>
      <button
        className="employeeDet_button"
        onClick={() => Delete(employee.id)}
      >
        Delete Employee
      </button>
    </div>
  );
}

export default EmployeeDet;

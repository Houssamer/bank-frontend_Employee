import React, { useRef, useState } from 'react';
import './style.css';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';
import axios from '../../axios/axios';
import { useHistory } from 'react-router';

function AddEmployee() {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function add() {
    setLoading(true);
    const email = emailRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    if (password !== rePassword) {
      alert("Your passwords don't match");
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };

      const body = JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      });

      axios
        .post('/api/employee/add', body, config)
        .then(() => {
          setLoading(false);
          swal({
            title: 'Success',
            text: 'The employee has been added successfully',
            icon: 'success',
            button: 'ok',
          });
          history.push('/employees');
          setTimeout(() => {
            window.location.reload(false);
          }, 2000);
        })
        .catch((err) => {
          setLoading(false);
          swal({
            title: 'Error',
            text: 'An error has been occured. Please try later',
            icon: 'error',
            button: 'ok',
          });
          console.log(err);
        });
    }
  }
  return (
    <div className="addClient_container">
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
      <div className="addClient_inputs">
        <div className="addClient_inputDiv">
          <label htmlFor="email" className="addClient_label">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="addClient_input"
            ref={emailRef}
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="firstName" className="addClient_label">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="addClient_input"
            ref={firstNameRef}
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="lastName" className="addClient_label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="addClient_input"
            ref={lastNameRef}
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="password" className="addClient_label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="addClient_input"
            ref={passwordRef}
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="re-password" className="addClient_label">
            Retype Password
          </label>
          <input
            type="password"
            placeholder="Re-Password"
            className="addClient_input"
            ref={rePasswordRef}
          />
        </div>
      </div>
      <div className="addClient_buttonDiv">
        <button className="addClient_button" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddEmployee;

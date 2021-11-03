import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router';
import axios from '../../axios/axios';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';
import './style.css';

function AddManager() {
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
          .post('/api/manager/add', body, config)
          .then(() => {
            setLoading(false);
            swal({
              title: 'Success',
              text: 'The manager has been added successfully',
              icon: 'success',
              button: 'ok',
            });
            history.push('/managers');
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
      <div className="addManager_container">
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
        <div className="addManager_inputs">
          <div className="addManager_inputDiv">
            <label htmlFor="email" className="addManager_label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="addManager_input"
              ref={emailRef}
            />
          </div>
          <div className="addManager_inputDiv">
            <label htmlFor="firstName" className="addManager_label">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="addManager_input"
              ref={firstNameRef}
            />
          </div>
          <div className="addManager_inputDiv">
            <label htmlFor="lastName" className="addManager_label">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="addManager_input"
              ref={lastNameRef}
            />
          </div>
          <div className="addManager_inputDiv">
            <label htmlFor="password" className="addManager_label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="addManager_input"
              ref={passwordRef}
            />
          </div>
          <div className="addManager_inputDiv">
            <label htmlFor="re-password" className="addManager_label">
              Retype Password
            </label>
            <input
              type="password"
              placeholder="Re-Password"
              className="addManager_input"
              ref={rePasswordRef}
            />
          </div>
        </div>
        <div className="addManager_buttonDiv">
          <button className="addManager_button" onClick={add}>
            Add
          </button>
        </div>
      </div>
    );
}

export default AddManager

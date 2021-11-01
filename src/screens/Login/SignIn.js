import React, { useRef, useState } from 'react';
import './style.css';
import axios from '../../axios/axios';
import { useDispatch } from 'react-redux';
import { Login, Logout } from '../../features/userSlice';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router';

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function login() {
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let role;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    axios
      .post('/login', body, config)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', email);
        const body2 = JSON.stringify({
          email: email,
        });

        axios.post('/api/role', body, config).then((res) => {
          switch (res.data) {
            case 'Employee':
              role = 'employee';
              break;
            case 'Manager':
              role = 'manager';
              break;
            case 'SysAdmin':
              role = 'admin';
              break;
            default:
              break;
          }

          const config2 = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          };

          axios
            .post('/api/' + role, body2, config2)
            .then((res) => {
              setLoading(false);
              dispatch(
                Login({
                  firstName: res.data.firstName,
                  lastName: res.data.lastName,
                  email: res.data.username,
                  role: res.data.role,
                })
              );
              if (res.data.role === 'Employee') {
                history.push('/clients');
              } else if (res.data.role === 'Manager') {
                history.push('/employees');
              }
            })
            .catch((err) => {
              setLoading(false);
              localStorage.removeItem('token');
              localStorage.removeItem('email');
              dispatch(Logout());
              console.log(err);
            });
        }).then.catch((err) => {
          setLoading(false);
          dispatch(Logout());
          console.log(err);
        })
      })
      .catch((err) => {
        setLoading(false);
        dispatch(Logout());
        console.log(err);
      });
  }
  return (
    <div className="login_container">
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

      <h1 className="login_title">Bank</h1>
      <div className="login_body">
        <div className="login_div_input">
          <label htmlFor="email" className="login_label">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="login_input"
            ref={emailRef}
          />
        </div>
        <div className="login_div_input">
          <label htmlFor="password" className="login_label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="login_input"
            ref={passwordRef}
          />
        </div>
        <button className="login_button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn;

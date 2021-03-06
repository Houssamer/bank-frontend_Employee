import './App.css';
import Clients from './screens/Clients/Clients';
import Operations from './screens/Operations/Operations';
import Forbidden from './screens/Forbidden/Forbidden';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Employee from './screens/Employees/Employee';
import SignIn from './screens/Login/SignIn';
import { useSelector } from 'react-redux';
import { Login, Logout, selectUser } from './features/userSlice';
import axios from './axios/axios';
import { useDispatch } from 'react-redux';
import Managers from './screens/Managers/Managers';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      let role;
      const config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({
        email: localStorage.getItem('email'),
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
        axios
        .post('/api/' + role, body, config)
        .then((res) => {
          dispatch(
            Login({
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              email: res.data.username,
              role: res.data.role,
            })
          );
        })
        .catch((err) => {
          console.log(err);
          dispatch(Logout());
        });
      }).catch((err) => {
        console.log(err);
        dispatch(Logout());
      })
    }
  }, []);
  return (
    <div className="App">
      <Router>
        {user?.role === 'Employee' ? (
          <Switch>
            <Route path="/operations">
              <Operations />
            </Route>
            <Route path="/clients">
              <Clients />
            </Route>
            <Route component={Forbidden} />
          </Switch>
        ) : user?.role === 'Manager' ? (
          <Switch>
            <Route path="/employees">
              <Employee />
            </Route>
            <Route component={Forbidden} />
          </Switch>
        ) : user?.role === 'SysAdmin' ? (
          <Switch>
            <Route path="/operations">
              <Operations />
            </Route>
            <Route path="/clients">
              <Clients />
            </Route>
            <Route path="/employees">
              <Employee />
            </Route>
            <Route path="/managers">
              <Managers />
            </Route>
            <Route component={Forbidden} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

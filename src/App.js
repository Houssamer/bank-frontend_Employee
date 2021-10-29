import './App.css';
import Clients from './screens/Clients/Clients';
import Operations from './screens/Operations/Operations';
import Forbidden from './screens/Forbidden/Forbidden';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Employee from './screens/Employees/Employee';
import SignIn from './screens/Login/SignIn';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  //const user = useSelector(selectUser);
  const [user, setUser] = useState({role: 'Employee'});
  return (
    <div className="App">
      <Router>
        {user?.role === "Employee" ? (
          <Switch>
            <Route path="/operations">
              <Operations />
            </Route>
            <Route path="/clients">
              <Clients />
            </Route>
            <Route component={Forbidden} />
          </Switch>
        ) : 
        user?.role === "Manager" ?
          (
            <Switch>
              <Route path="/employees">
                <Employee />
              </Route>
              <Route component={Forbidden} />
            </Switch>
          )
        : (
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

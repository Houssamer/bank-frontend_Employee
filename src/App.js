import './App.css';
import Login from './screens/Login/Login';
import Clients from './screens/Clients/Clients';
import Operations from './screens/Operations/Operations';
import Forbidden from './screens/Forbidden/Forbidden';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Employee from './screens/Employees/Employee';

function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      {/* <Router>
        {user ? (
          <Switch>
            <Route path="/operations">
              <Operations />
            </Route>
            <Route path="/clients">
              <Clients />
            </Route>
            <Route component={Forbidden} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        )}
      </Router> */}
      <Employee />
    </div>
  );
}

export default App;

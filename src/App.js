import './App.css';
import Header from './components/Header/Header';
import Login from './screens/Login/Login';
import Clients from './screens/Clients/Clients'
import Operations from './screens/Operations/Operations';
import Forbidden from './screens/Forbidden/Forbidden';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       {/* <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router> */}
    <Forbidden />
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../../components/Header/Header';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import ManagerDet from '../../components/ManagerDet/ManagerDet';
import AddManager from '../../components/AddManager/AddManager';
import AllManagers from '../../components/AllManagers/AllManagers';

function Managers() {
  return (
    <div className="manager_container">
      <Header col="managers" />
      <Switch>
        <Route path="/managers/det/:id">
          <ManagerDet />
        </Route>
        <Route path="/managers/add">
          <AddManager />
        </Route>
        <Route path="/managers/">
          <AllManagers />
        </Route>
      </Switch>
    </div>
  );
}

export default Managers;

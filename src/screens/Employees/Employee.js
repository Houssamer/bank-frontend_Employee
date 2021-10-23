import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import AllEmployees from '../../components/AllEmployees/AllEmployees';
import EmployeeDet from '../../components/EmployeeDet/EmployeeDet';
import AddEmployee from '../../components/AddEmployee/AddEmployee';
import { Switch, Route } from 'react-router-dom';

function Employee() {
    return (
        <div className="employee_container">
            <Header col="employees" />
            <Switch>
                <Route path="/employees/det/:id">
                    <EmployeeDet />
                </Route>
                <Route path="/employees/add"> 
                    <AddEmployee />
                </Route>
                <Route path="/employees/">
                    <AllEmployees />
                </Route>
            </Switch>
        </div>
    )
}

export default Employee

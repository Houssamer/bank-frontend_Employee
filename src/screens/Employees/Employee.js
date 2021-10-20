import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import AllEmployees from '../../components/AllEmployees/AllEmployees';
import EmployeeDet from '../../components/EmployeeDet/EmployeeDet';

function Employee() {
    return (
        <div className="employee_container">
            <Header col="employees" />
            <EmployeeDet />
        </div>
    )
}

export default Employee

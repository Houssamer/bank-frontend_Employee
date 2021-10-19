import React from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import AllEmployees from '../../components/AllEmployees/AllEmployees';

function Employee() {
    return (
        <div className="employee_container">
            <Header col="employees" />
            <AllEmployees />
        </div>
    )
}

export default Employee

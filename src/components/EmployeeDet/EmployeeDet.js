import React, { useState } from 'react';
import './style.css';

function EmployeeDet() {
  const [employee, setEmployee] = useState({
    id: 1,
    email: 'test@gmail.com',
    firstName: 'test',
    lastName: 'test',
  });
  return (
    <div className="employeeDet_container">
      <h1>Emplyee Details</h1>
      <div className="employeeDet_info">
        <p>
          <span className="key">ID:</span> {employee.id}
        </p>
        <p>
          <span className="key">First Name:</span> {employee.firstName}
        </p>
        <p>
          <span className="key">Last Name:</span> {employee.lastName}
        </p>
        <p>
          <span className="key">Email:</span> {employee.email}
        </p>
      </div>
      <button className="employeeDet_button">Delete Employee</button>
    </div>
  );
}

export default EmployeeDet;

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';

function AllEmployees() {
  const history = useHistory();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      email: 'test@gmail.com',
    },
    {
      id: 2,
      email: 'test@gmail.com',
    },
  ]);
  return (
    <div className="allEmployees_container">
      <div className="allEmployees_topSide">
        <input
          type="email"
          className="allEmployees_input"
          placeholder="Email"
        />
        <div className="allEmployees_content">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="allEmployees_employee"
              onClick={() => history.push('/employees/det/' + employee.id)}
            >
              <h4>{employee.email}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="allEmployees_bottomSide">
        <button
          className="allEmployees_button"
          onClick={() => history.push('/employees/add')}
        >
          Add An Employee
        </button>
      </div>
    </div>
  );
}

export default AllEmployees;

import React, { useState } from 'react';
import './style.css';

function AllEmployees() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            email: "test@gmail.com"
        },
        {
            id: 1,
            email: "test@gmail.com"
        }
    ])
  return (
    <div className="allEmployees_container">
      <div className="allEmployees_topSide">
        <input
          type="email"
          className="allEmployees_input"
          placeholder="Email"
        />
        <div className="allEmployees_content">
            {
                employees.map((employee) => (
                    <div key={employee.id} className="allEmployees_employee">
                        <h4>{employee.email}</h4>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="allEmployees_bottomSide">
        <button className="allEmployees_button">Add An Employee</button>
      </div>
    </div>
  );
}

export default AllEmployees;

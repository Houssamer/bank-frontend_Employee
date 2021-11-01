import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';
import axios from '../../axios/axios';

function AllEmployees() {
  const history = useHistory();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios.get('/api/employee/all', config)
      .then((res) => {
        setEmployees(res.data)
      })
  })
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
              <h4>{employee.username}</h4>
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

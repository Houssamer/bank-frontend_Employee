import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from '../../axios/axios';
import './style.css';

function AllManagers() {
    const history = useHistory();
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }

        axios.get('/api/manager/all', config)
            .then((res) => {
                setManagers(res.data);
            })
    }, [])

  return (
    <div className="allManagers_container">
      <div className="allManagers_topSide">
        <input
          type="email"
          className="allManagers_input"
          placeholder="Email"
        />
        <div className="allManagers_content">
          {managers.map((manager) => (
            <div
              key={manager.id}
              className="allManagers_employee"
              onClick={() => history.push('/managers/det/' + manager.id)}
            >
              <h4>{manager.username}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="allManagers_bottomSide">
        <button
          className="allManagers_button"
          onClick={() => history.push('/managers/add')}
        >
          Add An Manager
        </button>
      </div>
    </div>
  );
}

export default AllManagers;

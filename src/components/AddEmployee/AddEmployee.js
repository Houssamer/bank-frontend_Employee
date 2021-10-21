import React from 'react';
import './style.css';

function AddEmployee() {
  return (
    <div className="addClient_container">
      <div className="addClient_inputs">
        <div className="addClient_inputDiv">
          <label htmlFor="email" className="addClient_label">
            Email
          </label>
          <input type="email" placeholder="Email" className="addClient_input" />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="firstName" className="addClient_label">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="addClient_input"
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="lastName" className="addClient_label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="addClient_input"
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="password" className="addClient_label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="addClient_input"
          />
        </div>
        <div className="addClient_inputDiv">
          <label htmlFor="re-password" className="addClient_label">
            Retype Password
          </label>
          <input
            type="password"
            placeholder="Re-Password"
            className="addClient_input"
          />
        </div>
      </div>
      <div className="addClient_buttonDiv">
        <button className="addClient_button">Add</button>
      </div>
    </div>
  );
}

export default AddEmployee;

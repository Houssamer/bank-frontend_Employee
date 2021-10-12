import React from 'react';
import './style.css';

function Header({ col }) {
  return (
    <div className="header_container">
      <div className="header_leftSide">
        <h1 className="header_logo">Bank</h1>
      </div>
      <div className="header_rightSide">
        <h4 className={`header_button ${col === 'managers' && 'click'}`}>
          Managers
        </h4>
        <h4 className={`header_button ${col === 'employees' && 'click'}`}>
          Employees
        </h4>
        <h4 className={`header_button ${col === 'clients' && 'click'}`}>
          Clients
        </h4>
        <h4 className={`header_button ${col === 'operations' && 'click'}`}>
          Operations
        </h4>
        <h4 className="header_button">Sign Out</h4>
      </div>
    </div>
  );
}

export default Header;

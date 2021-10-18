import React from 'react';
import Header from '../../components/Header/Header';
import './style.css';
import forbidden from '../../assets/forbidden.png';

function Forbidden() {
  return (
    <div className="forbidden_container">
      <Header />
      <h1 className="forbidden_title">Forbidden</h1>
      <img src={forbidden} alt="forbidden" className="forbidden_img" />
    </div>
  );
}

export default Forbidden;

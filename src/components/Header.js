import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <div>
    <nav className="navbar navbar-expand navbar-dark static-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
              <img className="logo" src={require("../images/logo.png")} alt="logo" />
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span>
                  </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
);

export default Header;

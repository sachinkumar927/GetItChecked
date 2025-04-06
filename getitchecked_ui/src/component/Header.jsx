import React from "react";
import { Link } from "react-router-dom";
import LOGO from '../assets/images/logo.png';
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between p-2">
        <div className="d-flex align-items-center">
          <img className="logo me-2" src={LOGO} alt="App Logo" style={{ height: '40px' }} />
          <h6 className="navbar-brand mb-0 text-white">
            <b className="app-color">GET IT CHECKED</b>
          </h6>
        </div>

          <ul className="navbar-nav ms-auto">
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/home">
                  Home <i className="fas fa-home ms-1"></i>
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/logout">
                  Logout
                </Link>
              </li>
            )}
          </ul>
      </div>
    </nav>
  );
};

export default Header;

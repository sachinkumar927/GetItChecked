import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="position-fixed col-md-3 col-lg-2 d-md-block bg-light sidebar" style={{ height: '100%' }}>
      <div className="">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addAssignment">
              <i className="fas fa-plus"></i> Add Assignment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewMarks">
              <i className="fas fa-graduation-cap"></i> View Marks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fas fa-book"></i> View Assignment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/uploadAssignment">
              <i className="fas fa-upload"></i> Upload Assignment
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/myAccount">
              <i className="fas fa-user-circle"></i> My Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/accountManagement">
              <i className="fas fa-cogs"></i> Accounts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/accessControl">
              <i className="fas fa-shield-alt"></i> Access Control
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

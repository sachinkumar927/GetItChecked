import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li className="breadcrumb-item active" aria-current="page"><a></a></li> */}
        </ol>
      </nav>

      {/* Dashboard Section */}
      <section id="dashboard" className="content-section">
        <div className="card p-4 mb-4 bg-light mt-3">
          <h4>What is Get It Checked?</h4>
          <p>
            <strong>Get It Checked</strong> is an Assignment Plagiarism Detection tool designed for students and
            teachers. It ensures the originality of assignments by scanning and comparing text with previously
            uploaded assignments.
          </p>

          <h5>How It Works:</h5>
          <ul className="list-unstyled">
            <li>
              🔹 <strong>Upload:</strong> Submit your assignment in PDF or TXT format.
            </li>
            <li>
              🔹 <strong>Comparison:</strong> The system scans your document against previously submitted assignments.
            </li>
            <li>
              🔹 <strong>Plagiarism Report:</strong> Get a similarity percentage and detailed sources where plagiarism
              is found.
            </li>
            <li>
              🔹 <strong>Teacher Notification:</strong> If plagiarism is detected above a threshold (e.g., 50%), the
              respective teacher is notified automatically.
            </li>
            <li>
              🔹 <strong>Marks Assignment:</strong> Based on the originality score, the system helps teachers in
              grading assignments.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

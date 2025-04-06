import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaUser,
  FaIdBadge,
  FaEnvelope,
  FaKey,
  FaPaperPlane,
  FaSignInAlt,
} from "react-icons/fa";

const FacultyPortal = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggleForm = () => {
    setShowRegister(!showRegister);
  };

  const renderOtpInputs = () => (
    <div className="d-flex justify-content-between">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          className="form-control me-1 otp-box"
          maxLength="1"
          required
          name={`otp${i + 1}`}
          id={`otp${i + 1}`}
          style={{ textAlign: "center", fontWeight: "bold" }}
        />
      ))}
    </div>
  );

  return (
    <section className="py-5" id="faculty">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <h2 className="text-center mb-4">
            <FaChalkboardTeacher /> Faculty Portal
          </h2>

          {/* Register Form */}
          {showRegister ? (
            <div className="form-container" style={{ zoom: "80%" }}>
              <form className="p-4 border rounded bg-light shadow mb-5">
                <div className="mb-3">
                  <label className="form-label">
                    <FaUser /> Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaIdBadge /> Faculty ID/Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Faculty ID"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaKey /> OTP
                  </label>
                  {renderOtpInputs()}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <FaPaperPlane /> Register
                </button>

                <div className="text-center mt-3">
                  <button
                    type="button"
                    onClick={handleToggleForm}
                    className="btn btn-link small-link"
                  >
                    Already have an account? Login here
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Login Form
            <div className="form-container" style={{ zoom: "80%" }}>
              <form className="p-4 border rounded bg-light shadow">
                <div className="mb-3">
                  <label className="form-label">
                    <FaIdBadge /> Faculty ID/Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Faculty ID"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <FaKey /> OTP
                  </label>
                  {renderOtpInputs()}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <FaSignInAlt /> Login
                </button>

                <div className="text-center mt-3">
                  <button
                    type="button"
                    onClick={handleToggleForm}
                    className="btn btn-link small-link"
                  >
                    Don’t have an account? Register here
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacultyPortal;

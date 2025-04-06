import React, { useState } from "react";

const StudentPortal = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    name: "",
    student_id: "",
    email: "",
    otp: Array(6).fill(""),
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    otp: Array(6).fill(""),
  });

  const handleOtpChange = (index, value, isLogin) => {
    const form = isLogin ? loginForm : registerForm;
    const newOtp = [...form.otp];
    newOtp[index] = value.slice(-1); // Only allow 1 char
    if (isLogin) {
      setLoginForm({ ...loginForm, otp: newOtp });
    } else {
      setRegisterForm({ ...registerForm, otp: newOtp });
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const otpCombined = registerForm.otp.join("");
    console.log("Registering:", { ...registerForm, otp: otpCombined });
    // Submit to /register API
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const otpCombined = loginForm.otp.join("");
    console.log("Logging in:", { ...loginForm, otp: otpCombined });
    // Submit to /login API
  };

  const renderOtpInputs = (form, isLogin = false) => {
    return form.otp.map((val, idx) => (
      <input
        key={idx}
        type="text"
        className="form-control me-1 otp-box"
        maxLength="1"
        value={val}
        required
        onChange={(e) => handleOtpChange(idx, e.target.value, isLogin)}
      />
    ));
  };

  return (
    <section id="student" className="py-5">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <h2 className="text-center mb-4">
            <i className="fas fa-user-graduate"></i> Student Portal
          </h2>

          {/* Register Form */}
          {isRegistering ? (
            <div className="form-container" style={{ zoom: "80%" }}>
              <form
                className="p-4 border rounded bg-light shadow mb-5"
                onSubmit={handleRegisterSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-user"></i> Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={registerForm.name}
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-id-badge"></i> Student ID/Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={registerForm.student_id}
                    placeholder="Enter your student ID/Number"
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        student_id: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={registerForm.email}
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-key"></i> OTP
                  </label>
                  <div className="d-flex justify-content-between">
                    {renderOtpInputs(registerForm)}
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  <i className="fas fa-paper-plane"></i> Register
                </button>
                <div className="text-center mt-3">
                  <a
                    href="#"
                    onClick={() => setIsRegistering(false)}
                    className="small-link"
                  >
                    Already have an account? Login here
                  </a>
                </div>
              </form>
            </div>
          ) : (
            // Login Form
            <div className="form-container" style={{ zoom: "80%" }}>
              <form
                className="p-4 border rounded bg-light shadow"
                onSubmit={handleLoginSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-id-badge"></i> Student ID/Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={registerForm.student_id}
                    placeholder="Enter your student ID/Number"
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        student_id: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={loginForm.email}
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fas fa-key"></i> OTP
                  </label>
                  <div className="d-flex justify-content-between">
                    {renderOtpInputs(loginForm, true)}
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  <i className="fas fa-sign-in-alt"></i> Login
                </button>
                <div className="text-center mt-3">
                  <a
                    href="#"
                    onClick={() => setIsRegistering(true)}
                    className="small-link"
                  >
                    Don't have an account? Register here
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentPortal;

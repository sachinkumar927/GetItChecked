import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaIdBadge,
  FaBook,
  FaFileUpload,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const AddAssignment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    facultyId: "",
    sub_code: "",
    file_data: null,
    last_date: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("facultyId", formData.facultyId);
    data.append("sub_code", formData.sub_code);
    data.append("file_data", formData.file_data);
    data.append("last_date", formData.last_date);

    try {
      const response = await fetch("/add-assignment", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Assignment added successfully!");
        navigate("/dashboard");
      } else {
        alert("Error submitting assignment.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="mx-2">
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/addAssignment">Add Assignment</a>
          </li>
        </ol>
      </nav>

      <section className="content-section" id="addAssignment" style={{ zoom: "80%" }}>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow">
                <div className="card-header text-center bg-success text-white">
                  <h4>
                    <FaPlus /> Add Assignment
                  </h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Faculty ID */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaIdBadge /> Faculty ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="facultyId"
                        value={formData.facultyId}
                        onChange={handleChange}
                        placeholder="Enter your Faculty ID"
                        required
                      />
                    </div>

                    {/* Subject Code */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaBook /> Subject Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="sub_code"
                        value={formData.sub_code}
                        onChange={handleChange}
                        placeholder="Enter Subject Code"
                        required
                      />
                    </div>

                    {/* File Upload */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaFileUpload /> Upload Assignment (PDF)
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="file_data"
                        accept=".pdf"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Last Submission Date */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaCalendarAlt /> Last Submission Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="last_date"
                        value={formData.last_date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-success w-100">
                        <FaCheckCircle /> Add Assignment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddAssignment;

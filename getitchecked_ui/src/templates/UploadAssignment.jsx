import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUpload,
  FaIdCard,
  FaUser,
  FaFilePdf,
  FaList,
  FaPaperPlane,
} from "react-icons/fa";

const UploadAssignment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    aid: "",
    student_number: "",
    file_data: null,
    type: "",
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
    data.append("aid", formData.aid);
    data.append("student_number", formData.student_number);
    data.append("file_data", formData.file_data);
    data.append("type", formData.type);

    try {
      const response = await fetch("/upload-assignment", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Assignment uploaded successfully!");
        navigate("/dashboard");
      } else {
        alert("Failed to upload assignment.");
      }
    } catch (err) {
      console.error("Error uploading assignment:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mx-2">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/uploadAssignment">Upload Assignment</a>
          </li>
        </ol>
      </nav>

      <section id="upload" style={{ zoom: "80%" }}>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow">
                <div className="card-header text-center bg-success text-white">
                  <h4>
                    <FaUpload /> Upload Assignment
                  </h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Assignment ID */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaIdCard /> Assignment ID
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="aid"
                        value={formData.aid}
                        onChange={handleChange}
                        placeholder="Enter Assignment ID"
                        required
                      />
                    </div>

                    {/* Student Number */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaUser /> Student ID/Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="student_number"
                        value={formData.student_number}
                        onChange={handleChange}
                        placeholder="Enter Your Student ID/Number"
                        required
                      />
                    </div>

                    {/* File Upload */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaFilePdf /> Upload Assignment (PDF)
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

                    {/* Assignment Type */}
                    <div className="mb-3">
                      <label className="form-label">
                        <FaList /> Assignment Type
                      </label>
                      <select
                        className="form-control"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Type
                        </option>
                        <option value="unique">Unique</option>
                        <option value="common">Common</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-success w-100">
                        <FaPaperPlane /> Submit Assignment
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

export default UploadAssignment;

import React, { useEffect, useState } from "react";

const ViewMarks = () => {
  const [faculties, setFaculties] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [results, setResults] = useState([]);

  // Fetch faculties on load
  useEffect(() => {
    fetch("/api/faculties")
      .then((res) => res.json())
      .then((data) => setFaculties(data))
      .catch((err) => console.error("Error fetching faculties:", err));
  }, []);

  // Fetch assignments when faculty changes
  useEffect(() => {
    if (selectedFaculty) {
      fetch(`/api/assignments?faculty_id=${selectedFaculty}`)
        .then((res) => res.json())
        .then((data) => setAssignments(data))
        .catch((err) => console.error("Error fetching assignments:", err));
    } else {
      setAssignments([]);
    }
  }, [selectedFaculty]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/assignment-marks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faculty_id: selectedFaculty,
        assignment_id: selectedAssignment,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setResults(data);
    } else {
      console.error("Failed to fetch marks");
    }
  };

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View Marks
          </li>
        </ol>
      </nav>

      <div className="card shadow">
        <div className="card-header text-success">
          <h4 className="text-center">Assignment Marks</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label text-dark w-100">Faculty ID</label>
                <select
                  className="form-select"
                  value={selectedFaculty}
                  onChange={(e) => {
                    setSelectedFaculty(e.target.value);
                    setSelectedAssignment("");
                  }}
                  required
                >
                  <option value="">Select Faculty</option>
                  {faculties.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.id}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label text-dark w-100">Assignment ID</label>
                <select
                  className="form-select"
                  value={selectedAssignment}
                  onChange={(e) => setSelectedAssignment(e.target.value)}
                  disabled={!assignments.length}
                  required
                >
                  <option value="">Select Assignment</option>
                  {assignments.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.id}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 d-flex align-items-end">
                <button type="submit" className="btn btn-success w-50">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Student Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Assignment ID</th>
                <th>Assignment Type</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {results.length > 0 ? (
                results.map((result, idx) => (
                  <tr key={idx}>
                    <td>{result.student_number}</td>
                    <td>{result.name}</td>
                    <td>{result.email}</td>
                    <td>{result.assignment_id}</td>
                    <td>{result.assignment_type}</td>
                    <td>{result.marks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewMarks;

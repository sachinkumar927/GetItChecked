import React, { useState, useEffect } from "react";
import {
  FaIdBadge,
  FaSearch,
  FaUserShield,
  FaUserCheck,
  FaUserTimes,
  FaUniversity,
} from "react-icons/fa";

const mockUsers = [
  { id: "F001", email: "faculty1@example.com", name: "John Doe" },
  { id: "F002", email: "faculty2@example.com", name: "Jane Smith" },
  { id: "F003", email: "prof.alex@example.com", name: "Alex Turner" },
  { id: "F004", email: "admin.lisa@example.com", name: "Lisa Ray" },
];

const AccessControl = () => {
  const [collegeCode, setCollegeCode] = useState("GFGC");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [accessType, setAccessType] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const code = sessionStorage.getItem("collegeCode") || "GFGC";
    setCollegeCode(code);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setUser(null);

    if (value.length > 0) {
      const filtered = mockUsers.filter(
        (u) =>
          u.email.toLowerCase().includes(value.toLowerCase()) ||
          u.id.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (selectedUser) => {
    setUser(selectedUser);
    setSearchTerm(`${selectedUser.name} (${selectedUser.id})`);
    setSuggestions([]);
  };

  const handleGrant = async () => {
    if (!user || !accessType) return;
    console.log(`Granting ${accessType} access to`, user);
    alert(`✅ Access granted as ${accessType.toUpperCase()} to ${user.name}`);
  };

  const handleRevoke = async () => {
    if (!user) return;
    console.log("Revoking access for", user);
    alert(`❌ Access revoked from ${user.name}`);
    setAccessType("");
  };

  return (
    <section>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Access Control
          </li>
        </ol>
      </nav>

      <div className="container mt-2">
        <h3 className="mb-3">
          <FaUserShield className="me-2" /> Access Control Panel
        </h3>

        <div className="card shadow p-4">
          {/* College Code */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaUniversity className="me-2" />
              College Code
            </label>
            <input
              type="text"
              className="form-control"
              value={collegeCode}
              readOnly
              disabled
            />
          </div>

          {/* Search by Email or ID */}
          <div className="mb-3 position-relative">
            <label className="form-label fw-bold">
              <FaIdBadge className="me-2" />
              Search by Email or Faculty ID
            </label>
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Type to search..."
            />
            {suggestions.length > 0 && (
              <ul
                className="list-group position-absolute w-100 z-3"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {suggestions.map((s) => (
                  <li
                    key={s.id}
                    className="list-group-item list-group-item-action"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelectSuggestion(s)}
                  >
                    {s.name} - {s.email} ({s.id})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Access Type Dropdown */}

              <div className="mb-3">
                <label className="form-label fw-bold">
                  <FaUserShield className="me-2" />
                  Access Type
                </label>
                <select
                  className="form-select"
                  value={accessType}
                  onChange={(e) => setAccessType(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="admin">ADMIN</option>
                  <option value="superadmin">SUPERADMIN</option>
                  <option value="support">SUPPORT</option>
                  <option value="none">NONE</option>
                </select>
              </div>

              {/* Grant & Revoke Buttons */}
              <div className="d-flex gap-3 justify-content-end mb-3">
                <button
                  className="btn btn-success"
                  onClick={handleGrant}
                  disabled={!accessType}
                >
                  <FaUserCheck className="me-2" />
                  Grant Access
                </button>
                <button className="btn btn-danger" onClick={handleRevoke}>
                  <FaUserTimes className="me-2" />
                  Revoke Access
                </button>
              </div>

             
        </div>
      </div>
    </section>
  );
};

export default AccessControl;

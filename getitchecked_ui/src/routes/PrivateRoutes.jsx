import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../templates/Dashboard";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import AddAssignment from "../templates/AddAssignment";
import UploadAssignment from "../templates/UploadAssignment";
import ViewMarks from "../templates/ViewMarks";
import AccountManagement from "../templates/accounts/AccountManagement";
import AccessControl from "../templates/AccessControl";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return (
    <>
      <Header />

      <div className="container-fluid" style={{ marginTop: "75px" }}>
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 sidebar p-0">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="col-md-9 col-lg-10 px-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
              <Route path="/addAssignment" element={<AddAssignment />} />
              <Route path="/uploadAssignment" element={<UploadAssignment />} />
              <Route path="/viewMarks" element={<ViewMarks />} />
              <Route path="/accountManagement" element={<AccountManagement />} />
              <Route path="/accessControl" element={<AccessControl />} />
            </Routes>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivateRoutes;

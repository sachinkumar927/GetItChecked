import { Routes, Route } from "react-router-dom";
import Home from "../templates/Home";
import Header from "../component/Header";
import Footer from "../component/Footer";
import FacultyPortal from "../templates/FacultyPortal";
import StudentPortal from "../templates/StudentPortal";


const PublicRoutes = () => (
  <>
    <Header />
    <div className="mt-5">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faculty" element={<FacultyPortal />} />
        <Route path="/student" element={<StudentPortal />} />
      </Routes>
    </div>
    <Footer />
  </>
);

export default PublicRoutes;

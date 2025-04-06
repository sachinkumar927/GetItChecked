import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = false;

  return (
    <>
      <section className="bg-light home pb-5" id="home">
        <div className="container mt-5">
          <div
            className="row d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#f8f9fa", paddingTop: "75px" }}
          >
            <div className="col text-center">
              <h1 className="app-color">ASSIGNMENT PLAGIARISM CHECKER</h1>
              <p className="lead app-color">
                Plagiarism is a developing issue that is often characterized as literary theft...
              </p>
              <p className="app-color">Scans Everything</p>
              {!isLoggedIn && (
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/student" className="btn btn-primary">Student</Link>
                  <Link to="/faculty" className="btn btn-secondary">Faculty</Link>
                </div>
              )}
            </div>
          </div>
          <div className="row p-0 text-center pb-5 mt-5">
            <div className="col-md-4">
              <i className="fa fa-child fa-3x text-danger"></i>
              <p>Plagiarism Detection in Computer Programming Assignments</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-graduation-cap fa-3x text-success"></i>
              <p>Evaluate and Assign Marks</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-lock fa-3x text-primary"></i>
              <p>Prevents Copying of Assignments</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

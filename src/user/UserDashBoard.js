import React from "react";
import { Link } from "react-router-dom";
// import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const UserDashBoard = () => {

    // const {
    //     user: {username, email}
    // } = isAuthenticated();

const userLeftSide = () => {
        return(
            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                    <Link to="/user/create/appointment" className="nav-link text-success">
                        Create Appointment
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/patient" className="nav-link text-success">
                        Patient
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/diagnosticcenter" className="nav-link text-success">
                      DiagonasticCenter
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/diagnostictest" className="nav-link text-success">
                    DiagnosticTest
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/testresult" className="nav-link text-success">
                        TestResult
                    </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userRightSide = () => {
        return(
            <div className="card mb-4">
            <h4 className="card-header">Admin Information</h4>
            <ul className="list-group">
              {/* <li className="list-group-item">
                <span className="badge badge-success mr-2">Name:</span> {username}
              </li> */}
              {/* <li className="list-group-item">
                <span className="badge badge-success mr-2">Email:</span> {email}
              </li> */}
    
              <li className="list-group-item">
                <span className="badge badge-danger">Admin Area</span>
              </li>
            </ul>
          </div>
        );
    };

    return(
        <Base title="Welcome to Admin Dashboard"
        description="Manage of of your criteria"
        className="container bg-success p-4 mb-5"
        >
        <div className="row">
        <div className="col-3">{userLeftSide()}</div>
        <div className="col-9">{userRightSide()}</div>
      </div>
        </Base>
    );
}

export default UserDashBoard;
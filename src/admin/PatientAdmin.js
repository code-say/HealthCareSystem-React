import React from "react";
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom'
import Base from "../core/Base";


function PatientAdmin() {

   
    const userLeftSide = () => {

        return(

            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                    <Link to="/user/create/patient" className="nav-link text-success">
                        Register Patient
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/view/patient" className="nav-link text-success">
                        View Patient
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/update/patient" className="nav-link text-success">
                        Update Patient
                    </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userRightSide = () => {
        return(
            <div className="card mb-4">
            <h4 className="card-header">Patient Information</h4>
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


    return (
        <Base title="Welcome to Patient Dashboard"
        description="Manage of of Dashboard"
        className="container bg-success p-4 mb-5"
        >
        <div className="row">
        <div className="col-3">{userLeftSide()}</div>
        <div className="col-3">{userRightSide()}</div>
      </div>
        </Base>
  );
}

export default PatientAdmin;
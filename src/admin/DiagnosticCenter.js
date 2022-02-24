import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Base from "../core/Base";



function DiagnosticCenter() {

   
    const userLeftSide = () => {

        return(
            <div className="card">
              <Menu />
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                    <Link to="/user/create/diagnosticcenter" className="nav-link text-success">
                        Create DiagnosticCenter
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/view/diagnosticcenter" className="nav-link text-success">
                        View DiagnosticCenter
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/update/diagnosticcenter" className="nav-link text-success">
                        Update DiagnosticCenter
                    </Link>
                    </li>
                    {/* <li className="list-group-item">
                    <Link to="/user/delete/testresult" className="nav-link text-success">
                        Delete DiagnosticCenter
                    </Link>
                    </li> */}
                </ul>
            </div>
        );
    };

    const userRightSide = () => {
        return(
            <div className="card mb-4">
            <h4 className="card-header">DiagnosticCenter Information</h4>
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
        <Base title="Welcome to DiagnosticCenter Dashboard"
        description="Manage of yoour Dashboard"
        className="container bg-success p-4 mb-5"
        >
        <div className="row">
        <div className="col-3">{userLeftSide()}</div>
        <div className="col-3">{userRightSide()}</div>
      </div>
        </Base>
  );
}

export default DiagnosticCenter;
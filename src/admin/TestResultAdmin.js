import React from "react";
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom'
import Base from "../core/Base";
// import '../../node_modules/semantic-ui-css/semantic.min.css';

import Create from "../admin/TestResult/create";
import Read from "../admin/TestResult/read";
import Update from "../admin/TestResult/update";

function TestResultAdmin() {

   
    const userLeftSide = () => {

        return(

            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                    <Link to="/user/create/testresult" className="nav-link text-success">
                        Create TestResult
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/view/testresult" className="nav-link text-success">
                        View TestResult
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/update/testresult" className="nav-link text-success">
                        Update TestResult
                    </Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/user/delete/testresult" className="nav-link text-success">
                        Delete TestResult
                    </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userRightSide = () => {
        return(
            <div className="card mb-4">
            <h4 className="card-header">TestResult Information</h4>
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
        <Base title="Welcome to Test Result Dashboard"
        description="Manage of of your Result"
        className="container bg-success p-4 mb-5"
        >
        <div className="row">
        <div className="col-3">{userLeftSide()}</div>
        <div className="col-3">{userRightSide()}</div>
      </div>
        </Base>
  );
}

export default TestResultAdmin;
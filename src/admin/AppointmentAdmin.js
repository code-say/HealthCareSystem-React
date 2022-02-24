import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddAdmin from "./Appointment/AddAdmin";
import UpdateAdmin from "./Appointment/UpdateAdmin";
import ViewAdmin from "./Appointment/ViewAdmin";

class AppointmentAdmin extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={ViewAdmin} />
            <Route exact path="/add" component={AddAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppointmentAdmin;
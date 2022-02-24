import React, {Fragment} from "react";
import { Link,  withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";

import "../styles/Menu.css";



const currentTab = (history, path) => {
  if(history.location.pathname === path) {
    return {color: "#2ecc72" };
  }else {
    return {color: "#FFFFFF"};
  }
};


const Menu = (history) => (

    <nav className="navbar navbar-header navbar-fixed-top navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold xl head__logo"><span>H</span>ealth<span>C</span>are</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" href="/"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/about")} className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/contact")} className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      {/* {isAuthenticated() && isAuthenticated().user.role === "USER" &&(  )} */}

          <li className="nav-item">
          <Link 
          style={currentTab(history, "/user/dashboard")} 
          className="nav-link" 
          to="/user/dashboard">
          Dashboard
          </Link>
          </li>
     
      
      {/* <li className="nav-item">
        <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
          A. Dashboard
        </Link>
      </li> */}
      {!isAuthenticated() && (
        <Fragment>
        <li className="nav-item">
          <Link 
          style={currentTab(history, "/signup")} 
          className="nav-link" 
          to="/signup">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link 
          style={currentTab(history, "/signin")} 
          className="nav-link" 
          to="/signin">
            Sign In
          </Link>
        </li>
        </Fragment>
      )}
      {/* <li className="nav-item">
        <Link 
        style={currentTab(history, "/signout")} 
        className="nav-link" to="/signout"
        >
          Signout
        </Link>
      </li> */}
      {isAuthenticated() && (
        <Link to="/">
        <span
        className="nav-link text-warning"
        onClick={() => {
          signout(() => {
    
          });
        }}
        >
          Signout
          </span>
        </Link>
        
      )}
    </ul>
    </div>
    </div>
    </nav>
    
);


export default withRouter(Menu);

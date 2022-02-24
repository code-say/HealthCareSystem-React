import React from "react";
import { Link } from "react-router-dom";
import img9 from "../assets/404.jpeg";

import "../styles/Notfound.css";

function Notfound() {
    return (
      <div>
        <div>
      <h1 style={{color: "#ffff"}}>404 - Not Found!</h1>
      <Link to="/" style={{color: "#ffff"}}>Go Home</Link>
    </div>
        <center className="imagedoc">
        <img src={img9} alt="not found" style={{marginBottom: "188px"}} />
        </center>
      </div>
    );
  }

  export default Notfound;
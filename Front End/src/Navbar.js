import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <h4>
        <Link to="/academicWriting">Academic Writing</Link>
      </h4>
      <h4>
        <Link to="/rickrolled">Surprise</Link>
      </h4>
      <h4>
        <Link to="/photoalbum">Photo album</Link>
      </h4>
      <h4>
        <Link to="/resume">Resume</Link>
      </h4>
      <h4>
        <Link to="/posts">Posts</Link>
      </h4>
    </nav>
  );
}

export default Navbar;

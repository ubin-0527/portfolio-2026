import { Link } from "react-router-dom";
import React from "react";

function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>This is my Projects page.</p>

      <Link to="/projects/prolog">ProLog</Link>
      <br />
      <Link to="/projects/slotion">Slotion</Link>
      <br />
      <Link to="/projects/cuddleworks">Cuddleworks</Link>
      <br />
    </div>
  );
}

export default Projects;

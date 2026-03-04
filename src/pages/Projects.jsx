import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import uiuxBox    from "../assets/project/uiux-box.png";
import uiuxPc     from "../assets/project/uiux-pc.png";
import uiuxMobile from "../assets/project/uiux-mobile.png";
import cursorImg  from "../assets/project/cursor.png";

function Projects() {
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setCursor({ visible: true, x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursor((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="projects-page">

      {cursor.visible && (
        <img
          src={cursorImg}
          className="projects-cursor"
          style={{ left: cursor.x, top: cursor.y }}
          alt=""
          aria-hidden="true"
        />
      )}

      <Link to="/prolog" className="projects-stack" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <img src={uiuxMobile} alt="UI/UX Mobile" className="projects-stack__img" style={{ zIndex: 1 }} />
        <img src={uiuxPc}     alt="UI/UX PC"     className="projects-stack__img" style={{ zIndex: 4 }} />
        <img src={uiuxBox}    alt="UI/UX Box"    className="projects-stack__img" style={{ zIndex: 5 }} />
      </Link>

    </div>
  );
}

export default Projects;

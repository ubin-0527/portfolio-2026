import { useNavigate, useLocation } from "react-router-dom";
import NavButton from "./NavButton";
import "./SideNavBar.css";

function SideNavBar({ isVisible = true }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="side-navbar">
      <div className={`side-navbar__animator${isVisible ? "" : " side-navbar__animator--hidden"}`}>
        <div className="side-navbar__bar" />
        <div className="side-navbar__buttons">
          <NavButton floor="3F" label="HOME"  onClick={() => navigate("/")}         active={pathname === "/"}         />
          <NavButton floor="2F" label="WORK"  onClick={() => navigate("/projects")} active={pathname === "/projects"} />
          <NavButton floor="1F" label="ABOUT" onClick={() => navigate("/about")}    active={pathname === "/about"}    />
        </div>
        <div className="side-navbar__bar" />
      </div>
    </nav>
  );
}

export default SideNavBar;

import { useLocation } from "react-router-dom";
import Icon from "./Icon";
import NavButton from "./NavButton";
import logo from "../assets/home/uj-logo.svg";
import "./TopNavBar.css";

const floorMap = {
  "/":         "3F",
  "/projects": "2F",
  "/about":    "1F",
};

function TopNavBar({ contentVisible = true, onToggleFullscreen, onToggleSideNav }) {
  const { pathname } = useLocation();
  const floor = floorMap[pathname] ?? "—";

  return (
    <header className="top-navbar">
      <button
        className={`top-navbar__fullscreen${contentVisible ? "" : " top-navbar__fullscreen--active"}`}
        type="button"
        aria-label="Toggle fullscreen"
        onClick={onToggleFullscreen}
      >
        <Icon name="fullscreen" size={40} weight={300} className="top-navbar__fullscreen-icon" />
      </button>

      <img
        src={logo}
        alt="UJ logo"
        className={`top-navbar__logo${contentVisible ? "" : " top-navbar__logo--hidden"}`}
      />

      <div className={`top-navbar__content${contentVisible ? "" : " top-navbar__content--hidden"}`}>
        <NavButton
          floor={floor}
          onClick={onToggleSideNav}
          compact
        />
      </div>
    </header>
  );
}

export default TopNavBar;

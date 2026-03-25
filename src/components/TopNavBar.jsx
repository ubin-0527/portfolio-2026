import { useLocation, Link } from "react-router-dom";
import Icon from "./Icon";
import NavButton from "./NavButton";
import logo from "../assets/home/uj-logo.svg";
import longArrow from "../assets/long-arrow.svg";
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
      <Link to="/about" state={{ tab: "Contact Info" }} className={`top-navbar__contact${contentVisible ? "" : " top-navbar__contact--hidden"}`}>
        <span className="top-navbar__contact-text">Contact Info</span>
        <img src={longArrow} alt="" aria-hidden="true" className="top-navbar__contact-arrow" />
      </Link>
    </header>
  );
}

export default TopNavBar;

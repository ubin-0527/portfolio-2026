import "./Navbar.css";
import logo from "../assets/ubin-jung-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <img
          className="navbar__logo"
          src={logo}
          alt="Ubin Jung"
        />
        <div className="navbar__buttons">
          <button type="button" className="navbar__btn">Home</button>
          <button type="button" className="navbar__btn">About Me</button>
          <button type="button" className="navbar__btn">Projects</button>
          <button type="button" className="navbar__btn">Contact</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

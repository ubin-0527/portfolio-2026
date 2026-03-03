import "./NavButton.css";
import Icon from "./Icon";

function NavButton({ floor, label, onClick, active = false, compact = false }) {
  const classes = [
    "nav-btn",
    active  ? "nav-btn--active"  : "",
    compact ? "nav-btn--compact" : "",
  ].filter(Boolean).join(" ");

  return (
    <button className={classes} onClick={onClick} type="button">
      <Icon name="arrows_more_up" size={24} weight={300} className="nav-btn__icon" />
      <div className="nav-btn__text">
        <span className="nav-btn__floor">{floor}</span>
        {!compact && <span className="nav-btn__label">{label}</span>}
      </div>
    </button>
  );
}


export default NavButton;

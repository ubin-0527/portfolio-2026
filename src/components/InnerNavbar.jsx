import Icon from "./Icon";
import "./InnerNavbar.css";

function InnerNavbar({ stepNumber, pageTitle, onPrevious, onNext }) {
  return (
    <nav className="inner-navbar">
      <button
        className="inner-navbar__button inner-navbar__button--left"
        onClick={onPrevious}
        aria-label="Previous section"
      >
        <div className="inner-navbar__button-circle">
          <Icon name="chevron_left" size={24} weight={600} className="inner-navbar__icon" />
        </div>
      </button>

      <div className="inner-navbar__center">
        <span className="inner-navbar__step">Step {stepNumber}.</span>
        <span className="inner-navbar__title">{pageTitle}</span>
      </div>

      <button
        className="inner-navbar__button inner-navbar__button--right"
        onClick={onNext}
        aria-label="Next section"
      >
        <div className="inner-navbar__button-circle">
          <Icon name="chevron_right" size={24} weight={600} className="inner-navbar__icon" />
        </div>
      </button>
    </nav>
  );
}

export default InnerNavbar;

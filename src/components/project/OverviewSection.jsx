import { useState, useEffect } from "react";
import "./OverviewSection.css";

function OverviewSection({ objective, role, contributions, images }) {
  const [currentIndex, setCurrentIndex]       = useState(0);
  const [transitionState, setTransitionState] = useState("idle");

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setTransitionState("exiting");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTransitionState("entering");

        setTimeout(() => setTransitionState("idle"), 500);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  const animClass =
    transitionState === "exiting"  ? "overview-section__image--exiting"  :
    transitionState === "entering" ? "overview-section__image--entering" : "";

  return (
    <section className="overview-section">

      <h2 className="overview-section__heading">Overview</h2>

      <div className="overview-section__body">

        <div className="overview-section__left">

          <div className="overview-section__group">
            <h3 className="overview-section__label">Objective</h3>
            <p className="overview-section__text">{objective}</p>
          </div>

          <div className="overview-section__group">
            <h3 className="overview-section__label">Role</h3>
            <p className="overview-section__text">{role}</p>
          </div>

          <div className="overview-section__group">
            <h3 className="overview-section__label">Contributions</h3>
            <ul className="overview-section__list">
              {contributions?.map((item, index) => (
                <li key={index} className="overview-section__text">{item}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="overview-section__right">
          {images?.[currentIndex] && (
            <img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={`overview-section__image ${animClass}`}
            />
          )}
        </div>

      </div>
    </section>
  );
}

export default OverviewSection;

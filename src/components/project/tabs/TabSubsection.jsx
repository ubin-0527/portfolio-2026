import { useState, useEffect } from "react";
import "./TabSubsection.css";
import exclamationIcon from "../../../assets/prolog/exclamation-button.png";

function TabSubsection({ title, content, list, listMarginTop, listBelow, listBelowIcon, images, stackImages, isLast }) {
  const [currentIndex, setCurrentIndex]       = useState(0);
  const [transitionState, setTransitionState] = useState("idle");

  const isCarousel = images && images.length > 1 && !stackImages;

  useEffect(() => {
    if (!isCarousel) return;

    const interval = setInterval(() => {
      setTransitionState("exiting");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTransitionState("entering");
        setTimeout(() => setTransitionState("idle"), 500);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, [isCarousel, images]);

  const animClass =
    transitionState === "exiting"  ? "tab-subsection__carousel-img--exiting"  :
    transitionState === "entering" ? "tab-subsection__carousel-img--entering" : "";

  return (
    <div
      className="tab-subsection"
      style={{ borderBottom: isLast ? "none" : "1px solid #343434" }}
    >
      <div className="tab-subsection__row">
        <h4 className="tab-subsection__title">{title}</h4>

        <div className="tab-subsection__content">
          {content && <p>{content}</p>}

          {list && (
            <ul className="tab-subsection__list" style={listMarginTop ? { marginTop: listMarginTop } : undefined}>
              {list.map((item, i) => (
                <li key={i} className="tab-subsection__list-item">
                  <img src={exclamationIcon} alt="" aria-hidden="true" className="tab-subsection__list-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {images && (
        <div className="tab-subsection__images">
          {isCarousel ? (
            <div className="tab-subsection__carousel">
              <img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={`tab-subsection__carousel-img ${animClass}`}
              />
            </div>
          ) : (
            images.map((image, i) => (
              <img key={i} src={image.src} alt={image.alt} />
            ))
          )}
        </div>
      )}

      {listBelow && (
        <ul className="tab-subsection__list tab-subsection__list--below">
          {listBelow.map((item, i) => (
            <li key={i} className="tab-subsection__list-item">
              <img src={exclamationIcon} alt="" aria-hidden="true" className="tab-subsection__list-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TabSubsection;

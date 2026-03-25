import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import projects from "../data/projects";

const ITEM_WIDTH = 400;
const GAP        = 104;
const COUNT      = projects.length;

// Triple the array: clones before + real + clones after
const extended = [...projects, ...projects, ...projects];

function Projects() {
  // Start at COUNT (first real item in the middle copy)
  const [extendedIndex, setExtendedIndex] = useState(COUNT);
  const [noTransition, setNoTransition]   = useState(false);
  const navigate = useNavigate();

  const realIndex = extendedIndex % COUNT;
  const selected  = projects[realIndex];

  const handlePrev = () => setExtendedIndex((prev) => prev - 1);
  const handleNext = () => setExtendedIndex((prev) => prev + 1);

  // After each slide animation ends, silently snap back into the real zone
  const handleTransitionEnd = useCallback(() => {
    let snapped = extendedIndex;
    if (extendedIndex < COUNT)         snapped = extendedIndex + COUNT;
    if (extendedIndex >= COUNT * 2)    snapped = extendedIndex - COUNT;

    if (snapped !== extendedIndex) {
      setNoTransition(true);
      setExtendedIndex(snapped);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoTransition(false))
      );
    }
  }, [extendedIndex]);

  const selectedCenter = extendedIndex * (ITEM_WIDTH + GAP) + ITEM_WIDTH / 2;
  const trackOffset    = `calc(50vw - ${selectedCenter}px)`;

  return (
    <div className="projects-page">

      {/* Title bar */}
      <div className="projects-titlebar">
        <button className="projects-titlebar__arrow" onClick={handlePrev} aria-label="Previous project">‹</button>
        <div className="projects-titlebar__info">
          <span className="projects-titlebar__category">{selected.category}</span>
          <h1 className="projects-titlebar__title">{selected.title}</h1>
          <div className="projects-titlebar__bar"></div>
        </div>
        <button className="projects-titlebar__arrow" onClick={handleNext} aria-label="Next project">›</button>
      </div>

      {/* Thumbnails carousel */}
      <div className="projects-thumbnails">
        <div
          className="projects-thumbnails__track"
          style={{
            transform: `translateX(${trackOffset})`,
            transition: noTransition ? "none" : "transform 500ms ease-in-out",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((project, index) => (
            <button
              key={`${project.id}-${index}`}
              className={`projects-thumbnails__item ${index === extendedIndex ? "projects-thumbnails__item--active" : ""} ${project.comingSoon ? "projects-thumbnails__item--coming-soon" : ""}`}
              onClick={() => {
                if (index === extendedIndex && !project.comingSoon) navigate(project.route);
                else if (index !== extendedIndex) setExtendedIndex(index);
              }}
            >
              <img src={project.thumbnail} alt={project.title} />
              {project.comingSoon && <span className="projects-thumbnails__coming-soon">Coming Soon</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="projects-description">
        <img
          key={selected.id}
          src={selected.description}
          alt={`${selected.title} description`}
        />
      </div>

    </div>
  );
}

export default Projects;

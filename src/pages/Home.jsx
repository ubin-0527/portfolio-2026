import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import assets06 from "../assets/home/assets-06.webp";
import aboutMe from "../assets/home/about-me.webp";
import frames02 from "../assets/home/frames-02.webp";
import frames03 from "../assets/home/frames-03.webp";
import frames04 from "../assets/home/frames-04.webp";
import frames05 from "../assets/home/frames-05.webp";
import aboutMeContent from "../data/aboutMe.json";
import Icon from "../components/Icon";

const PROJECT_TOOLTIPS = {
  frames02: { category: "—", title: "Coming soon", timeframe: "—" },
  frames03: { category: "—", title: "Coming soon", timeframe: "—" },
  frames04: { category: "UI/UX", title: "ProLog", timeframe: "2025" },
  frames05: { category: "—", title: "Coming soon", timeframe: "—" },
};

function Home() {
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    document.body.classList.add("home-page-active");
    return () => document.body.classList.remove("home-page-active");
  }, []);

  useEffect(() => {
    if (tooltip) document.body.classList.add("home-tooltip-visible");
    else document.body.classList.remove("home-tooltip-visible");
    return () => document.body.classList.remove("home-tooltip-visible");
  }, [tooltip]);

  const showTooltip = (key, e) => {
    setTooltip({
      ...PROJECT_TOOLTIPS[key],
      x: e.clientX,
      y: e.clientY,
    });
  };

  const hideTooltip = () => setTooltip(null);

  const moveTooltip = (e) => {
    if (tooltip) setTooltip((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY } : null));
  };

  return (
    <div className="home-page">
      <section className="home-page__hero">
        <img
          className="home-page__hero-img"
          src={assets06}
          alt=""
        />
      </section>
      <section className="about-me-section">
        <img
          className="about-me-section__img"
          src={aboutMe}
          alt=""
        />
        <div className="about-me-section__text-container">
          <p className="about-me-section__body">{aboutMeContent.body}</p>
          <p className="about-me-section__page">{aboutMeContent.page}</p>
        </div>
      </section>
      <section className="projects-section">
        <div className="projects-section__row projects-section__row--top">
          <span
            className="projects-section__btn projects-section__btn--disabled"
            aria-disabled="true"
            onMouseEnter={(e) => showTooltip("frames05", e)}
            onMouseMove={moveTooltip}
            onMouseLeave={hideTooltip}
          >
            <img className="projects-section__img" src={frames05} alt="" />
          </span>
          <Link
            to="/draftprolog"
            className="projects-section__btn"
            aria-label="Open ProLog project"
            onMouseEnter={(e) => showTooltip("frames04", e)}
            onMouseMove={moveTooltip}
            onMouseLeave={hideTooltip}
          >
            <img className="projects-section__img" src={frames04} alt="" />
          </Link>
        </div>
        <div className="projects-section__row projects-section__row--bottom">
          <span
            className="projects-section__btn projects-section__btn--disabled"
            aria-disabled="true"
            onMouseEnter={(e) => showTooltip("frames03", e)}
            onMouseMove={moveTooltip}
            onMouseLeave={hideTooltip}
          >
            <img className="projects-section__img" src={frames03} alt="" />
          </span>
          <span
            className="projects-section__btn projects-section__btn--disabled"
            aria-disabled="true"
            onMouseEnter={(e) => showTooltip("frames02", e)}
            onMouseMove={moveTooltip}
            onMouseLeave={hideTooltip}
          >
            <img className="projects-section__img" src={frames02} alt="" />
          </span>
        </div>
      </section>

      {tooltip && (
        <div
          className="home-tooltip"
          style={{ left: tooltip.x + 16, top: tooltip.y + 16 }}
          aria-live="polite"
        >
          <span className="home-tooltip__category">{tooltip.category}</span>
          <span className="home-tooltip__title">{tooltip.title}</span>
          <span className="home-tooltip__timeframe">{tooltip.timeframe}</span>
        </div>
      )}

      <footer className="home-footer">
        <div className="home-footer__inner">
          <h2 className="home-footer__title">Contact me</h2>
          <h3 className="home-footer__subtitle">Email</h3>
          <p className="home-footer__row">
            <Icon name="mail" size={20} className="home-footer__icon" />
            <span>ubinjung1123@gmail.com</span>
          </p>
          <h3 className="home-footer__subtitle">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/ubinjanejung/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-footer__btn"
          >
            click me
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

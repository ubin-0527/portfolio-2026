import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";
import aboutBg from "../assets/about-me_bg.png";

const tabs = ["About Me", "Contact Info"];

function About() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.state?.tab && tabs.includes(location.state.tab)
      ? location.state.tab
      : tabs[0]
  );

  useEffect(() => {
    if (location.state?.tab && tabs.includes(location.state.tab)) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <div className="about-page">
      <div className="about-page__image-wrapper">
        <img src={aboutBg} alt="" className="about-page__bg" />

        <div className="about-page__content">
        <nav className="about-page__nav">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`about-page__tab ${activeTab === tab ? "about-page__tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="about-page__tab-content">
          {activeTab === "About Me" && (
            <div className="about-page__hello">
              <p>
                My name is Ubin, and I am an empathetic designer with two years
                of experience. The strength of my work lies in a strong research
                process, thorough and detailed solutions, and&mdash;above
                all&mdash;creativity.
              </p>
              <p>
                I enjoy creating unique, maximal designs, but I am equally
                skilled at building feasible products and adapting to a wide
                range of design themes.
              </p>
            </div>
          )}

          {activeTab === "Contact Info" && (
            <div className="about-page__contact">
              <div className="about-page__contact-row">
                <span className="about-page__contact-label">Email</span>
                <a href="mailto:ubinjung1123@gmail.com">ubinjung1123@gmail.com</a>
              </div>
              <div className="about-page__contact-row">
                <span className="about-page__contact-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/ubinjanejung" target="_blank" rel="noopener noreferrer">
                  www.linkedin.com/in/ubinjanejung
                </a>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;

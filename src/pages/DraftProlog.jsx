import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import DraftHero from "../components/DraftHero";
import DraftSummary from "../components/DraftSummary";
import InnerNavbar from "../components/InnerNavbar";
import drafthero from "../data/drafthero";
import "./DraftProlog.css";

const stepImages = import.meta.glob("../assets/step-*.png", {
  eager: true,
  import: "default",
});

// Define sections for navigation
const sections = [
  { step: 1, title: "Research & Ideation" },
  { step: 2, title: "Lo-fi Prototype" },
  { step: 3, title: "Branding" },
  { step: 4, title: "Mid-fi Prototype" },
  { step: 5, title: "Final Product" },
];

function DraftProlog() {
  const [currentSection, setCurrentSection] = useState(0);
  const stepNumber = sections[currentSection].step;
  const pageTitle = sections[currentSection].title;

  const stepImageSrc =
    Object.entries(stepImages).find(([path]) =>
      path.endsWith(`step-${stepNumber}.png`)
    )?.[1] ?? null;

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="draft-prolog-page">
      <Navbar />
      <section className="draft-prolog-bleed">
        <BackButton />
        <div className="draft-prolog-page__content">
          <DraftHero project={drafthero} />
        </div>
      </section>
      <section className="draft-prolog-bleed draft-prolog-section-summary">
        <div className="draft-prolog-page__content">
          <DraftSummary />
        </div>
      </section>
      <section className="draft-prolog-bleed">
        <h2 className="draft-prolog-section-title">Project Development</h2>
        <div className="draft-prolog-page__content">
          <InnerNavbar
            stepNumber={stepNumber}
            pageTitle={pageTitle}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
        {stepImageSrc && (
          <div className="draft-prolog-fullbleed-wrapper">
            <img
              className="draft-prolog-fullbleed-image"
              src={stepImageSrc}
              alt={`Step ${stepNumber} - ${pageTitle}`}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default DraftProlog;

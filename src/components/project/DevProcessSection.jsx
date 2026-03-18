import { useState } from "react";
import "./DevProcessSection.css";
import ResearchTab     from "./tabs/ResearchTab";
import IterationsTab   from "./tabs/IterationsTab";
import BrandingTab     from "./tabs/BrandingTab";
import FinalProductTab from "./tabs/FinalProductTab";
import PromoTab        from "./tabs/PromoTab";

const TABS = ["01 Research", "02 Iterations", "03 Branding", "04 Final Product", "05 Promo Assets"];

const TAB_COMPONENTS = {
  "01 Research":      <ResearchTab />,
  "02 Iterations":    <IterationsTab />,
  "03 Branding":      <BrandingTab />,
  "04 Final Product": <FinalProductTab />,
  "05 Promo Assets":  <PromoTab />,
};

function DevProcessSection() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="devprocess-section">

      <h2 className="devprocess-section__heading">Development Process</h2>

      <nav className="devprocess-section__nav">
        {TABS.map((tab, index) => {
          const borderStyle = {
            borderLeft:  index > 0                  ? "1px solid #343434" : "none",
            borderRight: index < TABS.length - 1    ? "1px solid #343434" : "none",
          };

          return (
            <button
              key={tab}
              style={borderStyle}
              className={`devprocess-section__tab ${activeTab === tab ? "devprocess-section__tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </nav>

      <div className="devprocess-section__content">
        {TAB_COMPONENTS[activeTab]}
      </div>

    </section>
  );
}

export default DevProcessSection;

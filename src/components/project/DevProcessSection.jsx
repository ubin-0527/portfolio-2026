import { useState } from "react";
import "./DevProcessSection.css";

function DevProcessSection({ tabs }) {
  const tabNames = tabs.map((t) => t.name);
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <section className="devprocess-section">

      <h2 className="devprocess-section__heading">Development Process</h2>

      <nav className="devprocess-section__nav">
        {tabs.map((tab, index) => {
          const borderStyle = {
            borderLeft:  index > 0                  ? "1px solid #343434" : "none",
            borderRight: index < tabs.length - 1    ? "1px solid #343434" : "none",
          };

          return (
            <button
              key={tab.name}
              style={borderStyle}
              className={`devprocess-section__tab ${activeTab === tab.name ? "devprocess-section__tab--active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          );
        })}
      </nav>

      <div className="devprocess-section__content">
        {tabs.find((t) => t.name === activeTab)?.component}
      </div>

    </section>
  );
}

export default DevProcessSection;

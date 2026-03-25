import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./PromoTab.css";
import mockup1 from "../../../assets/prolog/mockup-1.png";
import mockup2 from "../../../assets/prolog/mockup-2.png";
import brochure from "../../../assets/prolog/brochure.png";
import brochureDesign1 from "../../../assets/prolog/brochure_design-1.png";
import brochureDesign2 from "../../../assets/prolog/brochure_design-2.png";
import cardMockup from "../../../assets/prolog/card_mockup.png";

const subsections = [
  {
    title: "Promo Video",
    content: null,
    list: null,
    images: null,
    videoId: "GpJWiQU7rRQ",
    listBelow: null,
  },
  {
    title: "Brochure",
    content: null,
    list: null,
    images: [{ src: brochure, alt: "Brochure" }],
    listBelow: null,
  },
  {
    title: "Business Card",
    content: null,
    list: null,
    images: [{ src: cardMockup, alt: "Business card mockup" }],
    listBelow: null,
  },
  {
    title: "Mock-up",
    content: null,
    list: null,
    images: null,
    listBelow: null,
  },
];

function PromoTab() {
  return (
    <div className="promo-tab">

      <TabHeader step="Step 05" name="Promo Assets" />

      <div className="promo-tab__subsections">
        {subsections.map((subsection, index) => {
          const hasPair = subsection.title === "Brochure" || subsection.title === "Mock-up";
          const isLastSubsection = index === subsections.length - 1;

          return (
            <div key={index} className={hasPair ? "promo-tab__group" : undefined}
              style={hasPair && !isLastSubsection ? { borderBottom: "1px solid #343434" } : undefined}
            >
              <TabSubsection
                {...subsection}
                isLast={hasPair || (!subsection.videoId && isLastSubsection)}
              />
              {subsection.videoId && (
                <div
                  className="promo-tab__video"
                  style={{ borderBottom: isLastSubsection ? "none" : "1px solid #343434" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${subsection.videoId}`}
                    title="Promo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {subsection.title === "Brochure" && (
                <div className="promo-tab__pair">
                  <img src={brochureDesign1} alt="Brochure design 1" />
                  <img src={brochureDesign2} alt="Brochure design 2" />
                </div>
              )}
              {subsection.title === "Mock-up" && (
                <div className="promo-tab__pair">
                  <img src={mockup1} alt="Mock-up 1" />
                  <img src={mockup2} alt="Mock-up 2" />
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default PromoTab;

import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./PromoTab.css";
import mockup1 from "../../../assets/prolog/mockup-1.png";
import mockup2 from "../../../assets/prolog/mockup-2.png";
import brochure from "../../../assets/prolog/brochure.png";

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
    title: "Mock-up",
    content: null,
    list: null,
    images: [
      { src: mockup1, alt: "Mock-up 1" },
      { src: mockup2, alt: "Mock-up 2" },
    ],
    stackImages: true,
    listBelow: null,
  },
  {
    title: "Brochure",
    content: null,
    list: null,
    images: [{ src: brochure, alt: "Brochure" }],
    listBelow: null,
  },
];

function PromoTab() {
  return (
    <div className="promo-tab">

      <TabHeader step="Step 05" name="Promo Assets" />

      <div className="promo-tab__subsections">
        {subsections.map((subsection, index) => (
          <div key={index}>
            <TabSubsection
              {...subsection}
              isLast={!subsection.videoId && index === subsections.length - 1}
            />
            {subsection.videoId && (
              <div
                className="promo-tab__video"
                style={{ borderBottom: index === subsections.length - 1 ? "none" : "1px solid #343434" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${subsection.videoId}`}
                  title="Promo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default PromoTab;

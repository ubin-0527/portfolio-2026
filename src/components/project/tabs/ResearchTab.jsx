import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./ResearchTab.css";
import background1 from "../../../assets/prolog/background-1.png";
import background2 from "../../../assets/prolog/background-2.png";
import persona from "../../../assets/prolog/personas.png";

const groups = [
  {
    image: { src: background1, alt: "Research background" },
    subsections: [
      {
        title: "Background",
        content: "Skilled trades apprenticeships are long and demanding journeys that require individuals to complete approximately 4,000 hours of practical work experience alongside academic courses at designated institutions, all while managing their financial responsibilities.",
        list: null,
        images: null,
      },
      {
        title: "Problem",
        content: "Current official websites for skilled trades apprentices often fail to provide sufficient clarity to support apprentices through this complex process.",
        list: [
          "Invisible/missing progress",
          "Scattered and dense resources",
          "Websites not built for mobile use with difficult navigation",
        ],
        listMarginTop: "32px",
        images: null,
      },
    ],
  },
  {
    image: { src: background2, alt: "Research background 2" },
    subsections: [
      {
        title: "Target Audience",
        content: "The problem is all the more challenging for neurodivergent people in the field. According to TalentCanada.com, 20% of Canadian population are neurodivergent, who struggle with navigating through dense information and organization. This statistic required an urgent solution for one of the highest in-demand occupational field of skilled trades.",
        list: null,
        images: null,
      },
      {
        title: "User Persona",
        content: null,
        list: null,
        images: [{ src: persona, alt: "User Persona" }],
      },
    ],
  },
];

function ResearchTab() {
  return (
    <div className="research-tab">

      <TabHeader step="Step 01" name="Research" />

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="research-tab__group">

          <div className="research-tab__image">
            <img src={group.image.src} alt={group.image.alt} />
          </div>

          {group.subsections.length > 0 && (
            <div className="research-tab__subsections">
              {group.subsections.map((subsection, index) => (
                <TabSubsection
                  key={index}
                  {...subsection}
                  isLast={index === group.subsections.length - 1}
                />
              ))}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}

export default ResearchTab;

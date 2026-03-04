import TabHeader from "./TabHeader";
import "./ResearchTab.css";
import background1 from "../../../assets/prolog/background-1.png";
import background2 from "../../../assets/prolog/background-2.png";
import persona1 from "../../../assets/prolog/persona-1.png";
import persona2 from "../../../assets/prolog/persona-2.png";

const groups = [
  {
    image: { src: background1, alt: "Research background" },
    subsections: [
      {
        title: "Background",
        content: "Skilled trades apprenticeships are long and demanding journeys that require individuals to complete approximately 4,000 hours of practical work experience alongside academic courses at designated institutions, all while managing their financial responsibilities.",
        list: null,
      },
      {
        title: "Problem",
        content: "Current official websites for skilled trades apprentices often fail to provide sufficient clarity to support apprentices through this complex process.",
        list: [
          "Invisible/missing progress",
          "Scattered and dense resources",
          "Websites not built for mobile use with difficult navigation",
        ],
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
        images: [
          { src: persona1, alt: "User Persona 1" },
          { src: persona2, alt: "User Persona 2" },
        ],
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
              {group.subsections.map((subsection, index) => {
                const isLast = index === group.subsections.length - 1;
                return (
                  <div
                    key={index}
                    className="research-tab__subsection"
                    style={{ borderBottom: isLast ? "none" : "1px solid #343434" }}
                  >
                    <h4 className="research-tab__subsection-title">{subsection.title}</h4>
                    <div className="research-tab__subsection-content">
                      {subsection.content && <p>{subsection.content}</p>}
                      {subsection.list && (
                        <ul className="research-tab__subsection-list">
                          {subsection.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {subsection.images && (
                        <div className="research-tab__subsection-images">
                          {subsection.images.map((image, i) => (
                            <img key={i} src={image.src} alt={image.alt} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}

export default ResearchTab;

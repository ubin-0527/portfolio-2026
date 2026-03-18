import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./DeerLakeConceptTab.css";
import shot1 from "../../../assets/project/deerlake/shot-1.png";

const groups = [
  {
    image: { src: shot1, alt: "Deer Lake staircase trail" },
    subsections: [
      {
        title: "Inspiration",
        content: "Deer Lake Park in Burnaby, BC, holds a hidden gem: a 550-metre trail of 312 staircases lined with metal plaques recounting the trilogy of Chief Capilano and the monstrous King of Seal from E. Pauline Johnson\u2019s 1911 \u2018Legends of Vancouver.\u2019 Despite its rich cultural significance, the trail remains largely overlooked by visitors. The concept began with a simple question\u2014what if the trail could speak for itself?",
        list: null,
        images: null,
      },
      {
        title: "Direction",
        content: "Rather than a conventional tourism ad, the film leans into noir and detective cinema to reframe the trail as a cinematic mystery. The goal was to create intrigue rather than inform\u2014drawing viewers in with atmosphere and closing with a hook: \u2018What happened to Capilano? Come and find out.\u2019 This approach transforms an ordinary park walk into a compelling narrative experience.",
        list: null,
        images: null,
      },
    ],
  },
];

function DeerLakeConceptTab() {
  return (
    <div className="deerlake-concept-tab">

      <TabHeader step="01" name="Concept" />

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="deerlake-concept-tab__group">

          <div className="deerlake-concept-tab__image">
            <img src={group.image.src} alt={group.image.alt} />
          </div>

          {group.subsections.length > 0 && (
            <div className="deerlake-concept-tab__subsections">
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

export default DeerLakeConceptTab;

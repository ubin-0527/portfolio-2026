import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./DeerLakeProductionTab.css";
import shot9 from "../../../assets/project/deerlake/shot-9.png";
import shot7 from "../../../assets/project/deerlake/shot-7.png";

const groups = [
  {
    subsections: [
      {
        title: "Filming",
        content: "The entire film was shot on location at Deer Lake Park across multiple visits to do justice to the park\u2019s natural beauty and the story embedded within it. A tripod and camcorder setup allowed for steady, composed framing that draws the viewer deeper into the trail with each scene. Deliberate pacing mirrors the experience of walking the staircases\u2014each step revealing another plaque, another fragment of the story.",
        list: null,
        images: [
          { src: shot9, alt: "Deer Lake filming shot" },
        ],
        stackImages: true,
      },
      {
        title: "Aesthetic Choices",
        content: "The footage was graded in warm amber tones to evoke a sense of age and mystery, as if the trail itself belongs to another era. The noir-inspired visual language\u2014deep shadows, high contrast, and deliberate framing\u2014transforms the park\u2019s natural environment into something cinematic. A jazz-inflected soundtrack underscores the detective-film atmosphere, guiding the audience through the narrative without narration.",
        list: null,
        images: [
          { src: shot7, alt: "Deer Lake aesthetic shot" },
        ],
        stackImages: true,
      },
    ],
  },
];

function DeerLakeProductionTab() {
  return (
    <div className="deerlake-production-tab">

      <TabHeader step="02" name="Production" />

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="deerlake-production-tab__group">

          <div className="deerlake-production-tab__subsections">
            {group.subsections.map((subsection, index) => (
              <TabSubsection
                key={index}
                {...subsection}
                isLast={index === group.subsections.length - 1}
              />
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default DeerLakeProductionTab;

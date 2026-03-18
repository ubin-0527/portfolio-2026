import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./DeerLakeMotionTab.css";
import thumbnail from "../../../assets/project/deerlake/deerlake-thumbnail-photo.png";
import shot4 from "../../../assets/project/deerlake/shot-4.png";
import shot5 from "../../../assets/project/deerlake/shot-5.png";
import shot8 from "../../../assets/project/deerlake/shot-8.png";

const groups = [
  {
    subsections: [
      {
        title: "Vector Illustrations",
        content: "To bridge the gap between live footage and the folklore being told, custom vector graphics were created to represent key moments from E. Pauline Johnson\u2019s narrative. These illustrations appear as stylized overlays, adding a layer of visual storytelling that the camera alone could not achieve. The graphic style draws from indigenous art motifs while maintaining a contemporary, cinematic feel.",
        list: null,
        images: [
          { src: thumbnail, alt: "Deer Lake thumbnail" },
          { src: shot4, alt: "Deer Lake shot 4" },
          { src: shot5, alt: "Deer Lake shot 5" },
          { src: shot8, alt: "Deer Lake shot 8" },
        ],
        stackImages: true,
      },
      {
        title: "Post-Production",
        content: "The edit was built around rhythm\u2014matching cuts to the jazz soundtrack and allowing moments of stillness to let the atmosphere breathe. A fisheye lens effect further embraces the retro cinematography aesthetic while injecting a playful, offbeat energy into the visuals. Colour grading unified the footage under a warm amber palette, while subtle vignetting and grain were added to reinforce the noir tone. The motion graphics were composited to feel integrated rather than overlaid, ensuring the final piece reads as a cohesive cinematic experience from start to finish.",
        list: null,
        images: null,
      },
    ],
  },
];

function DeerLakeMotionTab() {
  return (
    <div className="deerlake-motion-tab">

      <TabHeader step="03" name="Motion Graphics" />

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="deerlake-motion-tab__group">

          <div className="deerlake-motion-tab__subsections">
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

export default DeerLakeMotionTab;

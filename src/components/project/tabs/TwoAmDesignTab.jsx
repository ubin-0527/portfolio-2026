import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./TwoAmDesignTab.css";
import thumbnail from "../../../assets/project/2am/2am-thumbnail.png";
import design1   from "../../../assets/project/2am/design-1.png";
import design2   from "../../../assets/project/2am/design-2.png";
import design3   from "../../../assets/project/2am/design-3.png";

const groups = [
  {
    image: { src: thumbnail, alt: "2AM Brain design" },
    subsections: [
      {
        title: "Background",
        content: "The energy drink market is saturated with products competing for the attention of young consumers, demanding that new entrants establish a bold and immediately recognizable visual identity. 2AM Brain is a concept energy drink brand developed to cut through that noise by speaking directly to a youth audience rooted in street culture, late-night energy, and self-expression.",
        list: null,
        images: null,
      },
      {
        title: "Design Rationale",
        content: "The central challenge was building a cohesive brand across three flavour variants \u2014 Berry, Citrus, and Tropical \u2014 while keeping each visually distinct. All three are anchored by a signature skull mascot with its cranium open, fruits and neon beams bursting outward, with the background blob pattern subtly reinforcing the brand name. The logotype, set in Grenze Gotisch with heavy outlines and the on/off icon tilted to mirror the 2 o\u2019clock position, draws on vintage tattoo aesthetics to resonate with a generation that values authenticity and edge. Custom dielines were developed for each variant, demonstrating the brand\u2019s readiness for professional print production. Bold, high-contrast colour combinations across all three cans ensure strong shelf presence while communicating the high-energy character the brand embodies.",
        list: null,
        images: [
          { src: design1, alt: "2AM Brain design 1" },
          { src: design2, alt: "2AM Brain design 2" },
          { src: design3, alt: "2AM Brain design 3" },
        ],
        stackImages: true,
      },
    ],
  },
];

function TwoAmDesignTab() {
  return (
    <div className="twoam-design-tab">

      <TabHeader step="01" name="Design" />

      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="twoam-design-tab__group">

          <div className="twoam-design-tab__image">
            <img src={group.image.src} alt={group.image.alt} />
          </div>

          {group.subsections.length > 0 && (
            <div className="twoam-design-tab__subsections">
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

export default TwoAmDesignTab;

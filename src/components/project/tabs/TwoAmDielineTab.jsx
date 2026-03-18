import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./TwoAmDielineTab.css";
import dieline1 from "../../../assets/project/2am/dieline-1.png";
import dieline2 from "../../../assets/project/2am/dieline-2.png";
import dieline3 from "../../../assets/project/2am/dieline-3.png";

const subsections = [
  {
    title: "Technical Specifications",
    content: "The 2AM Brain can is designed for the 946ml (32 oz) format—a premium mega-sized can that represents one of the largest available options in the energy drink market. This format appeals to consumers seeking extended energy and value, positioning 2AM Brain as a substantial, high-impact product that commands shelf presence. The custom dielines for each flavour variant demonstrate production-ready specifications, ensuring seamless manufacturing across the Berry, Citrus, and Tropical lines while maintaining the brand's bold visual identity across all variations.",
    list: null,
    images: [
      { src: dieline1, alt: "2AM Brain dieline 1" },
      { src: dieline2, alt: "2AM Brain dieline 2" },
      { src: dieline3, alt: "2AM Brain dieline 3" },
    ],
    stackImages: true,
  },
];

function TwoAmDielineTab() {
  return (
    <div className="twoam-dieline-tab">

      <TabHeader step="03" name="Dielines" />

      <div className="twoam-dieline-tab__subsections">
        {subsections.map((subsection, index) => (
          <TabSubsection
            key={index}
            {...subsection}
            isLast={index === subsections.length - 1}
          />
        ))}
      </div>

    </div>
  );
}

export default TwoAmDielineTab;

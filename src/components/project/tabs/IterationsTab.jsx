import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./IterationsTab.css";
import loFi   from "../../../assets/prolog/low-wireframes.png";
import midFi  from "../../../assets/prolog/mid-wireframes.png";
import quote1_1 from "../../../assets/prolog/quote1-1.png";
import quote1_2 from "../../../assets/prolog/quote1-2.png";
import quote2_1 from "../../../assets/prolog/quote2-1.png";
import quote2_2 from "../../../assets/prolog/quote2-2.png";
import quote2_3 from "../../../assets/prolog/quote2-3.png";
import quote2_4 from "../../../assets/prolog/quote2-4.png";
import quote2_5 from "../../../assets/prolog/quote2-5.png";
import quote2_6 from "../../../assets/prolog/quote2-6.png";

const subsections = [
  {
    title: "Low-Fidelity Wireframes",
    content: "The initial version of ProLog focused on the progress tracking and centralization of resource features.",
    list: null,
    images: [{ src: loFi, alt: "Low-fidelity wireframes" }],
  },
  {
    title: "User Research",
    content: "Further research and interviews have uncovered that the lack of resources was focused on the areas of finance and education.",
    list: null,
    images: [
      { src: quote1_1, alt: "User research quote 1" },
      { src: quote1_2, alt: "User research quote 2" },
    ],
    listBelow: ["Focus the Resources page on providing financial resources", "Create a separate page for study materials "],
  },
  {
    title: "Mid-Fidelity Wireframes",
    content: "As a result of the user interviews and research, mid-fidelity wireframes focused more on the study guides and financial resources, and less on hour tracking features.",
    list: null,
    images: [{ src: midFi, alt: "Mid-fidelity wireframes" }],
  },
  {
    title: "User Testing",
    content: "Mid-Fidelity User Test and User Survey uncovered errors and further pain points of the current websites.",
    list: null,
    images: [
      { src: quote2_1, alt: "User testing quote 1" },
      { src: quote2_2, alt: "User testing quote 2" },
      { src: quote2_3, alt: "User testing quote 3" },
      { src: quote2_4, alt: "User testing quote 4" },
      { src: quote2_5, alt: "User testing quote 5" },
      { src: quote2_6, alt: "User testing quote 6" },
    ],
    listBelow: ["Adjust the interface design to reflect each element’s function more clearly", "Adjust the information on the Finances page ", "Incorporate more interactive features for the Study Guide page", "Add a feature to detect errors in the officially reported work hours", "Add a feature to keep users informed of the next available enrollment date"],
  },
];

function IterationsTab() {
  return (
    <div className="iterations-tab">

      <TabHeader step="Step 02" name="Iterations" />

      <div className="iterations-tab__subsections">
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

export default IterationsTab;

import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./DcStyleguideTab.css";
import colorpalette from "../../../assets/project/dreamcreatives/dc_colorpalette.png";
import typeface from "../../../assets/project/dreamcreatives/dc_typeface.png";
import logo from "../../../assets/project/dreamcreatives/dc_logo.png";
import grid from "../../../assets/project/dreamcreatives/dc_grid.png";

const subsections = [
  {
    title: "Logo",
    content:
      "The refreshed logo retains Dream Creatives' identity while adopting a cleaner, more contemporary form that aligns with the approachable direction established during research.",
    list: null,
    images: [{ src: logo, alt: "Dream Creatives logo" }],
  },
  {
    title: "Color Palette",
    content:
      "The updated palette moves away from the overly premium feel of the original site. The new colors balance professionalism with warmth and accessibility, supporting the shift toward a broader, community-oriented audience.",
    list: null,
    images: [{ src: colorpalette, alt: "Color palette" }],
  },
  {
    title: "Typeface",
    content:
      "Typography choices were guided by the client's reference to Notion's clean interface. The selected typefaces provide clear hierarchy and readability across screen sizes while maintaining a modern, approachable tone.",
    list: null,
    images: [{ src: typeface, alt: "Typeface selection" }],
  },
  {
    title: "Grid System",
    content:
      "A responsive grid system was established to ensure consistency across the redesigned pages and to support the transition from a fixed tablet layout to a scrollable, multi-device experience.",
    list: null,
    images: [{ src: grid, alt: "Grid system" }],
  },
];

function DcStyleguideTab() {
  return (
    <div className="dc-styleguide-tab">
      <TabHeader step="Step 03" name="Styleguide" />

      <div className="dc-styleguide-tab__subsections">
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

export default DcStyleguideTab;

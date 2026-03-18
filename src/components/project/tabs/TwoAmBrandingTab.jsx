import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./TwoAmBrandingTab.css";
import logo from "../../../assets/project/2am/2am-logo.png";

const subsections = [
  {
    title: "Logo",
    content: "The 2AM Brain logotype is set in Grenze Gotisch, a blackletter-inspired typeface that channels vintage tattoo aesthetics. Heavy outlines give the wordmark durability and shelf impact, while the integrated on/off power icon \u2014 tilted to the 2 o\u2019clock position \u2014 reinforces the brand name and energy theme in a single visual mark.",
    list: null,
    images: [{ src: logo, alt: "2AM Brain logo" }],
    listBelow: null,
  },
  {
    title: "Color Palette",
    content: "Each flavour variant is defined by a high-contrast colour combination designed for maximum shelf presence. Berry uses deep purples and magentas, Citrus pairs electric yellows with bold greens, and Tropical blends vibrant oranges with hot pinks. Black serves as the unifying base across all three, grounding the palette and reinforcing the brand\u2019s late-night, high-energy identity.",
    list: null,
    images: null,
    listBelow: null,
  },
  {
    title: "Mascot",
    content: "The signature skull mascot anchors the brand\u2019s visual identity across all three variants. Depicted with its cranium split open and fruits and neon beams bursting outward, the mascot embodies the explosive energy the drink promises. The recurring blob pattern in the background subtly echoes the brain motif, tying the mascot back to the brand name.",
    list: null,
    images: null,
    listBelow: null,
  },
];

function TwoAmBrandingTab() {
  return (
    <div className="twoam-branding-tab">

      <TabHeader step="02" name="Branding" />

      <div className="twoam-branding-tab__subsections">
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

export default TwoAmBrandingTab;

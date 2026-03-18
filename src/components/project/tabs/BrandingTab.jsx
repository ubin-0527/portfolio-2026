import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./BrandingTab.css";
import logo         from "../../../assets/prolog/logo.png";
import colorpalette from "../../../assets/prolog/colorpalette.png";
import typography   from "../../../assets/prolog/typography.png";
import effect1      from "../../../assets/prolog/effect-1.png";
import effect2      from "../../../assets/prolog/effect-2.png";

const subsections = [
  {
    title: "Logo",
    content: "Symbolically, ProLog’s logo represents the apprenticeship journey. The four black boxes represent each level of apprenticeship, while the red box signifies the final goal—the Red Seal. Through a precise, geometric balance and the use of a clean sans-serif wordmark, the logo communicates trust and clarity in an efficient and direct manner.",
    list: null,
    images: [{ src: logo, alt: "ProLog logo" }],
    listBelow: null,
  },
  {
    title: "Color Palette",
    content: "A nuanced color palette was chosen to keep the interface approachable for tradespeople who are relatively unfamiliar with navigating cyberspaces, and to make sure the design doesn’t add on to the heavy materials. The orange color was chosen as an accent color, symbolizing energy and electricity, to provide an effective design hierarchy combined with the monochromatic background. ",
    list: null,
    images: [{ src: colorpalette, alt: "Color palette" }],
    listBelow: null,
  },
  {
    title: "Typeface",
    content: "ProLog’s typefaces were chosen to support the app’s informational objectives. Roboto is used as the primary typeface to clearly and efficiently convey information-dense content throughout the app. Space Grotesk serves as the secondary typeface, establishing visual hierarchy while adding contrast and visual relief through its more geometric and contemporary character.",
    list: null,
    images: [{ src: typography, alt: "Typography" }],
    listBelow: null,
  },
  {
    title: "Neu-morphism",
    content: "Subtle Neumorphism was added to the interface to emphasize the visual hierarchy of important elements of each page.",
    list: null,
    images: [
      { src: effect1, alt: "Neu-morphism effect 1" },
      { src: effect2, alt: "Neu-morphism effect 2" },
    ],
    listBelow: ["The intuitive design of Neumorphism is intended to communicate the functions of the app aesthetically and effectively, just like the art of skilled trades", "The realism of Neumorphism suggests the functions of the elements more intuitively", "All buttons and design elements meet the accessibility required sizes for minimum touch target sizes"],
  },
];

function BrandingTab() {
  return (
    <div className="branding-tab">

      <TabHeader step="Step 03" name="Branding" />

      <div className="branding-tab__subsections">
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

export default BrandingTab;

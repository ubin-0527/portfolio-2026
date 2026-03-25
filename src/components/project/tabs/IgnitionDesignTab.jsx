import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./IgnitionDesignTab.css";
import chrome from "../../../assets/project/ignition/ignition-1.png";
import obsidian from "../../../assets/project/ignition/ignition-2.png";
import gold from "../../../assets/project/ignition/ignition-3.png";

const subsections = [
  {
    title: "Background",
    content:
      "Ignition is a conceptual high-end jewelry brand born at the intersection of streetwear edge and luxury craftsmanship. The project explores how a single brand identity can stretch across three visually distinct collections\u2014Chrome, Gold, and Obsidian\u2014while maintaining a cohesive sense of attitude and exclusivity. Each collection is anchored by a hero poster and three signature pieces, all built from scratch through vector illustration, 3D modelling, and layered texturing.",
    list: null,
    images: null,
  },
  {
    title: "Chrome Collection",
    content:
      "The Chrome collection channels industrial minimalism and futuristic edge. Polished silver surfaces and sharp, angular forms define its three signature pieces, evoking the cold precision of machined metal. The accompanying poster leans into high-contrast lighting and reflective textures to amplify the collection\u2019s sleek, commanding presence.",
    list: null,
    images: [{ src: chrome, alt: "Ignition Chrome collection" }],
  },
  {
    title: "Gold Collection",
    content:
      "The Gold collection balances opulence with restraint. Warm, burnished tones and fluid sculptural silhouettes give each piece a sense of weight and heritage. The poster design draws on rich amber lighting and soft gradients to communicate timeless luxury without excess.",
    list: null,
    images: [{ src: gold, alt: "Ignition Gold collection" }],
  },
  {
    title: "Obsidian Collection",
    content:
      "The Obsidian collection embraces the brand\u2019s gothic roots most directly. Deep blacks, volcanic textures, and jagged organic forms create pieces that feel raw and elemental. The poster pairs dramatic shadow work with desaturated tones, positioning Obsidian as the darkest and most expressive line in the brand.",
    list: null,
    images: [{ src: obsidian, alt: "Ignition Obsidian collection" }],
  },
];

function IgnitionDesignTab() {
  return (
    <div className="ignition-design-tab">
      <TabHeader step="01" name="Design" />

      <div className="ignition-design-tab__subsections">
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

export default IgnitionDesignTab;

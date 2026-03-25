import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./DcResearchTab.css";
import homeOg from "../../../assets/project/dreamcreatives/dc_home_og.png";
import themeOg from "../../../assets/project/dreamcreatives/dc_theme_og.png";
import loadingOg from "../../../assets/project/dreamcreatives/dc_loading_og.png";
import resultOg from "../../../assets/project/dreamcreatives/dc_result_og.png";
import disclaimerOg from "../../../assets/project/dreamcreatives/dc_disclaimer_og.png";
import galleryOg from "../../../assets/project/dreamcreatives/dc_gallery_og.png";
import plansOg from "../../../assets/project/dreamcreatives/dc_plans_og.png";
import shareOg from "../../../assets/project/dreamcreatives/dc_share_og.png";

const subsections = [
  {
    title: "Client Brief",
    content:
      "Dream Creatives is a creative studio specializing in AI-powered photo booth experiences for weddings, corporate events, and brand activations. They approached our team during the FLUI Design Jam at Emily Carr seeking a homepage redesign that would make their product feel more approachable and easier to understand at first glance.",
    list: null,
    images: null,
  },
  {
    title: "Web Design Audit",
    content:
      "I conducted a thorough audit of Dream Creatives' existing website to identify pain points and areas for improvement. The original site was designed primarily for tablet kiosks with no scrolling, which limited how much of the product story could be communicated. Key findings included:",
    list: [
      "The homepage didn't clearly convey the real-world use case of an event-based AI photo experience",
      "The About page was too limited in demonstrating how the product actually works",
      "The contact and onboarding entry points were minimal and easy to miss",
      "The overall aesthetic leaned too premium and corporate, which could discourage broader adoption",
    ],
    listMarginTop: "32px",
    images: [
      { src: homeOg, alt: "Original homepage" },
      { src: themeOg, alt: "Original theme selection" },
      { src: loadingOg, alt: "Original loading screen" },
      { src: resultOg, alt: "Original result screen" },
      { src: disclaimerOg, alt: "Original disclaimer" },
      { src: galleryOg, alt: "Original gallery" },
      { src: plansOg, alt: "Original plans page" },
      { src: shareOg, alt: "Original share screen" },
    ],
  },
  {
    title: "Key Insights from Client Interview",
    content:
      "After the initial brief, our team interviewed the client to better understand their vision. Several important themes emerged:",
    list: [
      "The product can feel \"far-fetched\" until people try it — the redesign needs to build trust and make the value tangible",
      "They want to shift from a strictly corporate audience to a more open, community-oriented user base",
      "They referenced Notion's clean, approachable interface as an aspirational direction",
      "The Snapchat comparison was about fun photo manipulation and the social sharing loop, not the UI itself",
      "They were open to changing fonts, colors, logo, and branding to support the new direction",
    ],
    listMarginTop: "32px",
    images: null,
  },
];

function DcResearchTab() {
  return (
    <div className="dc-research-tab">
      <TabHeader step="Step 01" name="Research" />

      <div className="dc-research-tab__subsections">
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

export default DcResearchTab;

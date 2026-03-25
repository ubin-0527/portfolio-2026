import TabHeader from "./TabHeader";
import TabSubsection from "./TabSubsection";
import "./DcDesignTab.css";
import homeLo from "../../../assets/project/dreamcreatives/dc_home_lo.png";
import themeLo from "../../../assets/project/dreamcreatives/dc_theme_lo.png";
import photoLo from "../../../assets/project/dreamcreatives/dc_photo_lo.png";
import loadLo from "../../../assets/project/dreamcreatives/dc_load_lo.png";
import resultLo from "../../../assets/project/dreamcreatives/dc_result_lo.png";
import homeMid from "../../../assets/project/dreamcreatives/dc_home_mid.png";
import themeMid from "../../../assets/project/dreamcreatives/dc_theme_mid.png";
import photoMid from "../../../assets/project/dreamcreatives/dc_photo_mid.png";
import loadMid from "../../../assets/project/dreamcreatives/dc_load_mid.png";
import resultMid from "../../../assets/project/dreamcreatives/dc_result_mid.png";
import disclaimerMid from "../../../assets/project/dreamcreatives/dc_disclaimer_mid.png";
import userflow from "../../../assets/project/dreamcreatives/dc_userflow.png";

function DcDesignTab() {
  return (
    <div className="dc-design-tab">
      <TabHeader step="Step 02" name="Design" />

      <div className="dc-design-tab__subsections">
        <TabSubsection
          title="User Flow"
          content="Based on audit findings and client insights, I mapped out a revised user flow that prioritized a clearer onboarding path and a more intuitive progression from theme selection through to photo sharing."
          images={[{ src: userflow, alt: "User flow diagram" }]}
          isLast={false}
        />

        <div className="dc-design-tab__wireframes">
          <h3 className="dc-design-tab__wireframes-title">Low-Fidelity Wireframes</h3>
          <p className="dc-design-tab__wireframes-content">
            The initial wireframes focused on restructuring the homepage into a scrollable layout that could better communicate the product's value. I explored different ways to present the AI photo experience upfront, making it feel tangible rather than abstract.
          </p>
          <div className="dc-design-tab__wireframes-row">
            <img src={homeLo} alt="Low-fi home" />
            <img src={themeLo} alt="Low-fi theme selection" />
            <img src={photoLo} alt="Low-fi photo capture" />
            <img src={loadLo} alt="Low-fi loading" />
            <img src={resultLo} alt="Low-fi result" />
          </div>
        </div>

        <div className="dc-design-tab__wireframes">
          <h3 className="dc-design-tab__wireframes-title">Mid-Fidelity Wireframes</h3>
          <p className="dc-design-tab__wireframes-content">
            Mid-fidelity iterations refined the layout and interaction patterns. At this stage, I focused on balancing the approachable, community-oriented feel the client wanted with enough visual polish to maintain credibility for corporate clients.
          </p>
          <div className="dc-design-tab__wireframes-row">
            <img src={homeMid} alt="Mid-fi home" />
            <img src={themeMid} alt="Mid-fi theme selection" />
            <img src={photoMid} alt="Mid-fi photo capture" />
            <img src={loadMid} alt="Mid-fi loading" />
            <img src={resultMid} alt="Mid-fi result" />
            <img src={disclaimerMid} alt="Mid-fi disclaimer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DcDesignTab;

import TabHeader from "./TabHeader";
import "./DcFinalProductTab.css";
import homeHi from "../../../assets/project/dreamcreatives/dc_home_hi.png";
import disclaimerHi from "../../../assets/project/dreamcreatives/dc_disclaimer_hi.png";
import photoHi from "../../../assets/project/dreamcreatives/dc_photo_hi.png";
import themeHi from "../../../assets/project/dreamcreatives/dc_theme_hi.png";
import loadHi from "../../../assets/project/dreamcreatives/dc_load_hi.png";
import resultHi from "../../../assets/project/dreamcreatives/dc_result_hi.png";
import shareHi from "../../../assets/project/dreamcreatives/dc_share_hi.png";
import galleryHi from "../../../assets/project/dreamcreatives/dc_gallery_hi.png";
import plansHi from "../../../assets/project/dreamcreatives/dc_plans_hi.png";

const screens = [
  { src: homeHi, alt: "Home page", title: "Home Page" },
  { src: disclaimerHi, alt: "Disclaimer page", title: "Disclaimer Page" },
  { src: photoHi, alt: "Choose photo page", title: "Choose Photo Page" },
  { src: themeHi, alt: "Theme page", title: "Theme Page" },
  { src: loadHi, alt: "Loading page", title: "Loading Page" },
  { src: resultHi, alt: "Result page", title: "Result Page" },
  { src: shareHi, alt: "Share page", title: "Share Page" },
  { src: galleryHi, alt: "Public gallery page", title: "Public Gallery Page" },
  { src: plansHi, alt: "Plan page", title: "Plan Page" },
];

function DcFinalProductTab() {
  return (
    <div className="dc-final-product-tab">
      <TabHeader step="Step 04" name="Final Product" />

      <div className="dc-final-product-tab__images">
        {screens.map((screen) => (
          <div key={screen.title} className="dc-final-product-tab__screen">
            <h3 className="dc-final-product-tab__screen-title">{screen.title}</h3>
            <img src={screen.src} alt={screen.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DcFinalProductTab;

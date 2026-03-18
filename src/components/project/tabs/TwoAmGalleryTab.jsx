import TabHeader from "./TabHeader";
import "./TwoAmGalleryTab.css";
import mockup1 from "../../../assets/project/2am/2am-mockup-1.png";
import mockup2 from "../../../assets/project/2am/2am-mockup-2.png";
import mockup3 from "../../../assets/project/2am/2am-mockup-3.png";

function TwoAmGalleryTab() {
  return (
    <div className="twoam-gallery-tab">

      <TabHeader step="04" name="Gallery" />

      <div className="twoam-gallery-tab__images">
        <img src={mockup1} alt="2AM Brain mockup 1" />
        <img src={mockup2} alt="2AM Brain mockup 2" />
        <img src={mockup3} alt="2AM Brain mockup 3" />
      </div>

    </div>
  );
}

export default TwoAmGalleryTab;

import TabHeader from "./TabHeader";
import "./IgnitionGalleryTab.css";
import mockup1 from "../../../assets/project/ignition/ignition_mockup_1.png";
import mockup2 from "../../../assets/project/ignition/ignition_mockup_2.png";
import mockup3 from "../../../assets/project/ignition/ingition_mockup_3.png";

function IgnitionGalleryTab() {
  return (
    <div className="ignition-gallery-tab">
      <TabHeader step="02" name="Gallery" />

      <div className="ignition-gallery-tab__images">
        <img src={mockup1} alt="Ignition mockup 1" />
        <img src={mockup2} alt="Ignition mockup 2" />
        <img src={mockup3} alt="Ignition mockup 3" />
      </div>
    </div>
  );
}

export default IgnitionGalleryTab;

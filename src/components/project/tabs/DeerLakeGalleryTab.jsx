import TabHeader from "./TabHeader";
import "./DeerLakeGalleryTab.css";
import shot1 from "../../../assets/project/deerlake/shot-1.png";
import shot2 from "../../../assets/project/deerlake/shot-2.png";
import shot3 from "../../../assets/project/deerlake/shot-3.png";
import shot4 from "../../../assets/project/deerlake/shot-4.png";
import shot5 from "../../../assets/project/deerlake/shot-5.png";
import shot6 from "../../../assets/project/deerlake/shot-6.png";

function DeerLakeGalleryTab() {
  return (
    <div className="deerlake-gallery-tab">

      <TabHeader step="04" name="Gallery" />

      <div className="deerlake-gallery-tab__images">
        <img src={shot1} alt="Deer Lake shot 1" />
        <img src={shot2} alt="Deer Lake shot 2" />
        <img src={shot3} alt="Deer Lake shot 3" />
        <img src={shot4} alt="Deer Lake shot 4" />
        <img src={shot5} alt="Deer Lake shot 5" />
        <img src={shot6} alt="Deer Lake shot 6" />
      </div>

    </div>
  );
}

export default DeerLakeGalleryTab;

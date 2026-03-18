import TabHeader from "./TabHeader";
import "./FinalProductTab.css";
import dashboard from "../../../assets/prolog/dashboard.png";
import skills    from "../../../assets/prolog/skills.png";
import work      from "../../../assets/prolog/work.png";
import school    from "../../../assets/prolog/school.png";

function FinalProductTab() {
  return (
    <div className="final-product-tab">

      <TabHeader step="Step 04" name="Final Product" />

      <div className="final-product-tab__images">
        <img src={dashboard} alt="Dashboard" />
        <img src={skills}    alt="Skills" />
        <img src={work}      alt="Work" />
        <img src={school}    alt="School" />
      </div>

    </div>
  );
}

export default FinalProductTab;

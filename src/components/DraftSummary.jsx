import "./DraftSummary.css";
import draftsummary from "../assets/draftsummary.png";

function DraftSummary() {
  return (
    <section className="draft-hero">
      <div className="draft-hero__inner">
        <div className="draft-hero__content">
          {/* Project */}
          <h4 className="title">Project</h4>
          <p className="description">
            BCIT Digital Design and Development Project 2
          </p>
        </div>

        <div className="draft-hero__content">
          {/* Objective */}
          <h4 className="title">Objective</h4>
          <p className="description">
            Create a digital solution for the underrepresented
            <br />
            demographics in the field of skilled trades
          </p>
        </div>

        <div className="draft-hero__content">
          {/* Role */}
          <h4 className="title">Role</h4>
          <p className="description">Design Lead</p>
        </div>

        <div className="draft-summary__image">
          <img src={draftsummary} alt="ProLog summary mockup" />
        </div>
      </div>
    </section>
  );
}

export default DraftSummary;

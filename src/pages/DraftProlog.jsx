import React from "react";
import BackButton from "../components/BackButton";
import DraftHero from "../components/DraftHero";
import DraftSummary from "../components/DraftSummary";
import drafthero from "../data/drafthero";
import "./DraftProlog.css";


function DraftProlog() {
  return (

    <div className="draft-prolog-page">
      <section>
        <BackButton />
        <div className="draft-prolog-page__content">
          <DraftHero project={drafthero} />
        </div>
      </section>
      <section>
        <div className="draft-prolog-page__content">
          <DraftSummary />
        </div>
      </section>

      
    </div>

    


  );
}

export default DraftProlog;

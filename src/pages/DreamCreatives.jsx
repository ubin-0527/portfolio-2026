import "./DreamCreatives.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import heroData from "../data/hero";
import overviewData from "../data/overview";
import DcResearchTab from "../components/project/tabs/DcResearchTab";
import DcDesignTab from "../components/project/tabs/DcDesignTab";
import DcStyleguideTab from "../components/project/tabs/DcStyleguideTab";
import DcFinalProductTab from "../components/project/tabs/DcFinalProductTab";

const { heroImage, category, title, timeline, tags, description, links } = heroData.dreamcreatives;

const tabs = [
  { name: "01 Research", component: <DcResearchTab /> },
  { name: "02 Design", component: <DcDesignTab /> },
  { name: "03 Styleguide", component: <DcStyleguideTab /> },
  { name: "04 Final Product", component: <DcFinalProductTab /> },
];

function DreamCreatives() {
  return (
    <div className="dreamcreatives-page">
      <BackButton to="/projects" />
      <HeroSection
        heroImage={heroImage}
        category={category}
        title={title}
        timeline={timeline}
        tags={tags}
        description={description}
        links={links}
      />
      <OverviewSection {...overviewData.dreamcreatives} />
      <DevProcessSection tabs={tabs} />
      <ScrollToTopButton />
    </div>
  );
}

export default DreamCreatives;

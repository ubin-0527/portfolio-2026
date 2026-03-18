import "./TwoAm.css";
import BackButton from "../components/BackButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import TwoAmDesignTab from "../components/project/tabs/TwoAmDesignTab";
import TwoAmBrandingTab from "../components/project/tabs/TwoAmBrandingTab";
import TwoAmDielineTab from "../components/project/tabs/TwoAmDielineTab";
import TwoAmGalleryTab from "../components/project/tabs/TwoAmGalleryTab";
import heroData from "../data/hero";
import overviewData from "../data/overview";

const { heroImage, category, title, timeline, tags, description, links } = heroData.twoam;

const twoAmTabs = [
  { name: "01 Design",    component: <TwoAmDesignTab /> },
  { name: "02 Branding",  component: <TwoAmBrandingTab /> },
  { name: "03 Dielines",  component: <TwoAmDielineTab /> },
  { name: "04 Gallery",   component: <TwoAmGalleryTab /> },
];

function TwoAm() {
  return (
    <div className="twoam-page">
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
      <OverviewSection {...overviewData.twoam} />
      <DevProcessSection tabs={twoAmTabs} />
    </div>
  );
}

export default TwoAm;

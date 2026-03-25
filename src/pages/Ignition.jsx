import "./Ignition.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import IgnitionDesignTab from "../components/project/tabs/IgnitionDesignTab";
import IgnitionGalleryTab from "../components/project/tabs/IgnitionGalleryTab";
import heroData from "../data/hero";
import overviewData from "../data/overview";

const { heroImage, category, title, timeline, tags, description, links } = heroData.ignition;

const ignitionTabs = [
  { name: "01 Design",  component: <IgnitionDesignTab /> },
  { name: "02 Gallery", component: <IgnitionGalleryTab /> },
];

function Ignition() {
  return (
    <div className="ignition-page">
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
      <OverviewSection {...overviewData.ignition} />
      <DevProcessSection tabs={ignitionTabs} />
      <ScrollToTopButton />
    </div>
  );
}

export default Ignition;

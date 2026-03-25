import "./DeerLake.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import heroData from "../data/hero";
import overviewData from "../data/overview";
import DeerLakeConceptTab from "../components/project/tabs/DeerLakeConceptTab";
import DeerLakeProductionTab from "../components/project/tabs/DeerLakeProductionTab";
import DeerLakeMotionTab from "../components/project/tabs/DeerLakeMotionTab";
import DeerLakeGalleryTab from "../components/project/tabs/DeerLakeGalleryTab";

const { heroImage, category, title, timeline, tags, description, links } = heroData.deerlake;

const deerLakeTabs = [
  { name: "01 Concept",          component: <DeerLakeConceptTab /> },
  { name: "02 Production",       component: <DeerLakeProductionTab /> },
  { name: "03 Motion Graphics",  component: <DeerLakeMotionTab /> },
  { name: "04 Gallery",          component: <DeerLakeGalleryTab /> },
];

function DeerLake() {
  return (
    <div className="deerlake-page">
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
      <div className="deerlake-video">
        <iframe
          src="https://www.youtube.com/embed/ll29-vt6lEs"
          title="Deer Lake Park Short Film"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <OverviewSection {...overviewData.deerlake} />
      <DevProcessSection tabs={deerLakeTabs} />
      <ScrollToTopButton />
    </div>
  );
}

export default DeerLake;

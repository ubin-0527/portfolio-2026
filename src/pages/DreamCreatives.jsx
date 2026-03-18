import "./DreamCreatives.css";
import BackButton from "../components/BackButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import heroData from "../data/hero";
import overviewData from "../data/overview";

const { heroImage, category, title, timeline, tags, description, links } = heroData.dreamcreatives;

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
      <DevProcessSection />
    </div>
  );
}

export default DreamCreatives;

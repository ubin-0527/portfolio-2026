import "./Prolog.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import ResearchTab     from "../components/project/tabs/ResearchTab";
import IterationsTab   from "../components/project/tabs/IterationsTab";
import BrandingTab     from "../components/project/tabs/BrandingTab";
import FinalProductTab from "../components/project/tabs/FinalProductTab";
import PromoTab        from "../components/project/tabs/PromoTab";
import heroData from "../data/hero";
import overviewData from "../data/overview";

const { heroImage, category, title, timeline, tags, description, links } = heroData.prolog;

const prologTabs = [
  { name: "01 Research",      component: <ResearchTab /> },
  { name: "02 Iterations",    component: <IterationsTab /> },
  { name: "03 Branding",      component: <BrandingTab /> },
  { name: "04 Final Product", component: <FinalProductTab /> },
  { name: "05 Promo Assets",  component: <PromoTab /> },
];

function Prolog() {
  return (
    <div className="prolog-page">
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
      <OverviewSection {...overviewData.prolog} />
      <DevProcessSection tabs={prologTabs} />
      <ScrollToTopButton />
    </div>
  );
}

export default Prolog;

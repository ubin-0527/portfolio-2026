import { useEffect, useRef, useState } from "react";
import "./TwoAm.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/project/HeroSection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import GhostCursor from "../components/GhostCursor";
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
  const heroWrapperRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const el = heroWrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`twoam-page ${isHeroVisible ? "twoam-page--hero-visible" : ""}`}>
      <BackButton to="/projects" />
      <div className="twoam-hero-wrapper" ref={heroWrapperRef}>
        <GhostCursor
          trailLength={50}
          inertia={0.99}
          grainIntensity={0}
          bloomStrength={2}
          bloomRadius={0}
          brightness={4}
          color="#d241ac"
          edgeIntensity={0.8}
          zIndex={0}
          blobScale={5}
          blobRadius={0.3}
        />
        <HeroSection
          heroImage={heroImage}
          category={category}
          title={title}
          timeline={timeline}
          tags={tags}
          description={description}
          links={links}
        />
      </div>
      <OverviewSection {...overviewData.twoam} />
      <DevProcessSection tabs={twoAmTabs} />
      <ScrollToTopButton />
    </div>
  );
}

export default TwoAm;

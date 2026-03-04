import "./Prolog.css";
import HeroSection from "../components/project/HeroSection";
import GallerySection from "../components/project/GallerySection";
import OverviewSection from "../components/project/OverviewSection";
import DevProcessSection from "../components/project/DevProcessSection";
import heroData from "../data/hero";
import galleryData from "../data/gallery";
import overviewData from "../data/overview";

const { heroImage, category, title, timeline, tags, description, links } = heroData.prolog;

function Prolog() {
  return (
    <div className="prolog-page">
      <HeroSection
        heroImage={heroImage}
        category={category}
        title={title}
        timeline={timeline}
        tags={tags}
        description={description}
        links={links}
      />
      <GallerySection images={galleryData.prolog} />
      <OverviewSection {...overviewData.prolog} />
      <DevProcessSection />
    </div>
  );
}

export default Prolog;

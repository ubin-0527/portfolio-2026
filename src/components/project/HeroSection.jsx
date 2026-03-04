import Button from "../Button";
import Tag from "../Tag";
import "./HeroSection.css";

function HeroSection({ heroImage, category, title, timeline, tags, description, links }) {
  return (
    <section className="hero-section">

      {heroImage && (
        <div className="hero-section__image">
          <img src={heroImage} alt="Project hero" />
        </div>
      )}

      <div className="hero-section__content">

        <div className="hero-section__meta">
          {category && <p className="hero-section__category">{category}</p>}
          {title    && <h1 className="hero-section__title">{title}</h1>}
          {timeline && <p className="hero-section__timeline">{timeline}</p>}
        </div>

        {tags?.length > 0 && (
          <div className="hero-section__tags">
            {tags.map((tag, index) => (
              <Tag
                key={tag}
                label={tag}
                hasBorderLeft={index > 0}
                hasBorderRight={index < tags.length - 1}
              />
            ))}
          </div>
        )}

        {description && (
          <p className="hero-section__description">{description}</p>
        )}

        <div className="hero-section__actions">
          {links?.prototype && (
            <Button
              variant="link"
              onClick={() => window.open(links.prototype, "_blank")}
            >
              Prototype
            </Button>
          )}
          {links?.github && (
            <Button
              variant="link"
              onClick={() => window.open(links.github, "_blank")}
            >
              GitHub
            </Button>
          )}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;

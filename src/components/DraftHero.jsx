import Button from "./Button";
import Icon from "./Icon";
import "./DraftHero.css";
import prologMockup from "../assets/prolog-mockup.png";

function DraftHero({ project }) {
  const {
    category,
    title,
    timeframe,
    tags,
    description,
    links,
  } = project;

  return (
    <section className="draft-hero">
      <div className="draft-hero__inner">
        <div className="draft-hero__content">
          {/* Category */}
          <h4 className="draft-hero__category">{category}</h4>

          {/* Title */}
          <h1 className="draft-hero__title">{title}</h1>

          {/* Timeframe */}
          <h4 className="draft-hero__timeframe">{timeframe}</h4>

          {/* Tags */}
          <ul className="draft-hero__tags">
            {tags.map((tag) => (
              <li key={tag} className="draft-hero__tag">
                {tag}
              </li>
            ))}
          </ul>

          {/* Description */}
          <p className="draft-hero__description">{description}</p>

          {/* Actions */}
          <div className="draft-hero__actions">
            {links?.prototype && (
              <Button
                variant="primary"
                onClick={() => window.open(links.prototype, "_blank")}
              >
                Prototype
              </Button>
            )}

            {links?.github && (
              <Button
                variant="secondary"
                onClick={() => window.open(links.github, "_blank")}
              >
                GitHub
              </Button>
            )}
          </div>
        </div>

        {/* Right-side mockup image */}
        <div className="draft-hero__image">
          <img src={prologMockup} alt={`${title} mockup`} />
        </div>
      </div>
    </section>
  );
}

export default DraftHero;

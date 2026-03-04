import "./OverviewSection.css";

function OverviewSection({ objective, role, contributions, images }) {
  return (
    <section className="overview-section">

      <h2 className="overview-section__heading">Overview</h2>

      <div className="overview-section__body">

        <div className="overview-section__left">

          <div className="overview-section__group">
            <h3 className="overview-section__label">Objective</h3>
            <p className="overview-section__text">{objective}</p>
          </div>

          <div className="overview-section__group">
            <h3 className="overview-section__label">Role</h3>
            <p className="overview-section__text">{role}</p>
          </div>

          <div className="overview-section__group">
            <h3 className="overview-section__label">Contributions</h3>
            <ul className="overview-section__list">
              {contributions?.map((item, index) => (
                <li key={index} className="overview-section__text">{item}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="overview-section__right">
          {/* Carousel — effect coming later */}
          {images?.[0] && (
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="overview-section__image"
            />
          )}
        </div>

      </div>
    </section>
  );
}

export default OverviewSection;

import "./GallerySection.css";

function GallerySection({ images }) {
  return (
    <section className="gallery-section">
      <div className="gallery-section__track">
        {images?.map((image, index) => (
          <div key={index} className="gallery-section__item">
            <img src={image.src} alt={image.alt ?? `Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;

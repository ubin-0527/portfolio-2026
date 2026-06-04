import { useParams } from "react-router-dom";
import "./SummerProject.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import summerProjects from "../data/summer";

function SummerProject() {
  const { id } = useParams();
  const project = summerProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="summer-sub-page">
        <BackButton to="/summer" />
        <p style={{ padding: 80, textAlign: "center" }}>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="summer-sub-page">
      <BackButton to="/summer" />

      <div className="summer-sub-page__images">
        {project.images.length > 0 ? (
          project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} ${i + 1}`}
              className="summer-sub-page__img"
            />
          ))
        ) : (
          <div className="summer-sub-page__empty">
            Images coming soon
          </div>
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default SummerProject;

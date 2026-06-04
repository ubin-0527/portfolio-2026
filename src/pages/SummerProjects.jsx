import { useNavigate } from "react-router-dom";
import "./SummerProjects.css";
import BackButton from "../components/BackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import summerProjects from "../data/summer";

function SummerProjects() {
  const navigate = useNavigate();

  return (
    <div className="summer-page">
      <BackButton to="/projects" />

      <h1 className="summer-page__title">Summer projects</h1>

      <div className="summer-page__grid">
        {summerProjects.map((project) => (
          <button
            key={project.id}
            className={`summer-page__item summer-page__item--${project.id}`}
            onClick={() => navigate(`/summer/${project.id}`)}
          >
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="summer-page__thumb"
              />
            ) : (
              <div className="summer-page__placeholder" />
            )}
          </button>
        ))}
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default SummerProjects;

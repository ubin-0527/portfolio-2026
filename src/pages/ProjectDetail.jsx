import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => String(p.id).toLowerCase().trim() === String(id).toLowerCase().trim()
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
      
      <div>
        <BackButton/>
        <div>
        <p>{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.timeframe}</p>
        <p>{project.keywords.join(", ")}</p>
        <p>{project.description}</p>
        <img src={project.heroImage} alt={project.title} />
        </div>
      </div>

  );
}

export default ProjectDetail;

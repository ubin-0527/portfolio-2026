import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Icon from "./Icon";

function BackButton({ label = "", className = "" }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="icon-only"
      onClick={() => navigate(-1)}
      icon={<Icon name="arrow_left_alt" weight={100}/>}
      className={className}
    >
      {label}
    </Button>
  );
}

export default BackButton;

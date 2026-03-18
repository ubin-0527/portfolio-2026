import { useNavigate } from "react-router-dom";
import "./BackButton.css";
import backIcon from "../assets/home/back-icon.png";

function BackButton({ to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    to ? navigate(to) : navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleClick}>
      <img src={backIcon} alt="" aria-hidden="true" className="back-button__icon" />
      <span className="back-button__text">Back</span>
    </button>
  );
}

export default BackButton;

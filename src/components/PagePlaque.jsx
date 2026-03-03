import { useLocation } from "react-router-dom";
import "./PagePlaque.css";

const pageMap = {
  "/":         { floor: "3F", title: "HOME" },
  "/projects": { floor: "2F", title: "WORK" },
  "/about":    { floor: "1F", title: "ABOUT" },
};

function PagePlaque({ isVisible = true }) {
  const { pathname } = useLocation();
  const { floor, title } = pageMap[pathname] ?? { floor: "—", title: "—" };

  return (
    <div className="page-plaque">
      <div className={`page-plaque__animator${isVisible ? "" : " page-plaque__animator--hidden"}`}>
        <div className="page-plaque__bg">
          <div className="page-plaque__box page-plaque__box--1" />
          <div className="page-plaque__box page-plaque__box--2" />
          <div className="page-plaque__box page-plaque__box--3" />
          <div className="page-plaque__box page-plaque__box--4" />
        </div>
        <div className="page-plaque__glass glass">
          <div className="page-plaque__circle page-plaque__circle--tl" />
          <div className="page-plaque__circle page-plaque__circle--tr" />
          <div className="page-plaque__circle page-plaque__circle--bl" />
          <div className="page-plaque__circle page-plaque__circle--br" />
        </div>
        <div className="page-plaque__label">
          <span className="page-plaque__floor">{floor}</span>
          <span className="page-plaque__title">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default PagePlaque;

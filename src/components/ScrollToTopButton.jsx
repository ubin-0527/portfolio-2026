import { useState, useEffect } from "react";
import Icon from "./Icon";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroller = document.body;
    const handleScroll = () => {
      setVisible(scroller.scrollTop > 400);
    };
    scroller.addEventListener("scroll", handleScroll);
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top${visible ? " scroll-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <Icon name="arrow_upward" size={24} weight={300} />
    </button>
  );
}

export default ScrollToTopButton;

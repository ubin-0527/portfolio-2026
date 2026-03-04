import "./Tag.css";

function Tag({ label, hasBorderLeft, hasBorderRight }) {
  const borderStyle = {
    borderLeft:  hasBorderLeft  ? "1px solid #343434" : "none",
    borderRight: hasBorderRight ? "1px solid #343434" : "none",
  };

  return (
    <span className="tag" style={borderStyle}>
      {label}
    </span>
  );
}

export default Tag;

function Icon({ 
    name, 
    size = 40, 
    weight = 400,
    className = "" }) {
    return (
      <span
        className={`material-symbols-outlined ${className}`}
        style={{ 
            fontSize: size,
            fontVariationSettings: `'FILL' 0, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        }}
        aria-hidden="true"
      >
        {name}
      </span>
    );
  }
  
  export default Icon;
  
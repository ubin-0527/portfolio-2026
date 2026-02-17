import "./Button.css";

function Button ({
    children,
    variant = "primary",
    onClick,
    type = "button",
    className = "",
    icon,
    iconPosition="right",
    ariaLabel,
}) {
    const isIconOnly = icon && !children;

    return (
      <button
        type={type}
        onClick={onClick}
        aria-label={isIconOnly ? ariaLabel : undefined}
        className={`btn btn-${variant} ${isIconOnly ? "btn-icon-only" : ""} ${className}`}
      >
        {/* Icon on the left side */}
        {icon && iconPosition === "left" && (
          <span className="btn-icon">{icon}</span>
        )}

        {/* Button text */}
        {children && <span className="btn-text">{children}</span>}

        {/* Icon on the right side (default) */}
        {icon && iconPosition === "right" && (
          <span className="btn-icon">{icon}</span>
        )}
      </button>
  );
}

export default Button;
import "./TabHeader.css";

function TabHeader({ step, name }) {
  return (
    <div className="tab-header">
      <p className="tab-header__step">{step}</p>
      <h3 className="tab-header__name">{name}</h3>
    </div>
  );
}

export default TabHeader;

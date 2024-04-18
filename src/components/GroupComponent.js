import "./GroupComponent.css";

const GroupComponent = ({ rectangle45, signsAndSymptomsOfIodineD }) => {
  return (
    <div className="rectangle-container">
      <div className="group-child1" />
      <img className="rectangle-icon" alt="" src={rectangle45} />
      <div className="signs-and-symptoms">{signsAndSymptomsOfIodineD}</div>
      <div className="jackie-moncada-parent">
        <div className="jackie-moncada">Jackie Moncada</div>
        <img className="ellipse-icon" alt="" src="/ellipse-2@2x.png" />
      </div>
    </div>
  );
};

export default GroupComponent;

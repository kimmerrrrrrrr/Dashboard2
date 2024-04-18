import "./SearchContainer.css";

const SearchContainer = () => {
  return (
    <div className="rectangle-parent">
      <div className="group-child" />
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="search">Search</div>
      </div>
      <div className="group-wrapper">
        <div className="pick-a-date-parent">
          <i className="pick-a-date">Pick a date</i>
          <div className="date">Date</div>
        </div>
      </div>
      <div className="group-container">
        <div className="how-many-guests-parent">
          <i className="how-many-guests">How many Guests?</i>
          <div className="guests">Guests</div>
        </div>
      </div>
      <div className="group-frame">
        <div className="location-parent">
          <div className="location">Location</div>
          <i className="search-for-a">Search For A Destination</i>
        </div>
      </div>
      <div className="group-inner" />
      <div className="rectangle-div" />
    </div>
  );
};

export default SearchContainer;

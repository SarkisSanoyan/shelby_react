import "../scss/RatingBars.scss";


export function RatingBars() {
  return (
    <div className="RatingBars">
      <h4>Long stretches of sand, dramatic cliffs that descend into the sea, boat rides and diving, sunshine, beach parties and great times welcome you on a holiday.</h4>

      <div className="ourRating-img" style={{
        backgroundImage: `url(images/sea-girl.jpg)`
      }}>
      </div>

      <div className="bars-box-container">

        <div className="bars-box">
          <div className="bar">
            <h3>AVAILABLE DESTINATIONS</h3>
            <div className="progress">
              <div className="progress-60"></div>
            </div>
          </div>
          <div className="bar">
            <h3>TRAVEL TICKETS</h3>
            <div className="progress">
              <div className="progress-70"></div>
            </div>
          </div>
          <div className="bar">
            <h3>HOUSE RENTALS</h3>
            <div className="progress">
              <div className="progress-75"></div>
            </div>
          </div>
          <div className="bar">
            <h3>BEST DEALS</h3>
            <div className="progress">
              <div className="progress-80"></div>
            </div>
          </div>
        </div>

        <div className="bars-box">
          <div className="bar">
            <h3>AMAZING EXPERIENCE</h3>
            <div className="progress">
              <div className="progress-80"></div>
            </div>
          </div>
          <div className="bar">
            <h3>UNTOUCHED NATURE</h3>
            <div className="progress">
              <div className="progress-85"></div>
            </div>
          </div>
          <div className="bar">
            <h3>BIGGEST CITIES</h3>
            <div className="progress">
              <div className="progress-90"></div>
            </div>
          </div>
          <div className="bar">
            <h3>INCLUDED INSURANCE</h3>
            <div className="progress">
              <div className="progress-55"></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

import "../scss/MainTours.scss";


export function MainTours({ mainTours }) {

  return (
    <div className="MainTours">
      <h2>2023 MAIN DESTINATIONS NOW ON SALE</h2>

      <div className="mainTours-box">
        {
          mainTours.map(el =>
            <div className="mainTours" key={el.id}>
              <img src={el.image} alt="mainTours" />

              <div className="info">
                <h3 className="mainTours-title">{el.title}</h3>
                <p>{el.descr}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
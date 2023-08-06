import "../scss/PopularTours.scss";


export function PopularTours({ popularTours }) {

  return (
    <div className="PopularTours">

      <div className="popularTours-box">

        <div className="popularTours">
          <div className="info">
            <h2>{popularTours[0]?.title}</h2>
            <p>{popularTours[0]?.descr}</p>
            <button className='btn'>{popularTours[0]?.btn_text}</button>
          </div>

          <img src={popularTours[0]?.image} />
        </div>

        <div className="popularTours ">
          <img src={popularTours[1]?.image} />

          <div className="info">
            <h2>{popularTours[1]?.title}</h2>
            <p>{popularTours[1]?.descr}</p>
            <button className='popularTours-btn'>{popularTours[1]?.btn_text}</button>
          </div>
        </div>

      </div>
    </div>
  )
}
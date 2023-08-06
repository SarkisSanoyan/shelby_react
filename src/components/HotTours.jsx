import { useState, useEffect } from 'react';
import "../scss/HotTours.scss";


export function HotTours({ hotTours }) {

  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 500) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };


  return (
    <div className="HotTours">
      <h2>2023 HOT SUMMER DESTINATIONS NOW ON SALE</h2>

      <div className="hotTours-box">
        {
          hotTours.map(el =>
            <div className="hotTours" key={el.id}>
              <img src={el.image} alt="hotTours" />

              <div className="info">
                <h3>{el.title}</h3>
                <p>{el.descr}</p>
                <button className="location_btn">{el.btn_text}</button>
              </div>
            </div>
          )
        }
      </div>

      <div className={`${toTopButton ? "scroll-btn scroll-show" : "scroll-hide"}`}>
        <button onClick={scrollUp} className="scrollup">
          <i class="fa-solid fa-arrow-up fa-beat-fade"></i>
        </button>
      </div>

    </div>
  )
}

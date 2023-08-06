import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import "../scss/OurRating.scss";


export function OurRating({ ourRating }) {

  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  }

  const onExitViewport = () => {
    setVisible(false);
  }


  return (
    <div className="OurRating">
      <h2>2023 MOST RATED DESTINATIONS NOW ON SALE</h2>

      <div className="ourRating-img" style={{
        backgroundImage: `url(images/sea-girl.jpg)`
      }}>
      </div>

      <div className="ourRating-box">
        {
          ourRating.map(el =>
            <div className="everyRating" key={el.id}>

              <div className="info">

                <span>
                  <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                    {visible && <CountUp className="countup" end={el.count} duration={5} prefix="" suffix="" />}
                  </ScrollTrigger>
                </span>
                <h3 className="rating-title">{el.title}</h3>
                <p className="rating-descr">{el.descr}</p>
              </div>
            </div>
          )
        }
      </div>

      <h4>Pleasure and leisure activities away from the home environment</h4>
    </div>
  )
}
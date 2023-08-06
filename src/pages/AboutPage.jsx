import { useEffect, useState } from "react";

import { About } from "../components/About";
import { RatingBars } from "../components/RatingBars";
import { HotTours } from "../components/HotTours";

import { fetchHotTours } from "../api";


export function AboutPage() {

  const [hotTours, setHotTours] = useState([]);

  useEffect(() => {
    fetchHotTours().then(data => setHotTours(data));

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);


  return (
    <div className="AboutPage">
      <About />
      <HotTours hotTours={hotTours} />
      <RatingBars />
    </div>
  )
}

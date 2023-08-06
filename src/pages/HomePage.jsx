import { useEffect, useState } from "react";

import { Slider } from "../components/Slider";
import { HotTours } from "../components/HotTours";
import { OurRating } from "../components/OurRating";
import { MainTours } from "../components/MainTours";
import { PopularTours } from "../components/PopularTours";

import { fetchSliders } from "../api";
import { fetchHotTours } from "../api";
import { fetchOurRating } from "../api";
import { fetchMainTours } from "../api";
import { fetchPopularTours } from "../api";


export function HomePage() {
    
    const [slider, setSlider] = useState([]);
    const [hotTours, setHotTours] = useState([]);
    const [ourRating, setOurRating] = useState([]);
    const [mainTours, setMainTours] = useState([]);
    const [popularTours, setPopularTours] = useState([]);

    useEffect(() => {
        fetchSliders().then(data => setSlider(data));
        fetchHotTours().then(data => setHotTours(data));
        fetchOurRating().then(data => setOurRating(data));
        fetchMainTours().then(data => setMainTours(data));
        fetchPopularTours().then(data => setPopularTours(data));

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="HomePage">
            <Slider slider={slider} />
            <HotTours hotTours={hotTours} />
            <OurRating ourRating={ourRating} />
            <MainTours mainTours={mainTours} />
            <PopularTours popularTours={popularTours} />
        </div>
    )
}

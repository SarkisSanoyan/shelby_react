import { useState, useEffect } from "react";

import { SearchCountry } from "../components/SearchCountry";
import { CheckIn } from "../components/CheckIn";
import { CheckOut } from "../components/CheckOut";

import { Adults } from "../components/Adults";
import { Children } from "../components/Children";
import { Rooms } from "../components/Rooms";
import { ChildAge } from "../components/ChildAge";
import { Tour } from "../components/Tour";

import { fetchCountries } from "../api";
import { fetchSelectedTours } from "../api";

import "../scss/BookingPage.scss";


export function BookingPage() {

  const [countries, setCountries] = useState([]);
  const [tours, setTours] = useState([]);

  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');
  const [rooms, setRooms] = useState('1');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [childrenAge, setChildrenAge] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    fetchCountries().then(data => setCountries(data));
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < Number(children); i++) {
      arr.push(i);
    };
    setChildrenAge(arr);
  }, [children]);

  const submitSearchPackages = () => {
    // console.log(selectedCountry);
    // console.log(checkin);
    // console.log(checkout);
    // console.log(rooms);
    // console.log(adults);
    // console.log(children);

    const childAgeArr = document.querySelectorAll('.childage-container .childage');
    const ages = [];
    for (let i = 0; i < childAgeArr.length; i++) {
      ages.push(childAgeArr[i].value);
    }

    fetchSelectedTours(selectedCountry.toLowerCase()).then(data => setTours(data));

    setSearchResult({
      selectedCountry,
      checkin,
      checkout,
      rooms,
      adults,
      children,
      childAgeArr: ages.join(', ')
    })

    const div = document.querySelector('.childage-container');
    div.style.display = getComputedStyle(div).display == 'block' ? 'none' : 'block';
    // div.style.display = 'none';
  }


  return (
    <div className="BookingPage">
      <div className="background"></div>
      <div className="search">

        <div className="check-country">
          <SearchCountry countries={countries} setSelectedCountry={setSelectedCountry} />
        </div>

        <div className="check-date">
          <CheckIn checkin={checkin} setCheckin={setCheckin} />
          <CheckOut checkin={checkin} checkout={checkout} setCheckout={setCheckout} />
        </div>

        <div className="check-info">
          <div className="check-person">
            <Rooms rooms={rooms} setRooms={setRooms} />
            <Adults adults={adults} setAdults={setAdults} />
            <Children children={children} setChildren={setChildren} />
          </div>

          <div className="childage-container">
            {
              childrenAge.map(el => <ChildAge key={el} />)
            }
          </div>
        </div>

        <button className="search-btn" onClick={submitSearchPackages}>SEARCH</button>
      </div>

      <div className="tours">
        {
          tours.map(el => <Tour key={el.id} {...el} searchResult={searchResult} />)
        }
      </div>
    </div>
  )
}

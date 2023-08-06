import { useState, useEffect } from "react";

import { AddPackage } from "../components/AddPackage";
import { fetchCountries } from "../api";

import axios from "../axios/index";
import "../scss/AddPackagePage.scss";


export function AddPackagePage() {

  const [input, setInput] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [transport_depart, setTransport_depart] = useState([]);
  const [transport_arrive, setTransport_arrive] = useState([]);

  useEffect(() => {
    fetchCountries().then(data => setCountries(data));
  }, []);

  useEffect(() => {
    if (input.length > 2) setDropdown(true);
    else setDropdown(false);
  }, [input]);

  const handelClickListItem = async (name) => {
    await setInput(name);
    await setDropdown(false);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post("/tours_en", {
      country,
      hotel,
      transport_depart,
      transport_arrive
    });

    setInput('');
    setCountry('');
    setHotel('');
    setTransport_depart('');
    setTransport_arrive('');
  }


  return (
    <div className="AddPackagePage">
      <AddPackage />

      <form className="form-submit" onSubmit={submitHandler}>
        <div className="input_country">
          <input type="text" value={input} name="country" onChange={(e) => setInput(e.target.value)} placeholder="Select country*" />
        </div>

        {
          dropdown &&
          <ul>
            {
              countries
                .filter(country => country.name.toLowerCase().includes(input.toLowerCase()))
                .map(country => <li key={country.id} onClick={() => handelClickListItem(country.name)}>
                  {country.name}
                </li>)
            }
          </ul>
        }

        <div className="search-info">
          <div className="country">
            <p>Name*</p>
            <input type="text" value={country} onChange={e => setCountry(e.target.value)} required />
          </div>
          <div className="hotel">
            <p>Hotel*</p>
            <input type="text" value={hotel} onChange={e => setHotel(e.target.value)} required />
          </div>
        </div>

        <div className="transport-info">
          <div className="transoprt_depart">
            <p>Departure*</p>
            <input type="text" value={transport_depart} onChange={e => setTransport_depart(e.target.value)} required />
          </div>
          <div className="transoprt_arrive">
            <p>Arrival*</p>
            <input type="text" value={transport_arrive} onChange={e => setTransport_arrive(e.target.value)} required />
          </div>
        </div>

        <input type="submit" value="Add package" />
      </form>
    </div>
  )
}

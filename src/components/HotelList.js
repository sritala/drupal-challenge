import React, { useState } from "react";
import hotel1 from "../components/images/hotel1.jpg";
import ReserveHotelForm from "./ReserveHotelForm";

const hotels = [
  {
    id: 1,
    name: "Sokos Hotel Turku",
    image: hotel1,
    city: "Turku",
    country: "Finland",
    available: true,
    pool: false,
    price: 149.9,
  },
  {
    id: 2,
    name: "Grand Gracia",
    image: hotel1,
    city: "Barcelona",
    country: "Spain",
    available: false,
    pool: false,
    price: 199.9,
  },
  {
    id: 3,
    name: "Hotel Haven",
    image: hotel1,
    city: "Helsinki",
    country: "Finland",
    available: true,
    pool: false,
    price: 299.9,
  },
  {
    id: 4,
    name: "Century Hotel",
    image: hotel1,
    city: "Amsterdam",
    country: "Netherlands",
    available: false,
    pool: true,
    price: 149.9,
  },
  {
    id: 4,
    name: "Sokos Vaakuna",
    image: hotel1,
    city: "Tampere",
    country: "Finland",
    available: false,
    pool: true,
    price: 99.9,
  },
];

const HotelList = () => {
  
  const countries = ["Finland", "Spain", "Netherlands"];
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [checked, setChecked] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <div>
      <p>Filter by country</p>
      <div class="filter-wrapper">
        <select
          class="select"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option onChange={setSelectedCountry}>All</option>
          {countries.map((country) => (
            <option>{country}</option>
          ))}
        </select>
        <div class="checkbox-wrapper">
          <h4>Is available</h4>
          <input onChange={handleCheckboxChange} type="checkbox"></input>
        </div>
      </div>
      {hotels
        .filter(
          (hotel) =>
            (hotel.country === selectedCountry &&
              hotel.available === checked) ||
            (selectedCountry === "All" && hotel.available === checked)
        )
        .map((hotel) => (
          <div className="hotels-wrapper">
            <div className="hotel-information">
              <img src={hotel.image} className="image" />
              <div className="information-wrapper">
                <div class="name-wrapper">
                  <h2>{hotel.name}</h2>
                  <div>
                    <h4>{hotel.city}</h4>
                    <h4>{hotel.country}</h4>
                  </div>
                </div>
                <div className="details-wrapper">
                  <h4>Available: {hotel.available === true ? "Yes" : "No"}</h4>
                  <h4>Pool: {hotel.pool === true ? "Yes" : "No"}</h4>
                </div>
              </div>
            </div>
            <div className="pricing-information">
              <div className="price-wrapper">
                <h1 className="price">
                  {hotel.price}
                  <span className="currency">€</span>
                </h1>
                {!show ? (
                    <button onClick={handleShow} className="deal-button">
                      View deal
                    </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      {show ? <ReserveHotelForm show={show} /> : null}
    </div>
  );
};

export default HotelList;

import React, { useState } from "react";

const ReserveHotelForm = () => {
    
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [dateArrival, setDateArrival] = useState(null);
  const [dateDeparture, setDateDeparture] = useState(null);
  const [informations, setInformations] = useState([]);
  const [checked, setChecked] = React.useState(false);

  const addInformation = (e) => {
    e.preventDefault();
    const informationObject = {
      name: name,
      telephone: telephone,
      dateArrival: dateArrival,
      dateDeparture: dateDeparture,
    };
    setInformations(informations.concat(informationObject));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const handleDateArrivalChange = (e) => {
    setDateArrival(e.target.value);
  };

  const handleDepartureChange = (e) => {
    setDateDeparture(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <>
      <form class="reserve-form" onSubmit={addInformation}>
        <h2>Reserve hotel</h2>
        <div className="input-wrapper">
          <label>Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="input-wrapper">
          <label>Telephone</label>
          <input
            type="tel"
            name="telephone"
            value={telephone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Date of Arrival</label>
          <input
            type="date"
            name="date"
            value={dateArrival}
            onChange={handleDateArrivalChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Date of Departure</label>
          <input
            type="date"
            name="date-departure"
            value={dateDeparture}
            onChange={handleDepartureChange}
          />
        </div>
        <div class="checkbox-wrapper">
          <h4>Hotels may send newsletters</h4>
          <input onChange={handleCheckboxChange} type="checkbox"></input>
        </div>
        <button type="submit" class="reserve-button">
          Reserve Hotel
        </button>
      </form>
      <div>
        {informations
          ? informations.map((information) => (
              <div className="information-details">
                <h3 className="success">Hotel reserved successfully!</h3>
                <h5 className="details-title">Reservation details</h5>
                <div className="reservation-details-wrapper">
                  <p>Name:</p>
                  <p>{information.name}</p>
                </div>
                <div class="reservation-details-wrapper">
                  <p>Telephone:</p>
                  <p>{information.telephone}</p>
                </div>
                <div class="reservation-details-wrapper">
                  <p>Arrival date:</p>
                  <p>{information.dateArrival}</p>
                </div>
                <div class="reservation-details-wrapper">
                  <p>Departure date:</p>
                  <p>{information.dateArrival}</p>
                </div>
                <p>
                  Hotels may send newsletters:
                  {checked ? <span>Yes</span> : <span>No</span>}
                </p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ReserveHotelForm;

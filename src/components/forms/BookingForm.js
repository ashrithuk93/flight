import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flightActions } from "../../store/flight";
import { useParams, useHistory } from "react-router-dom";

import classes from "./BookingForm.module.css";

const BookingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const response = useSelector((state) => state.flightReducer);
  const data = response.filter((item) => item.id === params.id);
  const passengersData = data[0].passengers;
  const passengerData = passengersData.filter(
    (item) => item.seat === Number(params.seat)
  );

  const seatNumber = passengerData[0].seat;
  const [name, setName] = useState(passengerData[0].name || "");
  const [age, setAge] = useState(passengerData[0].age || "");
  const [address, setAddress] = useState(passengerData[0].address || "");
  const [passport, setPassport] = useState(passengerData[0].passportNo || "");
  const [services, setServices] = useState(passengerData[0].ancillary || "");
  const [wheelChairValue, setWheelChairValue] = useState(
    passengerData[0].disabled || false
  );
  const [infantValue, setInfantValue] = useState(
    passengerData[0].infant || false
  );

  const submithandler = (event) => {
    event.preventDefault();

    dispatch(
      flightActions.editPassenger({
        id: params.id,
        seatNumber,
        name,
        age,
        address,
        passport,
        services,
        wheelChairValue,
        infantValue,
      })
    );

    history.push(`/flight/${params.id}`);
  };

  return (
    <form onSubmit={submithandler} className={classes.form}>
      {name === "" ? (
        <h5>Seat not booked yet. Enter detials to book now.</h5>
      ) : (
        <h2>Manage Booking</h2>
      )}
      <h3>Seat Number: {seatNumber}</h3>
      <input
        className={classes.input}
        placeholder="Name..."
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className={classes.input}
        placeholder="Age..."
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <input
        className={classes.input}
        placeholder="Address..."
        type="text"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <input
        className={classes.input}
        placeholder="Passport Number..."
        type="text"
        value={passport}
        onChange={(event) => setPassport(event.target.value)}
      />
      <input
        className={classes.input}
        placeholder="Add In-flight services needed..."
        type="text"
        value={services}
        onChange={(event) => setServices(event.target.value)}
      />
      <div className={classes.radio}>
        Need wheel-chair?
        <label>
          <input
            className={classes.input}
            name="disability"
            type="radio"
            id="yes"
            value={wheelChairValue}
            onChange={() => setWheelChairValue(true)}
          />
          Yes
        </label>
        <label>
          <input
            className={classes.input}
            name="disability"
            type="radio"
            id="no"
            value={wheelChairValue}
            onChange={() => setWheelChairValue(false)}
          />
          No
        </label>
      </div>

      <div className={classes.radio}>
        With infants?
        <label>
          <input
            className={classes.input}
            name="infant"
            type="radio"
            id="yes"
            value={infantValue}
            onChange={() => setInfantValue(true)}
          />
          Yes
        </label>
        <label>
          <input
            className={classes.input}
            name="infant"
            type="radio"
            id="no"
            value={infantValue}
            onChange={() => setInfantValue(false)}
          />
          No
        </label>
      </div>
      <p>
        <button type="submit" className={classes.button}>
          Save Changes
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={() => {
            history.push(`/flight/${params.id}`);
          }}
        >
          Cancel
        </button>
      </p>
    </form>
  );
};

export default BookingForm;

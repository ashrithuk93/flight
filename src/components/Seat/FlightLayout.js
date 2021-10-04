import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Seat from "./Seat";

import classes from "./FlightLayout.module.css";

const FlightLayout = () => {
  const params = useParams();
  const selector = useSelector((state) => state);

  const data = selector.filter((data) => data.id === params.id);
  const passengerLeft = data[0].passengers.slice(0, 20);
  const passengerRight = data[0].passengers.slice(20);

  return (
    <div className={classes.flight}>
      <div className={classes.left}>
        {passengerLeft.map((num) => (
          <Seat
            key={num.seat}
            id={num.seat}
            color={0}
            checkedIn={num.checkedIn}
            disabled={num.disabled}
            infant={num.infant}
            booked={num.name.length > 0}
          />
        ))}
      </div>
      <div className={classes.aisle}></div>
      <div className={classes.right}>
        {passengerRight.map((num) => (
          <Seat
            key={num.seat}
            id={num.seat}
            color={0}
            checkedIn={num.checkedIn}
            disabled={num.disabled}
            infant={num.infant}
            booked={num.name.length > 0}
          />
        ))}
      </div>
    </div>
  );
};

export default FlightLayout;

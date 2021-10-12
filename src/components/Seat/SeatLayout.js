import React from "react";

import FlightLayout from "./FlightLayout";

import classes from "./SeatLayout.module.css";

const SeatLayout = (props) => {
  return (
    <div className={classes.outline}>
      <FlightLayout id={props.id} />
    </div>
  );
};

export default SeatLayout;

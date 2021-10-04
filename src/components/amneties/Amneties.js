import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import SeatType from "./SeatType";

import classes from "./Amneties.module.css";

const Amneties = (props) => {
  const data = useSelector((state) => state);

  const flightDetail = data.filter((flight) => flight.id === props.id);

  const params = useParams();

  return (
    <div className={classes["detail-layout"]}>
      <div className={classes["flight-control"]}>
        <div className={classes.link}>
          {data[0].loggedIn && (
            <Link to={`/anscillaries/${params.id}`}>
              <h6>Shop Request</h6>
            </Link>
          )}
        </div>
        <div className={classes.link}>
          {data[0].loggedIn && (
            <Link to={`/list/${params.id}`}>
              <h6>Passenger Detail</h6>
            </Link>
          )}
        </div>
      </div>
      <div className={classes["flight-detail"]}>
        <h2>{flightDetail[0].name}</h2>
        <p>
          {flightDetail[0].from} to {flightDetail[0].to}
        </p>
      </div>
      <div className={classes["color-code"]}>
        <SeatType type={0} />
        <SeatType type={1} />
        <SeatType type={2} />
        <SeatType type={3} />
        <SeatType type={4} />
        <SeatType type={5} />
        <SeatType type={6} />
      </div>
      <div className={classes.service}>
        <h2>In-Flight Facilities</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
        </ul>
      </div>
    </div>
  );
};

export default Amneties;

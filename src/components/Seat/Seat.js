import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./Seat.module.css";

const Seat = (props) => {
  const styleList = ["", "booked", "disabilities", "infant"];
  const styleCode = props.disabled
    ? 2
    : props.infant
    ? 3
    : props.booked
    ? 1
    : 0;
  const seatStyle = styleList[styleCode];
  const dispatch = useDispatch();

  const { id } = useParams();

  const onclickHandler = () => {
    // console.log(props.infant);
    dispatch({
      type: "CHECK_IN",
      payload: { fid: id, seat: props.id, check: props.checkedIn },
    });
  };

  const checkedStyle = props.checkedIn && props.booked ? "clicked" : "seat";

  return (
    <div>
      <button
        className={`${classes[checkedStyle]} ${classes[seatStyle]}`}
        type="button"
        onClick={onclickHandler}
      >
        {props.id}
      </button>
    </div>
  );
};

export default Seat;

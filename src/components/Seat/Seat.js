import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightActions } from "../../store/flight";

import classes from "./Seat.module.css";

const Seat = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.userReducer[0]);
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
    if (styleCode === 0) {
      if (user.auth) {
        history.push(`/bookings/${id}/${props.id}`);
      } else {
        alert(
          "Can not check-in as the seat is not booked. Login as an admin to book tickets."
        );
        history.push(`/flight/${id}`);
      }
    } else {
      dispatch(
        flightActions.checkIn({
          fid: id,
          seat: props.id,
          check: props.checkedIn,
        })
      );
    }
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

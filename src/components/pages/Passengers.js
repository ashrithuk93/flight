import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { flightActions } from "../../store/flight";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import classes from "./Passengers.module.css";

const Passengers = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.flightReducer);
  const user = useSelector((state) => state.userReducer);

  const parsedData = selector.filter((item) => item.id === params.id);
  const data = parsedData.filter((item) => item.id === params.id);
  const [parseValue, setParseValue] = useState(data[0].passengers);

  useEffect(() => {
    setParseValue(data[0].passengers);
  }, [data]);

  console.log("Admin Access, passenger.js", user[0].auth);

  const filterHandler = () => {
    let passengers = data[0].passengers.filter((data) => data.name.length > 0);
    setParseValue(passengers);
  };

  const removeFilterHandler = () => {
    setParseValue(data[0].passengers);
  };

  console.log("Admin access...", user[0].auth);

  return (
    <table className={classes.customers}>
      <tbody>
        <tr>
          <th colSpan={user[0].auth ? 5 : 4}>
            {data[0].name} Passengers{" "}
            <button onClick={filterHandler}>Filter by Bookings</button>{" "}
            <button onClick={removeFilterHandler}>Remove Filter</button>
          </th>
        </tr>
        <tr>
          <th>Seat number</th>
          <th>Name</th>
          <th>Ancillary</th>
          <th></th>
          {user[0].auth ? <th></th> : null}
        </tr>
        {parseValue.map((item, index) => (
          <tr key={item.seat}>
            <td>{item.seat}</td>
            <td>{item.name}</td>
            <td>
              {item.name.length > 0 && (
                <p>Wheel-chair: {item.disabled ? "Yes" : "No"}</p>
              )}
              {item.name.length > 0 && (
                <p>With infant: {item.infant ? "Yes" : "No"}</p>
              )}
            </td>
            {item.name.length > 0 ? (
              <td
                onClick={() => {
                  history.push(`/bookings/${params.id}/${item.seat}`);
                }}
              >
                <EditIcon />
              </td>
            ) : (
              <td
                onClick={() => {
                  history.push(`/bookings/${params.id}/${item.seat}`);
                }}
              >
                <button type="button" disabled={user[0].auth ? false : true}>
                  Book Now
                </button>
              </td>
            )}
            {item.name.length > 0 && user[0].auth ? (
              <td
                onClick={() => {
                  dispatch(
                    flightActions.deletePassenger({
                      fid: params.id,
                      pid: index,
                    })
                  );
                }}
              >
                <DeleteIcon />
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Passengers;

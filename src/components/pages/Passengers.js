import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./Passengers.module.css";

const Passengers = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const parsedData = selector.filter((item) => item.id === params.id);
  const data = parsedData.filter((item) => item.id === params.id);
  const [parseValue, setParseValue] = useState(data[0].passengers);

  console.log("Admin Access", selector[0].auth);

  const filterHandler = () => {
    let passengers = data[0].passengers.filter((data) => data.name.length > 0);
    setParseValue(passengers);
  };

  const removeFilterHandler = () => {
    setParseValue(data[0].passengers);
  };

  return (
    <table className={classes.customers}>
      <tbody>
        <tr>
          <th colSpan={5}>
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
          <th></th>
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
            <td>
              <button
                type="button"
                onClick={() => {
                  history.push(`/bookings/${params.id}/${item.seat}`);
                }}
              >
                {item.name.length > 0 ? "Edit" : "Book"}
              </button>
            </td>
            <td>
              {item.name.length > 0 && selector[0].auth ? (
                <button
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_PASSENGER",
                      payload: { fid: params.id, pid: index },
                    });
                  }}
                >
                  Delete
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Passengers;

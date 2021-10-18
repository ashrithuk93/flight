import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Select.module.css";

import Layout from "../UI/Layout";

const Select = () => {
  const history = useHistory();

  const data = useSelector((state) => state.flightReducer);

  return (
    <Layout>
      <div className={classes.list}>
        <h3>Select Flight from the list</h3>
        <ul>
          {data.map((flight) => (
            <li
              key={flight.id}
              onClick={() => {
                history.push(`/flight/${flight.id}`);
              }}
            >
              {flight.name} ({flight.from} to {flight.to})
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Select;

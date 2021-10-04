import React, { Fragment } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../UI/Layout";
import SeatLayout from "../Seat/SeatLayout";
import Amneties from "../amneties/Amneties";

// const data = [
//   {
//     id: "f1",
//     name: "Flight 1",
//     from: "Bangalore",
//     to: "Chennai",
//     passengers: [],
//   },
//   {
//     id: "f2",
//     name: "Flight 2",
//     from: "Bangalore",
//     to: "Mumbai",
//     passengers: [],
//   },
// ];

const Home = () => {
  const flightId = useParams();
  const data = useSelector((state) => state);

  const flightDetail = data.filter((flight) => flightId.id === flight.id);

  const id = flightDetail[0].id;

  return (
    <Fragment>
      <Layout>
        <SeatLayout id={id} />
        <Amneties id={id} />
      </Layout>
    </Fragment>
  );
};

export default Home;

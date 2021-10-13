import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import FlightIcon from "@material-ui/icons/Flight";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state.userReducer[0].loggedIn);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };

  return (
    <header>
      <nav className={classes.header}>
        <div className={classes.title}>
          <h2>
            <FlightIcon style={{ height: 20, width: 20 }} /> Check-In
          </h2>
        </div>
        <div className={classes.manage}>
          {login && (
            <div className={classes.home}>
              <Link to="/flight">
                <HomeIcon style={{ height: 40, width: 40 }} />
              </Link>
            </div>
          )}
          {login && (
            <div className={classes.button} onClick={logoutHandler}>
              <h3>Logout</h3>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state[0].loggedIn);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/login");
  };

  return (
    <header>
      <nav className={classes.header}>
        <div className={classes.title}>
          <h2>Check-In</h2>
        </div>
        <div className={classes.manage}>
          {login && (
            <div className={classes.home}>
              <Link to="/flight">
                <h3>Home</h3>
              </Link>
            </div>
          )}
          {login && (
            <button className={classes.button} onClick={logoutHandler}>
              <h3>Logout</h3>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

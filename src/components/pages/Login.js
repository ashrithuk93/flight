import { useState } from "react";

import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";

import classes from "./Login.module.css";

const Login = (props) => {
  const history = useHistory();
  const data = useSelector((state) => state[0]);
  const [admin, setAdmin] = useState(false);

  const responseGoogle = (response) => {
    props.loginHandler(response);
    props.accessHandler(admin);
    history.push("/flight");
  };

  let renderItem = data.loggedIn ? (
    <div className={classes.container}>
      <p>Welcome Page..!</p>
    </div>
  ) : (
    <div className={classes.container}>
      {/* <input placeholder="User Name..." className={classes.input} />
      <input placeholder="Password..." className={classes.input} />
      <button type="button" className={classes.button}>
        LOGIN
      </button> */}
      <GoogleLogin
        clientId="688911498634-soou6j4frburft53lug9ursg0v9b2o6t.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        className={classes.button}
      />
      <label className={classes.label}>
        <input
          type="checkbox"
          checked={admin}
          onChange={() => {
            console.log("from Login Before, access", admin);
            setAdmin(!admin);
            console.log("from Login, access After", admin);
          }}
        />
        {"Admin access"}
      </label>
    </div>
  );

  return renderItem;
};

export default Login;

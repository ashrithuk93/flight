import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/users";

import classes from "./Login.module.css";

const Login = () => {
  const history = useHistory();
  const data = useSelector((state) => state.userReducer[0]);
  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    try {
      const accessToken = await response.$b.access_token;
      if (accessToken && !response.error) {
        dispatch(userActions.login());
      }
      history.push("/flight");
    } catch (error) {
      console.log("Login Failed");
    }
  };

  const accessHandler = () => {
    dispatch(userActions.admin());
  };

  let renderItem = data.loggedIn ? (
    <div className={classes.container}>
      <p>Welcome Page..!</p>
    </div>
  ) : (
    <div className={classes.container}>
      <GoogleLogin
        clientId="688911498634-soou6j4frburft53lug9ursg0v9b2o6t.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        className={classes.button}
      />
      <label className={classes.label}>
        <input type="checkbox" onChange={accessHandler} />
        {"Admin access"}
      </label>
    </div>
  );

  return renderItem;
};

export default Login;

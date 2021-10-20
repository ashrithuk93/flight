import { userActions } from "./users";

export const thunkLogin = (response) => {
  return async (dispatch) => {
    const accessToken = await response.Zb.access_token;
    console.log(response.Zb.access_token);
    try {
      if (accessToken && !response.error) {
        dispatch(userActions.login());
      } else {
        throw Error("Login Failed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

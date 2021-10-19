import { userActions } from "./users";

export const thunkLogin = (response) => {
  return async (dispatch) => {
    const accessToken = await response.$b.access_token;
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

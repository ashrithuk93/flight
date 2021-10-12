import React, { useState, Suspense } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./components/pages/Login";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
// import Manage from "./components/pages/Manage";
// import Passengers from "./components/pages/Passengers";
import Select from "./components/pages/Select";
import Modal from "./components/modal/Modal";
// import BookingForm from "./components/forms/BookingForm";
import Layout from "./components/UI/Layout";
import { useSelector, useDispatch } from "react-redux";

const Passengers = React.lazy(() => import("./components/pages/Passengers"));
const BookingForm = React.lazy(() => import("./components/forms/BookingForm"));
const Manage = React.lazy(() => import("./components/pages/Manage"));

function App() {
  let selector = useSelector((state) => state.userReducer[0]);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  console.log("from App.js...", selector.auth);

  const handleAccess = (response) => {
    setAuth(response);
    console.log("from App.js...after", selector.auth);
  };

  const responseGoogle = async (response) => {
    console.log(response.error);

    const accessToken = await response.$b.access_token;
    if (accessToken && !response.error) {
      dispatch({ type: "LOGIN", payload: { access: auth } });
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <Layout>
            <p className="centered">Loading...</p>
          </Layout>
        }
      >
        <Switch>
          <Route path="/login">
            <Layout>
              <Login
                loginHandler={responseGoogle}
                accessHandler={handleAccess}
              />
            </Layout>
          </Route>
          <Route path="/flight" exact>
            <Select />
          </Route>
          <Route path="/flight/:id">
            <Home />
          </Route>
          <Route path="/bookings/:id/:seat">
            <Modal>
              <Layout>
                <BookingForm />
              </Layout>
            </Modal>
          </Route>
          <Route path="/anscillaries/:id">
            <Manage />
          </Route>
          <Route path="/list/:id">
            <Passengers />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

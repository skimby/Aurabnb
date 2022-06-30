import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormModal/SignupFormModal";
import Navigation from './components/Navigation';
import CreateSpotPage from "./components/CreateSpotPage";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user);

  console.log(user)
  if (!user) {
    console.log('test');

    < Redirect to='/' />
  }

  useEffect(() => {
    //use .then to make sure restoreUser runs first
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <HomePage />
      {/* <p>{user?.firstName}</p> */}
      {/* *** explanataion on boolean short circuting above using user.  */}

      {isLoaded && (
        <Switch>
          <Route path='/' exact >
          </Route>
        </Switch>
      )}


      {/* for paths that require user Auth */}
      {isLoaded && user && (
        <Route path='/createSpot' >
          <CreateSpotPage isLoaded={isLoaded} />
        </Route>

      )}

    </>
  )
}

export default App;

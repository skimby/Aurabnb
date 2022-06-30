import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormModal/SignupFormModal";
import Navigation from './components/Navigation';
import CreateSpotPage from "./components/CreateSpotPage";
// import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  // const user = useSelector(state => state.session.user);

  useEffect(() => {
    //use .then to make sure restoreUser runs first
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <p>{user?.firstName}</p> */}
      {/* *** explanataion on boolean short circuting above using user.  */}
      {isLoaded && (
        <Switch>
          <Route path='/' exact >
          </Route>

          <Route path='/createSpot' >
            <CreateSpotPage isLoaded={isLoaded} />
          </Route>
          {/* <Route path="/login">
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
      )}
    </>
  )
}

export default App;

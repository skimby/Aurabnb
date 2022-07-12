import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import Navigation from './components/Navigation';
import CreateSpotPage from "./components/CreateSpotPage";
import HomePage from "./components/HomePage";
import GetSpot from "./components/GetSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);




  useEffect(() => {
    //use .then to make sure restoreUser runs first
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* Nav should always render */}
      <Navigation isLoaded={isLoaded} />

      {/* Home page should render after restoreUser is run */}
      {isLoaded && (
        <Switch>
          <Route path='/' exact >
            <HomePage />
          </Route>


          <Route path='/createSpot' >
            <CreateSpotPage />
          </Route>
          <Route path='/editSpot' >
            <CreateSpotPage />
          </Route>


          <Route path='/spots/:spotId' >
            <GetSpot />
          </Route>

        </Switch>
      )}

    </>
  )
}

export default App;

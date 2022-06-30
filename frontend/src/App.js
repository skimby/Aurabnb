import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormModal/SignupFormModal";
import Navigation from './components/Navigation';
import CreateSpotPage from "./components/CreateSpotPage";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import { useHistory } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  // // console.log(typeof (user))
  // console.log(user)
  // if (!user) {
  //   // console.log('falsey')
  //   history.push('/')
  // }


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

        </Switch>
      )}


      {/* for paths that require user Auth
      {isLoaded && user && (
        <Route path='/createSpot' >
          <CreateSpotPage isLoaded={isLoaded} />
        </Route>
      )} */}



    </>
  )
}

export default App;

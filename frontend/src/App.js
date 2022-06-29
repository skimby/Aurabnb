import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormModal/SignupFormModal";
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  const user = useSelector(state => state.session.user);

  useEffect(() => {
    //use .then to make sure restoreUser runs first
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <p>{user?.firstName}</p>
      {/* *** need an explaination on this again...  */}
      {isLoaded && (
        <Switch>
          <Route path="/login">
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  )
}

export default App;

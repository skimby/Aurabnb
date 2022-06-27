<<<<<<< HEAD
function App() {
  return (
    <h1>Hello from App</h1>
  );
=======
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //use .then to make sure restoreUser runs first
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* *** need an explaination on this again...  */}
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  )
>>>>>>> dev
}

export default App;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import Navigation from './components/Navigation';
import GetSpot from "./components/GetSpot";
// import AddImagesForm from "./components/AddImagesFormModal/AddImagesForm";
// import AddReviewImagesForm from "./components/AddReviewImagesFormModal/AddReviewImagesForm";
import Carousel from "./components/Carousel";
// import ReviewForm from "./components/ReviewForm";
// import SpotForm from "./components/SpotForm";

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
            <Carousel />
          </Route>

          <Route path='/spots/:spotId' exact>
            <GetSpot />
          </Route>

          {/* <Route path='/createSpot' exact>
            <SpotForm />
          </Route> */}
          {/*
          <Route path='/editSpot/:spotId' exact>
            <SpotForm />
          </Route> */}

          {/* <Route path='/addImages/:spotId' exact >
            <AddImagesForm />
          </Route> */}

          {/* <Route path='/addImages/spots/:spotId/reviews/:reviewId' exact>
            <AddReviewImagesForm />
          </Route> */}
          {/*
          <Route path='/spots/:spotId/reviews' exact >
            <ReviewForm />
          </Route>

          <Route path='/spots/:spotId/reviews/:reviewId' exact>
            <ReviewForm />
          </Route> */}

        </Switch>
      )}

    </>
  )
}

export default App;

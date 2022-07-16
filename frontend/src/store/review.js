import { csrfFetch } from './csrf';

// TYPES
const GET_SPOT_REVIEWS = 'spot/getSpotsReview'
const GET_USER_REVIEWS = 'spot/getUserReviews'
const CREATE_REVIEW = 'spot/createNewReview'
const DELETE_REVIEW = 'reviews/deleteUserReview'


// ACTIONS
export const getReviews = (reviews) => {
    return {
        type: GET_SPOT_REVIEWS,
        payload: reviews
    }
}

export const userReviews = (reviews) => {
    return {
        type: GET_USER_REVIEWS,
        payload: reviews
    }
}

export const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        payload: review
    }
}

export const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        payload: reviewId
    }
}

// THUNKS

//get a spot's reviews
export const getSpotReviews = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}/reviews`);
    // if (response.ok) {
    const parsedRes = await response.json();
    dispatch(getReviews(parsedRes));
    // }
}

//get a User's reviews for current spot
export const getUserReviews = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/reviews/me`);
    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(userReviews(parsedRes));
    }
}

export const createNewReview = (reviewFormInput, spotId) => async (dispatch) => {
    console.log(reviewFormInput)
    const response = await csrfFetch(`/spots/${spotId}/reviews`, {
        method: "POST",
        body: JSON.stringify(reviewFormInput)
    });
    console.log(response)

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(createReview(parsedRes));
        return parsedRes;
    }
}


export const deleteUserReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/reviews/${reviewId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(deleteReview(reviewId));

        return parsedRes;
    }
}

// INITIAL STATE
const initialState = {}

// REDUCERS
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPOT_REVIEWS:
            const getReviewsState = {};
            action.payload.Reviews.forEach(review => {
                getReviewsState[review.id] = review;
            })
            return getReviewsState;

        case GET_USER_REVIEWS:
            const getUserReviews = {};
            action.payload.Reviews.forEach(review => {
                getUserReviews[review.id] = review;
            })

            return getUserReviews;

        case CREATE_REVIEW:
            const createReviewState = { ...state };
            createReviewState[action.payload.id] = action.payload;
            return createReviewState;

        case DELETE_REVIEW:
            const deleteReviewState = { ...state }
            delete deleteReviewState[action.payload];
            return deleteReviewState;
        default:
            return state
    }
}
export default reviewReducer;

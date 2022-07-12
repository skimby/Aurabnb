import { csrfFetch } from './csrf';

// TYPES
const GET_REVIEWS = 'spots/:spotId/reviews'

// ACTIONS
export const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        payload: reviews
    }
}

// THUNKS

//get a spot's reviews
export const getSpotReviews = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}/reviews`);
    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(getReviews(parsedRes));
    }
}

// INITIAL STATE
const initialState = {}



// REDUCERS
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            const getReviewsState = { ...state };
            console.log(action.payload)

            action.payload.Reviews.forEach(review => {
                getReviewsState[review.id] = review;
            })
            return getReviewsState;
        default:
            return state
    }
}
export default reviewReducer;

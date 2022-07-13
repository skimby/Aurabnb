import { csrfFetch } from './csrf';

// TYPES
const GET_REVIEWS = 'spots/:spotId/reviews'
const DELETE_REVIEW = 'reviews/:reviewId'


// ACTIONS
export const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        payload: reviews
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
    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(getReviews(parsedRes));
    }
}

// export const deleteUserReview = (reviewId) => async (dispatch) => {
//     const response = await csrfFetch(`reviews/${reviewId}`);
//     if (response.ok) {
//         const parsedRes = await response.json();
//         dispatch(deleteReview(parsedRes));
//     }
// }

// INITIAL STATE
const initialState = {}
const getUserReviews = async () => {
    const response = await csrfFetch(`/reviews/me`);
    const parsedRes = await response.json();
    const reviewsArr = await parsedRes.Reviews;
    reviewsArr.forEach(review => {
        initialState[review.id] = review;
    })
}
getUserReviews();



// REDUCERS
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            const getReviewsState = {};
            action.payload.Reviews.forEach(review => {
                getReviewsState[review.id] = review;
            })
            return getReviewsState;
        case DELETE_REVIEW:
            const deleteReviewState = { ...state }
            delete deleteReview[action.payload];
            return deleteReviewState;
        default:
            return state
    }
}
export default reviewReducer;

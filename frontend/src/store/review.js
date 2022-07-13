import { csrfFetch } from './csrf';

// TYPES

const GET_SPOT_REVIEWS = 'spot/:spotId/reviews'
const GET_USER_REVIEWS = 'spot/:spotId/reviews'
const DELETE_REVIEW = 'reviews/:reviewId'


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

export const deleteReview = () => {
    return {
        type: DELETE_REVIEW
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
//get a User's reviews for current spot
export const getUserReviews = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/reviews/me`);
    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(userReviews(parsedRes));
    }
}

export const deleteUserReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`reviews/${reviewId}`,
        {
            method: 'DELETE'
        });
    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(deleteReview(parsedRes));
        return parsedRes;
    }
}

// INITIAL STATE
const initialState = {}
// const getUserReviews = async () => {
//     const response = await csrfFetch(`/reviews/me`);
//     const parsedRes = await response.json();
//     const reviewsArr = await parsedRes.Reviews;
//     reviewsArr.forEach(review => {
//         initialState[review.id] = review;
//     })
// }
// getUserReviews();



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
            const getUserReviews = { ...state };
            action.payload.Reviews.forEach(review => {
                getUserReviews[review.id] = review;
            })
            return getUserReviews;
        case DELETE_REVIEW:
            const deleteReviewState = { ...state }
            return deleteReviewState;
        default:
            return state
    }
}
export default reviewReducer;

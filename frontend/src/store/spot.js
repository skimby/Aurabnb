import { csrfFetch } from './csrf';

// TYPES
const ADD_SPOT = 'spots/createSpot'
const EDIT_SPOT = 'spots/editSpot'

// ACTION
export const addSpot = (spotFormInput) => {
    return {
        type: ADD_SPOT,
        payload: spotFormInput
    }
}

// THUNKS
export const createSpot = (spotFormInput) => async (dispatch) => {

    const response = await csrfFetch("/spots", {
        method: "POST",
        body: JSON.stringify(spotFormInput)
    });


    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(addSpot(parsedRes));
        return parsedRes;
    }
};

export const editSpot = (spotFormInput) => async (dispatch) => {

    const response = await csrfFetch("/spots/:spotId", {
        method: "PUT",
        body: JSON.stringify(spotFormInput)
    });


    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(addSpot(parsedRes));
        return parsedRes;
    }
};

// INITIAL STATE
const initialState = {}

// REDUCERS
const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SPOT:
            const setSpotState = { ...state };
            setSpotState[action.payload.id] = action.payload;
            return setSpotState;
        case EDIT_SPOT:
            const editSpotState = { ...state };

        default:
            return state;
    }
}

export default spotReducer;

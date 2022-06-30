import { csrfFetch } from './csrf';

// TYPES
const ADD_SPOT = 'spot/createSpot'
const EDIT_SPOT = 'spot/editSpot'
const GET_SPOT = 'spot/getSpot'
const LOAD_SPOTS = 'spot/loadSpots'

// ACTION
export const addSpot = (spotFormInput) => {
    return {
        type: ADD_SPOT,
        payload: spotFormInput
    }
}

export const getSpot = (spot) => {
    return {
        type: GET_SPOT,
        payload: spot
    }
}

export const loadSpots = (spots) => {
    return {
        type: GET_SPOT,
        payload: spots
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

export const getOneSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch("/spots");
    const parsedRes = await response.json();
    dispatch(getSpot(parsedRes));
    return parsedRes;
};

export const loadAllSpots = (spots) => async (dispatch) => {
    const response = await csrfFetch("/spots", {
        method: "POST",
        body: JSON.stringify(spots)
    });

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(loadSpots(parsedRes));
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
        // case EDIT_SPOT:
        //     const editSpotState = { ...state };
        case GET_SPOT:
            const getSpotState = { ...state };
            return getSpotState[action.payload.id];
        case LOAD_SPOTS:
            const loadSpotsState = { ...state };
            console.log(action.payload.spots)
        default:
            return state;
    }
}

export default spotReducer;

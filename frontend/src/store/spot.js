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
        type: LOAD_SPOTS,
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
        dispatch(addSpot(parsedRes.id));
        return parsedRes;
    }
};

//the thunk is what is called on th front end so it needs to take in the spotID, not spot. It uses the spotId to then fetch the backend info
export const getOneSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}`);
    if (response.ok) {
        const parsedRes = await response.json();
        //then we get the full spot obj and then pass it into getSpot
        dispatch(getSpot(parsedRes));
    }
    // return parsedRes;
};


// SET INITIAL STATE BY LOADING SEED DATA
const initialState = { currentSpot: null }

const loadAllSpots = async () => {
    const response = await csrfFetch("/spots");
    const parsedRes = await response.json();
    const spotsArr = await parsedRes.Spots;

    spotsArr.forEach(spot => {
        initialState[spot.id] = spot;
    })
}
loadAllSpots();


// REDUCERS
const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SPOT:
            const setSpotState = { ...state };
            setSpotState[action.payload.id] = action.payload;
            setSpotState.currentSpot = action.payload;
            return setSpotState;
        // case EDIT_SPOT:
        //     const editSpotState = { ...state };


        case GET_SPOT:
            const getSpotState = { ...state };
            getSpotState.currentSpot = action.payload;
            return getSpotState
        default:
            return state;
    }
}

export default spotReducer;

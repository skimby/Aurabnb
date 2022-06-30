import { csrfFetch } from './csrf';

// TYPES
const CREATE_SPOT = '/create'

// ACTION
export const create = (spotFormInput) => {
    return {
        type: CREATE_SPOT,
        payload: spotFormInput
    }
}

// THUNKS
export const CreateSpot = (spotFormInput) => async (dispatch) => {
    console.log(spotFormInput)

    const response = await csrfFetch("/spots", {
        method: "POST",
        body: JSON.stringify(spotFormInput)
    });

    // trying to find the bug here *** by console logging each step. 2 is not logging so bug happens before
    console.log('2')

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(create(parsedRes));
        return parsedRes;
    }
};

// INITIAL STATE
const initialState = {}

// REDUCERSs
const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SPOT:
            const setSpotState = { ...state };
            setSpotState.spot = action.payload;
            console.log(setSpotState)
            return setSpotState;
        default:
            return state;
    }
}

export default spotReducer;

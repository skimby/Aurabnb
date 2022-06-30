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
    const {
        ownerId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price } = spotFormInput;

    const response = await csrfFetch("/spots", {
        method: "POST",
        body: JSON.stringify({
            ownerId,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        }),
    });
    const parsedRes = await response.json();
    dispatch(create(parsedRes));
    return parsedRes;
};

// INITIAL STATE
const initialState = {}

// REDUCERS
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

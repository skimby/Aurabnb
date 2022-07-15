import { csrfFetch } from './csrf';


// TYPES
const LOAD_SPOTS = 'spot/loadSpots'
const ADD_SPOT = 'spot/createSpot'
const EDIT_SPOT = 'spot/editSpot'
const GET_SPOT = 'spot/getSpot'
const DELETE_SPOT = 'spot/deleteSpot'
const ADD_IMAGE = 'spot/addImage'
// ACTION
export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        payload: spots
    }
}

export const addSpot = (spot) => {
    return {
        type: ADD_SPOT,
        payload: spot
    }
}

export const getSpot = (spot) => {
    return {
        type: GET_SPOT,
        payload: spot
    }
}

export const editSpot = (spot) => {
    return {
        type: EDIT_SPOT,
        payload: spot
    }
}

export const deleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        payload: spotId
    }
}
export const addImage = (image, spotId) => {
    return {
        type: ADD_IMAGE,
        payload: [image, spotId]

    }
}

// THUNKS
export const loadAllSpots = () => async (dispatch) => {
    const response = await csrfFetch("/spots");

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(loadSpots(parsedRes));
    }
}


export const createSpot = (spotFormInput, uploadedImages) => async (dispatch) => {
    //Create Spot Request
    const response = await csrfFetch("/spots", {
        method: "POST",
        body: JSON.stringify(spotFormInput)
    });

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(addSpot(parsedRes));

        const spot = await csrfFetch(`/spots/${parsedRes.id}`);

        if (spot.ok) {
            const parsedSpot = await spot.json();


            //IMAGE STUFF
            // for single file
            // const formData = new FormData();
            // if (uploadedImages) formData.append("image", uploadedImages);

            //Create Image request //going to try not adding anything image realted to the reducer since it it connected to spot and spot will be update??
            // await csrfFetch(`/spots/${parsedSpot.id}/images`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            //     body: formData
            // });

            dispatch(getSpot(parsedSpot));
            return parsedSpot;
        }

    }
};

export const updateSpot = (spotFormInput, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}`, {
        method: "PUT",
        body: JSON.stringify(spotFormInput)
    });

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(editSpot(parsedRes));
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
};

export const deleteOneSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(deleteSpot(spotId));
        return parsedRes;
    }
};
//Add image to spot by spotID
export const addSpotImage = (formInput, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}/images`, {
        method: "POST",
        body: JSON.stringify(formInput)
    });

    if (response.ok) {
        const parsedRes = await response.json();
        dispatch(addImage(parsedRes, spotId));
        return parsedRes;
    }
};

// SET INITIAL STATE BY LOADING SEED DATA
const initialState = { currentSpot: null }

// REDUCERS
const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPOTS:
            const loadSpotsState = { ...state };
            action.payload.Spots.forEach((spot) => {
                loadSpotsState[spot.id] = spot;
            })
            return loadSpotsState;

        case ADD_SPOT:
            const setSpotState = { ...state };
            setSpotState[action.payload.id] = action.payload;
            setSpotState.currentSpot = action.payload;
            return setSpotState;

        case EDIT_SPOT:
            const editSpotState = { ...state };
            editSpotState[action.payload.id] = action.payload;
            // editSpotState.currentSpot = action.payload;
            return editSpotState

        case GET_SPOT:
            const getSpotState = { ...state };
            getSpotState.currentSpot = action.payload;
            return getSpotState;

        case DELETE_SPOT:
            const deleteSpotState = { ...state };
            delete deleteSpotState[action.payload];
            deleteSpotState.currentSpot = null;
            return deleteSpotState;

        case ADD_IMAGE:
            const addImageState = { ...state };

            // addImageState[action.payload[1]] =
            return addImageState;
        default:
            return state;
    }
}

export default spotReducer;

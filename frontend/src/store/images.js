import { csrfFetch } from './csrf';

//TYPE
const GET_IMAGES = 'spots/:spotId/images';

//ACTION
export const getSpotImages = (spot) => {
    return {
        type: GET_IMAGES,
        payload: spot
    }
}

//THUNKS
export const getImages = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/spots/${spotId}/images`);

    if (response.ok) {
        const parsedRes = await response.json();

        console.log(parsedRes);
        dispatch(getSpotImages(parsedRes));
    }
}

// INITIAL STATE
const initialState = {};


//REDUCERS
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            const getImagesState = { ...state };
            getImagesState[action.payload.id] = action.payload;
            console.log(getImagesState)
            return getImagesState;
        default:
            return state;
    }
}
export default imageReducer;

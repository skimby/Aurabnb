import { csrfFetch } from './csrf';

//TYPE
const ADD_IMAGES = 'images/addImages';

//ACTION
export const addImages = (image) => {
    return {
        type: ADD_IMAGES,
        payload: image
    }
}

//THUNKS
export const addSpotImages = ((uploadedImages, spotId) => async (dispatch) => {

    const formData = new FormData();
    // for single file
    if (uploadedImages) formData.append("image", uploadedImages);

    const res = await csrfFetch(`/spots/${spotId}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    const data = await res.json();
    dispatch(addImages(data));
    return data;
})

// INITIAL STATE
const initialState = {};


//REDUCERS
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGES:
            const addImagesState = { ...state };
            addImagesState[action.payload.id] = action.payload;
            return addImagesState;
        default:
            return state;
    }
}
export default imageReducer;

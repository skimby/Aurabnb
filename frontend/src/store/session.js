import { csrfFetch } from './csrf';

// TYPES
const SET_USER = 'users/setUser';
const REMOVE_USER = 'users/removeUser';

// ACTIONS
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

// THUNK ACTIONS
export const loginUser = (payload) => async (dispatch) => {
    //where do we use the csrfFetch function ?

    const res = await csrfFetch('/users/login', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const parsedRes = await res.json();
        console.log(parsedRes)
        dispatch(setUser(parsedRes))
        return parsedRes;
    }
}

// INITIAL STATE
const initialState = {
    user: null
}

// REDUCERS
const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const setUserState = { ...state };
            setUserState.user = action.payload;
            return setUserState;
        case REMOVE_USER:
            return initialState;
        default:
            return state;
    }
}

export default sessionReducer;

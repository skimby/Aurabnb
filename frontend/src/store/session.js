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
export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await csrfFetch('/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();
    if (data.id) {
        dispatch(setUser(data));
    }
    return data;
};


export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch('/session');
    // console.log(res)
    const parsedRes = await res.json();
    dispatch(setUser(parsedRes.user));
    return res;
}

export const signup = (user) => async (dispatch) => {
    const { firstName, lastName, email, password } = user;
    const response = await csrfFetch("/users/signup", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await response.json();
    dispatch(setUser(data));
    return response;
};

export const logout = () => async (dispatch) => {
    const res = await csrfFetch("/session", {
        method: 'DELETE'
    });
    dispatch(removeUser());
    return res;
}

// DEMO USER
export const demoUser = () => async (dispatch) => {
    const res = await csrfFetch('/users/demoUser');
    const parsedRes = await res.json();
    dispatch(setUser(parsedRes));
    return parsedRes;
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

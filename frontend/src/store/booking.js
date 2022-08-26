import { csrfFetch } from './csrf';

// TYPES
const USERS_BOOKINGS = 'users/getUsersBookings'


// ACTIONS
export const getBookings = (bookings) => {
    return {
        type: USERS_BOOKINGS,
        payload: bookings
    }
}

// THUNKS
export const getUsersBookings = () => async (dispatch) => {
    const res = await csrfFetch('/api/bookings/me');
    const parsedRes = await res.json();
    await dispatch(getBookings(parsedRes))

    // .catch(async (res) => {
    //     const data = await res.json()
    //     if (data) {
    //         console.clear()
    //     }
    // });

    return res;
}

// INITIAL STATE
const initialState = {}

// REDUCERS
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_BOOKINGS:
            const userBookingsState = { ...state };
            action.payload.Bookings.forEach(booking => {
                userBookingsState[booking.id] = booking
            })
            return userBookingsState;
        default:
            return state;
    }
}

export default bookingReducer;

import {GET_USER_AUTH, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, SET_AUTH} from "../types/usersTypes";

const INITIAL_STATE = {
    isAuthenticated: false,
    users: [],
    load: false
}

const usersReducers = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                users: payload.users
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
        case GET_USER_AUTH:
            return {
                ...state,
                isAuthenticated: true,
                users: payload,
                load: true
            };
        case SET_AUTH:
            return {
                ...state,
                isAuthenticated: true,
            };
        default:
            return state;
    }
}
export default usersReducers;

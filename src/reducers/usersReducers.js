import {LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS} from "../types/usersTypes";

const INITIAL_STATE = {
    isAuthenticated: false,
    user: [],
    load: false
}

const usersReducers = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload.user
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload.user,
                load: true
            };
        default:
            return state;
    }
}
export default usersReducers;

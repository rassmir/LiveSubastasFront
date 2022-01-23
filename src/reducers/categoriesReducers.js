import {
    ADD_CATEGORY,
    DELETE_CATEGORY, ERROR_CATEGORY,
    GET_ALL_CATEGORIES,
    LOAD_CATEGORY,
    UPDATE_CATEGORY
} from "../types/categoriesTypes";

const INITIAL_STATE = {
    categories: [],
    load: false
}

const categoriesReducers = (state = INITIAL_STATE, action) => {
    //TODO ES SIN DATA  = SOLO ES "PAYLOAD"
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: payload,
                load: false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, payload.data]
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => category.id === payload.data.id ? payload.data : category)
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== payload)
            }
        case LOAD_CATEGORY:
            return {...state, load: true}
        case ERROR_CATEGORY:
            return {...state, error: payload, load: false}
        default:
            return state;
    }
}
export default categoriesReducers;
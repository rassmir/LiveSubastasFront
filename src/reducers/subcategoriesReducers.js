import {
    ADD_SUBCATEGORY,
    DELETE_SUBCATEGORY, ERROR_SUBCATEGORY,
    GET_ALL_SUBCATEGORIES, LOAD_SUBCATEGORY,
    UPDATE_SUBCATEGORY
} from "../types/subcategoriesTypes";

const INITIAL_STATE = {
    subcategories: [],
    load: false
}

const subcategoriesReducers = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_SUBCATEGORIES:
            return {
                ...state,
                subcategories: payload,
                load: false
            }
        case ADD_SUBCATEGORY:
            return {
                ...state,
                subcategories: [...state.subcategories, payload.data]
            }
        case UPDATE_SUBCATEGORY:
            return {
                ...state,
                subcategories: state.subcategories.map(category => category.id === payload.data.id ? payload.data : category)
            }
        case DELETE_SUBCATEGORY:
            return {
                ...state,
                subcategories: state.subcategories.filter(category => category.id !== payload)
            }
        case LOAD_SUBCATEGORY:
            return {...state, load: true}
        case ERROR_SUBCATEGORY:
            return {...state, error: payload, load: false}
        default:
            return state;
    }
}
export default subcategoriesReducers;
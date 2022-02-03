import {ADD_BRAND, DELETE_BRAND, ERROR_BRAND, GET_ALL_BRANDS, LOAD_BRAND, UPDATE_BRAND} from "../types/brandsTypes";

const INITIAL_STATE = {
    brands: [],
    load: false
}

const brandsReducers = (state = INITIAL_STATE, action) => {
    //TODO ES SIN DATA  = SOLO ES "PAYLOAD"
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_BRANDS:
            return {
                ...state,
                brands: payload,
                load: false
            }
        case ADD_BRAND:
            return {
                ...state,
                brands: [...state.brands, payload.data]
            }
        case UPDATE_BRAND:
            return {
                ...state,
                brands: state.brands.map(brand => brand.id === payload.data.id ? payload.data : brand)
            }
        case DELETE_BRAND:
            return {
                ...state,
                brands: state.brands.filter(brand => brand.id !== payload)
            }
        case LOAD_BRAND:
            return {...state, load: true}
        case ERROR_BRAND:
            return {...state, error: payload, load: false}
        default:
            return state;
    }
}
export default brandsReducers;
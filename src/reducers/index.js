import {combineReducers} from "redux";
import usersReducers from "./usersReducers";
import categoriesReducers from "./categoriesReducers";
import subcategoriesReducers from "./subcategoriesReducers";
import brandsReducers from "./brandsReducers";
export default combineReducers({
    usersReducers,
    categoriesReducers,
    subcategoriesReducers,
    brandsReducers
})
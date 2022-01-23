import axios from "axios";

const SERVER_URL = process.env["REACT_APP_SERVER_URL"];

export const getAll = (url, type_load, type_success, type_error) => async dispatch => {
    dispatch({
        type: type_load
    })
    try {
        const response = await axios.get(SERVER_URL + url);
        dispatch({
            type: type_success,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: type_error,
            payload: error.message
        })
    }
}

export const getById = (url, id, type_load,type_success,type_error) => async dispatch => {
    dispatch({
        type: type_load
    })
    try {
        const response = await axios.get(SERVER_URL + `${url}/${id}`);
        dispatch({
            type: type_success,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: type_error,
            payload: error.message
        })
    }
}
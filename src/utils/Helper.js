import axios from "axios";
import {fail, successfull} from "./Swal";
import URL from "../ConfigUrl";

const Token = localStorage.access_token;

export const lStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export const postAll = (
    uri,
    data = [],
    type_success,
    type_error,
    message,
    text,
) => async dispatch => {
    await axios
        .post(URL + `${uri}`, data, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
        .then(response => {
            if (message === true) {
                successfull(text);
            }
            dispatch({
                type: type_success,
                payload: response.data
            });
        })
        .catch(error => {
            fail();
            dispatch({
                type: type_error,
                payload: error.message
            });
        });
};

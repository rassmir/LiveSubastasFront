import axios from "axios";
import URL from "../ConfigUrl"
import {fail, successfull} from "../utils/Swal"
import history from "../routes/history";
export const fregister = (
    uri,
    data = [],
    type_success,
    type_error,
    message,
    text_success,
    text_fail
) => async dispatch => {
    await axios.post(URL + `${uri}`, data)
        .then(response => {
            if (message === true) {
                successfull(text_success);
            }
            dispatch({
                type: type_success,
                payload: response
            });
            history.push("/");
        }).catch(error => {
            fail(text_fail);
            dispatch({
                type: type_error,
                payload: error.message
            });
            history.push("/");
        });
};

import axios from "axios";
import {fail, successfull} from "../utils/Swal"
import history from "../routes/history";
import swal from 'sweetalert';
import {LOGIN_SUCCESS, SET_AUTH} from "../types/usersTypes";

const SERVER_URL = process.env["REACT_APP_SERVER_URL"];

export const fregister = (
    uri,
    data = [],
    type_success,
    type_error,
    message,
    text_success,
    text_fail
) => async dispatch => {
    await axios.post(SERVER_URL + `${uri}`, data)
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


export const fLogin = (uri, data = [], text_success, type_success, redirect, text_fail, type_error) => async dispatch => {
    await axios.post(SERVER_URL + `${uri}`, data)
        .then(response => {
            const access_token = response.data.access_token
            localStorage.setItem('access_token', access_token);
            successfull(text_success);
            dispatch({
                type: type_success,
                payload: response
            });
            if (response.data.user.rol === 10 && response.data.user.status === 1) {
                history.push(redirect);
            } else if (response.data.user.rol === 1 && response.data.user.status === 1) {
                history.push(redirect);
            } else {
                swal({
                    title: "Error!",
                    text: "Tu cuenta ha sido desactivada, comunicate con el administrador del sistema",
                    icon: "error",
                    timer: 3000,
                    button: false
                })
                localStorage.removeItem('access_token');
                localStorage.clear();
            }
        }).catch(error => {
            localStorage.removeItem('access_token');
            localStorage.clear();
            fail(text_fail);
            dispatch({
                type: type_error,
                payload: error.message
            });
            history.push("/");
        });
}

export const middlewareAuth = (access_token) => {
    if (!localStorage.access_token) {
        localStorage.clear()
        window.location.reload();
    }
    return {
        type: SET_AUTH,
        access_token
    };
}

export const authProfile = (url, type_success, type_error) => async dispatch => {
    await axios.get(SERVER_URL + url, {
        headers: {
            'Authorization': `Bearer ${localStorage.access_token}`
        }
    })
        .then((response) => {
            dispatch({
                type: type_success,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: type_error,
                payload: error.message
            });
        })
}


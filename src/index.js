import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-data-table-component-extensions/dist/index.css";
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {Provider} from "react-redux";
import {middlewareAuth} from "./actions/usersActions";

const loggerMiddleware = createLogger();

export const store = createStore(
    reducers, //Todos los reducers
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
);

if (localStorage.access_token) {
    store.dispatch(middlewareAuth(localStorage.access_token));
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from "react-redux";

const RouteUser = ({component: Component, ...props}) => {

    const uReducer = useSelector(state => state.usersReducers);
    const {isAuthenticated, access_token} = uReducer;
    // eslint-disable-next-line eqeqeq
    return (
        <Route {...props} render={props => !isAuthenticated || !access_token ? (
            <Redirect to="/"/>
        ) : (
            <Component {...props} />
        )}/>

    );
}
export default RouteUser

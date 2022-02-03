import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const RouteAdmin = ({component: Component, ...props}) => {

    const {users, isAuthenticated} = useSelector(state => state.usersReducers);
    const user = users.rol == 1;
    return (
        <Route {...props} render={props => !isAuthenticated || user ? (
            <Redirect to="/"/>
        ) : (
            <Component {...props} />
        )}/>

    );
}
export default RouteAdmin

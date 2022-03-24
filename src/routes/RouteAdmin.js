import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const RouteAdmin = ({component: Component, ...props}) => {
    const {user, isAuthenticated} = useSelector(state => state.usersReducers);
    const usr = user.rol == 10;
    console.log('Este es',user)
    return (
        <Route {...props} render={props => !isAuthenticated ? (
            <Redirect to="/"/>
        ) : (
            <Component {...props} />
        )}/>

    );
}
export default RouteAdmin

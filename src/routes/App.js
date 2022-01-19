import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Index from "../containers/Index";
import RegisterSeller from "../containers/RegisterSeller";
import history from './history';
import Profile from "../components/user/Profile";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/registro-vendedor" component={RegisterSeller}/>
                <Route exact path="/panel/mi-perfil" component={Profile}/>
            </Switch>
        </Router>
    )
}
export default App
import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Index from "../containers/Index";
import RegisterSeller from "../containers/RegisterSeller";
import history from './history';
import Profile from "../containers/user/Profile";
import Login from "../containers/admin/Login";
import AdminIndex from "../containers/admin/Index";
import Category from "../containers/admin/Category";
import SubCategory from "../containers/admin/SubCategory";
import RouteAdmin from "./RouteAdmin";
import Brand from "../containers/admin/Brand";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/registro-vendedor" component={RegisterSeller}/>
                <Route exact path="/panel/mi-perfil" component={Profile}/>

                <Route exact path="/admin/login" component={Login}/>
                <RouteAdmin exact path="/admin/inicio" component={AdminIndex}/>
                <RouteAdmin exact path="/admin/categorias" component={Category}/>
                <RouteAdmin exact path="/admin/subcategorias" component={SubCategory}/>
                <RouteAdmin exact path="/admin/marcas" component={Brand}/>
            </Switch>
        </Router>
    )
}
export default App
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs';
import SignUp from './Components/SignUp/SignUp';
import SearchOutput from './Components/SearchOutput/SearchOutput';
import history from './history';

export default class Routes extends Component{
    render(){
        return(
            <Router history = {history}>
                <Switch>
                    <Route path = "/Login" component = {Login} />
                    <Route path = "/Home" component = {Home} />
                    <Route path = "/AboutUs" component = {AboutUs} />
                    <Route path = "/SignUp" component = {SignUp} />
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/SearchOutput" component = {SearchOutput} />
                </Switch>
            </Router>
        )
    }
}
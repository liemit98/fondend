import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink ,Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Header from '../components/Header'
import Container from '../components/Container';
import Footer from '../components/Footer';


class DieuHuongURL extends Component {
    render() {
        return (
            <div>  
                <Switch>
               <Route path="/home" exact component={Home} />
               <Route path="/"  component={Login} />  
               </Switch>
            </div>
        );
    }
}

export default DieuHuongURL;
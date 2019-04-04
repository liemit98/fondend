import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink  } from "react-router-dom";
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <Router>
            <div>                
                <Header/>
                <Container/>  
                <Footer/>
            </div>  
            </Router>        
        );
    }
}

export default Home;
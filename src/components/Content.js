import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from './Post'
import Post_new from './Post_new';
import Post_detail from './Post_detail';
import Posts_management from './Posts_management';


class Content extends Component {
    render() {
        return (
            <div>
            <Route path="/home" exact component={Post} />
            <Route path="/home/post" component={Post_new} />
            <Route path="/home/postdetail" component={Post_detail} />
            <Route path="/home/post_management" component={Posts_management} />
            </div>
        );
    }
}

export default Content;
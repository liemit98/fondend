import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SidebarMenu from './SidebarMenu';
import Content from './Content';

class Container extends Component {
    render() {
        return (
            <div className="page-container">
  {/* BEGIN SIDEBAR */}
  <div className="page-sidebar-wrapper">
    {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
    {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
    <div className="page-sidebar navbar-collapse collapse">
      {/* BEGIN SIDEBAR MENU */}
            <SidebarMenu/>
      {/* END SIDEBAR MENU */}
    </div>
  </div>
  {/* END SIDEBAR */}
  {/* BEGIN CONTENT */}
          
        <Content/>
        
  {/* END CONTENT  */}
</div>
        );
    }
}

export default Container;
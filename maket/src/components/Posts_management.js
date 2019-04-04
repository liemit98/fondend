import React, { Component } from 'react';

class Posts_management extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
            <div className="page-content">
              {/* BEGIN PAGE HEAD */}
              <div className="page-head">
                {/* BEGIN PAGE TITLE */}
                <div className="page-title">
                  <h1>QUẢN LÝ ĐỀ TÀI CỦA BẠN</h1>
                </div>
                {/* END PAGE TITLE */}
                {/* BEGIN PAGE TOOLBAR */}
                <div className="page-toolbar">
                  {/* BEGIN THEME PANEL */}
                  <div className="btn-group btn-theme-panel">
                    <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                      <i className="icon-settings" />
                    </a>
                    <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                      <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <h3>THEME</h3>
                          <ul className="theme-colors">
                            <li className="theme-color theme-color-default active" data-theme="default">
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Dark Header</span>
                            </li>
                            <li className="theme-color theme-color-light" data-theme="light">
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Light Header</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12 seperator">
                          <h3>LAYOUT</h3>
                          <ul className="theme-settings">
                            <li>
                              Theme Style
                              <select className="layout-style-option form-control input-small input-sm">
                                <option value="square" selected="selected">Square corners</option>
                                <option value="rounded">Rounded corners</option>
                              </select>
                            </li>
                            <li>
                              Layout
                              <select className="layout-option form-control input-small input-sm">
                                <option value="fluid" selected="selected">Fluid</option>
                                <option value="boxed">Boxed</option>
                              </select>
                            </li>
                            <li>
                              Header
                              <select className="page-header-option form-control input-small input-sm">
                                <option value="fixed" selected="selected">Fixed</option>
                                <option value="default">Default</option>
                              </select>
                            </li>
                            <li>
                              Top Dropdowns
                              <select className="page-header-top-dropdown-style-option form-control input-small input-sm">
                                <option value="light">Light</option>
                                <option value="dark" selected="selected">Dark</option>
                              </select>
                            </li>
                            <li>
                              Sidebar Mode
                              <select className="sidebar-option form-control input-small input-sm">
                                <option value="fixed">Fixed</option>
                                <option value="default" selected="selected">Default</option>
                              </select>
                            </li>
                            <li>
                              Sidebar Menu
                              <select className="sidebar-menu-option form-control input-small input-sm">
                                <option value="accordion" selected="selected">Accordion</option>
                                <option value="hover">Hover</option>
                              </select>
                            </li>
                            <li>
                              Sidebar Position
                              <select className="sidebar-pos-option form-control input-small input-sm">
                                <option value="left" selected="selected">Left</option>
                                <option value="right">Right</option>
                              </select>
                            </li>
                            <li>
                              Footer
                              <select className="page-footer-option form-control input-small input-sm">
                                <option value="fixed">Fixed</option>
                                <option value="default" selected="selected">Default</option>
                              </select>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END THEME PANEL */}
                </div>
                {/* END PAGE TOOLBAR */}
              </div>
              {/* END PAGE HEAD */}
              {/* BEGIN PAGE BREADCRUMB */}
              <ul className="page-breadcrumb breadcrumb hide">
                <li>
                  <a href="#">Home</a><i className="fa fa-circle" />
                </li>
                <li className="active">
                  Dashboard
                </li>
              </ul>
              {/* END PAGE BREADCRUMB */}
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  {/* BEGIN PORTLET*/}
                  <div className="portlet light ">
                    <div className="col-md-2 col-sm-12">
                      <img src="images/anhdaidien.jpg" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="col-md-9 col-sm-12">
                      <div className="caption caption-md" style={{fontSize: '18px'}}>
                        <i className="icon-bar-chart theme-font-color hide" />
                        <span className="caption-subject theme-font-color bold uppercase">XÂY DỰNG WEBSITE ĐĂNG
                          KÝ VÀ QUẢN LÝ HỘ TỊCH</span>
                        <span className="caption-helper hide">weekly stats...</span>
                      </div>
                      <div className="btn-control" style={{marginTop: '5px'}}>
                        <button type="button" className="btn" style={{width: '100px', backgroundColor: 'rgb(223, 117, 20)', color: 'white'}}>Sửa</button>
                        <a type="button" className="btn" style={{width: '100px', backgroundColor: 'rgb(202, 60, 60)', color: 'white'}} data-target="#myModal" data-toggle="modal">Xóa</a>
                        <button type="button" className="btn" style={{width: '100px', backgroundColor: 'rgb(28, 184, 65)', color: 'white'}}>Active</button>
                      </div>
                      <div className="infor">
                        <form className="form-horizontal" action="/action_page.php">
                          <div className="form-group col-md-5">
                            <label className="control-label " style={{color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Lượt
                              xem:
                              <span style={{color: 'black', marginLeft: '15px'}}>1500</span> </label>
                          </div>
                          <div className="form-group col-md-5">
                            <label className="control-label " style={{color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Ngày
                              đăng: <span style={{color: 'red', marginLeft: '15px'}}>26/02/2018</span>
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="description" style={{float: 'left', textAlign: 'justify'}}>
                        <p>Thông minh nhân tạo có nghĩa rộng như là trí thông minh trong các tác phẩm khoa
                          học viễn tưởng, nó là một trong những ngành trọng yếu của tin học. Trí thông
                          minh nhân tạo liên quan đến cách cư xử, sự học hỏi và khả năng thích ứng thông
                          minh của máy móc. Các ví dụ ứng dụng bao gồm các tác vụ điều khiển, lập kế hoạch
                          và lập lịch (scheduling), khả năng trả lời các câu hỏi về chẩn đoán bệnh, trả
                          lời khách hàng về các sản phẩm của một công ty,</p>
                      </div>
                    </div>
                    <div className="portlet-title" style={{border: '0px', marginBottom: '0px'}}>
                    </div>
                  </div>
                  {/* END PORTLET*/}
                </div>
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
          
        );
    }
}

export default Posts_management;
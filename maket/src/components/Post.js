import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
          <div className="page-content-wrapper">
  <div className="page-content">
    {/* BEGIN PAGE HEAD */}
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1 style={{fontWeight: 'bold'}}>DANH SÁCH ĐỀ TÀI CẦN TÌM HỢP TÁC </h1>
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
    <div className="row" style={{margin: '10px'}}>
      <div className="col-md-3">
        <div className="dropdown">
          <input type="text" placeholder="Cái này điền được nha ..." style={{marginBottom: '5px', height: '35px', width: '100%', borderRadius: '4px', backgroundColor: 'white', padding: '5px', border: '0px'}} />
        </div>
      </div>
      <div className="col-md-3">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{marginBottom: '5px', height: '35px', width: '100%', backgroundColor: 'white', color: 'black'}}>Chọn
            khoa để tài
            <span className="caret" /></button>
          <ul className="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{marginBottom: '5px', height: '35px', width: '100%', backgroundColor: 'white', color: 'black'}}>Chọn
            chuyên ngành
            <span className="caret" /></button>
          <ul className="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary " type="button" style={{marginBottom: '5px', width: '80%', backgroundColor: '#35aa47', color: 'white'}}>Tìm kiếm
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-sm-12">
        {/* BEGIN PORTLET*/}
        <div className="portlet light ">
          <div className="col-md-2 col-sm-12">
            <img src="images/anhdaidien.jpg" style={{width: '100%', height: '100%'}} />
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="row">
              <div className="col-md-10">
                <div className="caption caption-md" style={{fontSize: '18px'}}>
                  <i className="icon-bar-chart theme-font-color hide" />
                  <span className="caption-subject theme-font-color bold uppercase">XÂY DỰNG
                    WEBSITE
                    ĐĂNG
                    KÝ VÀ QUẢN LÝ HỘ TỊCH</span>
                  <span className="caption-helper hide">weekly stats...</span>
                </div>
              </div>
              <div className="col-md-2">
                <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t.checked {\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: orange;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t" }} />
                <button className="block-favoriate" style={{float: 'left'}}>
                  <span className="fa fa-star checked" style={{textAlign: 'center', fontSize: '26px', marginTop: '10px', marginRight: '10px', margin: 'auto'}} />
                  <p style={{textAlign: 'center'}}>Quan tâm</p>
                </button>
              </div>
            </div>
            <div className="btn-control" style={{marginTop: '5px'}}>
              <button type="button" className="btn " style={{width: '100px', backgroundColor: '#35aa47', color: 'white'}}>Xem</button>
              <a type="button" className="btn " style={{width: '100px', backgroundColor: 'rgb(22, 158, 244)', color: 'white'}} data-target="#exampleModal" data-toggle="modal">Kết nối</a>
            </div>
            <div className="infor">
              <form className="form-horizontal" action="/action_page.php">
                <div className="form-group col-md-5">
                  <label className="control-label " style={{color: 'black', fontWeight: 'bold', paddingRight: '0px', paddingLeft: '0px', textAlign: 'left'}}>Người
                    đăng: <span style={{color: 'green', marginLeft: '15px'}}>Nguyễn Hữu
                      Tiến</span> </label>
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

export default Post;
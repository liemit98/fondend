import React, { Component } from 'react';

class Post_detail extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
  <div className="page-content">
    {/* BEGIN PAGE HEAD */}
    <div className="page-head">
      {/* BEGIN PAGE TITLE */}
      <div className="page-title">
        <h1>THÔNG TIN CHI TIẾT ĐỀ TÀI</h1>
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
        <div className="portlet light ">
          <div className="portlet-title">
            <div className="col-md-2 col-logo">
              <span className="center-block text-center logo-wrapper">
                <a className="track-event clickable" data-evt-type="view-other-jobs">
                  <img src="https://images.vietnamworks.com/pictureofcompany/d0/3083684.jpg" alt="Việc làm MDA E&C Co.,ltd tuyển dụng" className="logo img-responsive" />
                </a>
              </span>
            </div>
            <div className="col-md-10 col-content-wrapper">
              <div className="caption caption-md" style={{marginBottom: '15px'}}>
                <i className="icon-bar-chart theme-font-color hide" />
                <span className="caption-subject theme-font-color bold uppercase" style={{fontSize: '18px'}}>XÂY DỰNG WEBSITE ĐĂNG
                  KÝ VÀ QUẢN LÝ HỘ TỊCH</span>
                <span className="caption-helper hide">weekly stats...</span>
                <div className="row" style={{fontSize: '16px'}}>
                  <div className="col-sm-12 company-name">
                    Người đăng:
                    <span style={{fontWeight: 'bold'}}>
                      Phạm Ngọc Diêu
                    </span>
                    <span className="gray-light m-l-xs m-r-xs hidden-xs">-</span>
                    <span className="company-location">
                      Khoa Công nghệ thông tin - Chuyên ngành Công nghệ phần
                      mềm
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span className="view gray-light" style={{color: '#dd1212', fontWeight: 'bold'}}>
                      100 lượt xem
                    </span>
                    <span className="gray-light m-l-xs m-r-xs">-</span>
                    <span className="expiry gray-light">Ngày đăng: 20/03/2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portlet-body" style={{margin: '20px', marginTop: '-10px', textAlign: 'justify'}}>
            <div className="row list-separated">
              <div className="row" style={{marginLeft: 'auto'}}>
                <a type="button" className="btn " style={{width: '100px', backgroundColor: '#dd3416', color: 'white', float: 'right', marginRight: '10px'}} data-target="#exampleModal" data-toggle="modal">Kết
                  nối</a>
                <h2 style={{fontSize: '21px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Roboto,Arial,sans-serif', marginTop: '5px', color: '#5b9bd1', marginBottom: '10px'}}>MÔ TẢ Ý TƯỞNG</h2>
                <div className="description" style={{color: '#555', fontSize: '15px'}}>
                  Để tài được này vui lằm nè ahihihihi...
                </div>
                <h2 style={{fontSize: '21px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Roboto,Arial,sans-serif', marginTop: '5px', color: '#5b9bd1', marginBottom: '10px'}}>NỘI DUNG Ý TƯỞNG</h2>
                <div className="description" style={{color: '#555', fontSize: '15px'}}>
                  - Quản lý dự án xây dựng hạ tầng KCN Vân Trung 2 (Bắc Giang)<br />
                  - Lên kế hoạch tổ chức, triển khai và giám sát tiến độ dự án<br />
                  - Bóc tách khối lượng thi công<br />
                  - Đảm bảo tiến độ thực hiện dự án theo đúng kế hoạch tổng thể đạt
                  chất lượng, ngân sách và an toàn.<br />
                  - Theo dõi về chất lượng và an toàn lao động các công việc xây dựng
                  của các dự án trong khu vực.<br />
                  - Kiểm tra và đề xuất phê duyệt về khối lượng yêu cầu thanh toán
                  hàng tháng của nhà thầu, cũng như khối lượng quyết toán khi hoàn tất
                  các hợp đồng.<br />
                  - Phối hợp với các phòng ban có liên quan<br />
                  - Thực hiện các công việc khác theo sự phân công của cấp trên.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END PORTLET*/}
  {/* END PAGE CONTENT INNER */}
</div>

        );
    }
}

export default Post_detail;
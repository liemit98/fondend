import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
            <div className="page-footer">
              <div className="page-footer-inner">
                2014 © Metronic by keenthemes.
              </div>
              <div className="scroll-to-top">
                <i className="icon-arrow-up" />
              </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 className="modal-title" id="exampleModalLabel">Nội dung liên hệ</h4>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="recipient-number" className="control-label">Số điện thoại:</label>
                        <input type="text" className="form-control" id="recipient-number" pattern="/((09|03|07|08|05)+([0-9]{8})\b)/g" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="control-label">Nội dung:</label>
                        <textarea className="form-control" id="message-text" rows={5} required defaultValue={""} />
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary checkmobile">Gửi</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Hủy bỏ</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
          
        );
    }
}

export default Footer;
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Tag1 from './component/Tag1'
import Tag2 from './component/Tag2'
import Tag3 from './component/Tag3'
import Tag4 from './component/Tag4'
import Tag5 from './component/Tag5'

export default function Profile() {
  return (
    <>
    <Header />
    <div className="overlay_nav" />
        <main className="profile" id="main">
          <section>
            <div className="top-info">
              <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src="img/avatar-lg.png" alt="" />
                <div className="camera" />
              </div>
              <div className="name">trần nghĩa</div>
              <p className="des">Thành viên của team CFD1-OFFLINE</p>
            </div>
            <div className="container">
              <div className="tab">
                <div className="tab-title">
                  <a href="#" className="active">Thông tin tài khoản</a>
                  <a href="#">Khóa học của bạn</a>
                  <a href="#">Dự án đã làm</a>
                  <a href="#">Lịch sử thanh toán</a>
                  <a href="#">Quản lý COIN của tôi</a>
                </div>
                <div className="tab-content">
                    <Tag1 />
                    <Tag2 />
                    <Tag3 />
                    <Tag4 />
                    <Tag5 />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
         {/* popup video homepage */}
        <div className="popup-video" style={{display: 'none'}}>
        <div className="wrap">
            <div className="video-src" />
        </div>
        <div className="close" />
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
        <div className="wrap">
            {/* login-form */}
            <div className="ct_login" style={{display: 'block'}}>
            <h2 className="title">Đăng nhập</h2>
            <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
            <div className="remember">
                <label className="btn-remember">
                <div>
                    <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
                </label>
                <a href="#" className="forget">Quên mật khẩu?</a>
            </div>
            <div className="btn rect main btn-login">đăng nhập</div>
            <div className="text-register" style={{}}>
                <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
                <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
                </div>
            </div>
            <div className="close">
                <img src="img/close-icon.png" alt="" />
            </div>
            </div>
            {/* email form */}
            <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
                <img src="img/close-icon.png" alt="" />
            </div>
            </div>
        </div>
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
        <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <div className="btn btn-icon rect white btn-google">
            <img src="img/google.svg" alt="" />
            Google
            </div>
            <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
            <div className="close">
            <img src="img/close-icon.png" alt="" />
            </div>
        </div>
        </div>
    </>
  )
}

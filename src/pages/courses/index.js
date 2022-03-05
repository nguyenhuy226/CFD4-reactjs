import React from 'react'
import Course from '../../components/Course'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Courses() {
  return (
    <>
        <Header />
        <div className="overlay_nav" />
        <main className="homepage" id="main">
          <section className="section-1">
            <div className="container">
              <h2 className="main-title">KHÓA HỌC CFD</h2>
              <p className="top-des">
                The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has
                a more-or-less normal
              </p>
              <div className="textbox">
                <h3 className="sub-title">KHÓA HỌC</h3>
                <h2 className="main-title">ONLINE</h2>
              </div>
              <div className="list row">
                <Course thumbnail="img/img1.png" name="Front-end căn bản" title="One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img2.png" name="React JS" title=" One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img3.png" name="Animation" title=" One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img4.png" name="Scss, Grunt JS và Boostrap 4" title="One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img5.png" name="UX/UI Design" title=" One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img6.png" name="Web Responsive" title="One of the best corporate fashion brands in Sydney"/>
              </div>
            </div>
          </section>
          <section className="section-2 section-blue">
            <div className="container">
              <div className="textbox white">
                <h3 className="sub-title">KHÓA HỌC</h3>
                <h2 className="main-title">OFFLINE</h2>
              </div>
              <div className="list row">
                <Course thumbnail="img/img4.png" name="Front-end căn bản" title="One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img7.png" name="Front-end nâng cao" title=" One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img8.png" name="Laravel framework" title="One of the best corporate fashion brands in Sydney"/>
              </div>
              <div className="text-deco">C</div>
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

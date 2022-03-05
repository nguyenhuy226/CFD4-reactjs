import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Fag() {
  return (
    <>
    <Header />
    <div className="overlay_nav" />
        <main className="faqpage" id="main">
          <div className="container">
            <section>
              <h2 className="main-title">Câu hỏi thường gặp</h2>
              <div className="row">
                <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                  <h3 className="accordion__title-main">Thông tin chung</h3>
                  <div className="accordion">
                    <div className="accordion__title">
                      <h2><strong>CFD là gì?</strong></h2>
                    </div>
                    <div className="content">
                      I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                      offers
                      some tangible benefits over alternatives like VueJS for simple page interactions.
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__title">
                      <h2><strong>Thành viên sáng lập CFD gồm những ai?</strong></h2>
                    </div>
                    <div className="content">
                      I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                      offers
                      some tangible benefits over alternatives like VueJS for simple page interactions.
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__title">
                      <h2><strong>Đăng ký khóa học như thế nào?</strong></h2>
                    </div>
                    <div className="content">
                      I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                      offers
                      some tangible benefits over alternatives like VueJS for simple page interactions.
                    </div>
                  </div>
                </div>
                <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                  <h3 className="accordion__title-main">Đăng ký, thanh toán và điểm thưởng</h3>
                  <div className="accordion">
                    <div className="accordion__title">
                      <h2><strong>CFD là gì?</strong></h2>
                    </div>
                    <div className="content">
                      I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                      offers
                      some tangible benefits over alternatives like VueJS for simple page interactions.
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__title">
                      <h2><strong>Thành viên sáng lập CFD gồm những ai?</strong></h2>
                    </div>
                    <div className="content">
                      I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                      offers
                      some tangible benefits over alternatives like VueJS for simple page interactions.
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__title">
                      <h2><strong>Đăng ký khóa học như thế nào?</strong></h2>
                    </div>
                    <div className="content">
                      I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                      offers
                      some tangible benefits over alternatives like VueJS for simple page interactions.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
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

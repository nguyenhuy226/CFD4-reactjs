import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Action from './component/Action'
import Banner from './component/Banner'
import CourseList from './component/CourseList'
import Gallery from './component/Gallery'
import Review from './component/Review'
import Special from './component/Special'

export default function Home() {
  return ( <>
    <Header />
    <div className="overlay_nav" />
    <main className="homepage" id="main">
      <Banner />
      <CourseList />
      <Special />
      {/* <section class="section-3">
        <div class="container">
            <div class="video">
                <iframe id="video-intro"
                    src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen allowscriptaccess="always"></iframe>

                <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                <div class="play-btn btn-video-intro">
                    <img src="img/play-video-btn.png" alt="">
                </div>
            </div>
        </div>
    </section> */}
      <Review />
      <Gallery />
      <Action />
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
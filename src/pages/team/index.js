import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Member from './component/Member'
import Supporter from './component/Supporter'

export default function Team() {
  return (
    <>
    <Header />
    <div className="overlay_nav" />
        <main className="team" id="main">
          <section>
            <div className="container">
              <div className="top">
                <h2 className="main-title">cfd team</h2>
                <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                  elementum
                  sem non luctus
                </p>
              </div>
              <div className="list row">
                <Member name="trần nghĩa" thumbnail="img/img_team1.png" title="Founder &amp; Creative Front-End Developer"/>
                <Member name="đặng thuyền vương" thumbnail="img/img_team2.png" title="Co-Founder &amp; Fullstack Developer"/>
                <Member name=" đặng thuyền quân" thumbnail="img/img_team1.png" title="Co-Founder &amp; Backend Developer"/>
                <Member name="nguyễn đức huy" thumbnail="img/img_team4.png" title="Co-Founder &amp; Front-End Developer"/>
                <Supporter name="Diệp anh thy" title=""/>
                <Supporter name="huỳnh tiến tài" title="CFD1-Offline"/>
                <Supporter name="Ngô thành long" title="CFD1-Offline"/>
                <Supporter name="trần anh tuấn" title="CFD1-Offline"/>
                <Supporter name="nguyễn thành tùng" title="CFD1-Offline"/>
                <Supporter name="phạm thành trung" title="CFD1-Offline"/>
                <Supporter name="ngô thành long" title="CFD1-Offline"/>
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

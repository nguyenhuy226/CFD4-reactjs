import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProjectItem from './component/ProjectItem'

export default function Project() {
  return (
    <>
    <Header />
    <div className="overlay_nav" />
        <main className="projectpage" id="main">
          <section className="section-1">
            <div className="container">
              <h2 className="main-title">dự án</h2>
              <p className="top-des">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                luctus
              </p>
              <div className="list row">
                <ProjectItem name="furnitown" thumbnail="/img/project/project (1).jpg" makeby="Hoàn thành với Trần Nghĩa"/>
                <ProjectItem name="kymco" thumbnail="/img/project/project (1).png" makeby="Hoàn thành với Huỳnh Tiến Tài"/>
                <ProjectItem name="gboxmb" thumbnail="/img/project/project (2).jpg" makeby="Hoàn thành bởi Nguyễn Văn Tuấn"/>
                <ProjectItem name="wooder" thumbnail="/img/project/project (2).png" makeby="Hoàn thành bởi Nguyễn Đức Huy"/>
                <ProjectItem name="furnitown" thumbnail="/img/project/project (3).jpg" makeby="Hoàn thành bởi Nguyễn Văn Tuấn"/>
                <ProjectItem name="" thumbnail="/img/project/project (4).jpg" makeby="Hoàn thành bởi Nguyễn Văn Tuấn"/>
                <ProjectItem name="furnitown" thumbnail="/img/project/project (5).jpg" makeby="Hoàn thành với Huỳnh Tiến Tài"/>
                <ProjectItem name="furnitown" thumbnail="/img/project/project (6).jpg" makeby="Hoàn thành với Huỳnh Tiến Tài"/>
              </div>
              <div className="bottom">
                <div className="btn overlay round btn-more">
                  tải thêm
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

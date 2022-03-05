import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Cooperate() {
  return (
    <>
    <Header />
    <div className="overlay_nav" />
        <main className="register-course" id="main">
          <section className="section-1 wrap container">
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
              việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
            </p>
            <div className="form">
              <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Họ và tên bạn" />
              </label>
              <label>
                <p>Số điện thoại</p>
                <input type="text" placeholder="Số điện thoại" />
              </label>
              <label>
                <p>Email<span>*</span></p>
                <input type="text" placeholder="Email của bạn" />
              </label>
              <label>
                <p>Website</p>
                <input type="text" placeholder="Đường dẫn website http://" />
              </label>
              <label>
                <p>Tiêu đề<span>*</span></p>
                <input type="text" placeholder="Tiêu đề liên hệ" />
              </label>
              <label>
                <p>Nội dung<span>*</span></p>
                <textarea name id cols={30} rows={10} defaultValue={""} />
              </label>
              <div className="btn main rect">đăng ký</div>
            </div>
          </section>
          {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
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

import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'



const style = {
  inputStyle : {color : 'red' , fontSize : 14}
}
export default function Register() {
  let [form, setForm] = useState({
    userName: '',
    phone:'',
    email:'',
    fb: '',
    payment:'chuyen-khoan',
    note :''
  })
  let [error , setError] = useState()


  function inputChange (e) {
    let val = e.target.value
    let name = e.target.getAttribute('name')
    setForm({
      ...form,
      [name] : val
    })
  }

  function submitBtn () {
    let error = {} 
    if(!form.userName) {
      error['userName'] = "Username không được để trống"
    }
    if(!form.email) {
      error['email'] = "email không được để trống"
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      error['email'] = "email không đúng định dạng"
    }
    if(!form.fb) {
      error['fb'] = "fb không được để trống"
    }
    if(!form.phone) {
      error['phone'] = "phone không được để trống"
    }
    if(!form.note) {
      error['note'] = "note không được để trống"
    }
    setError(error)

    if(Object.keys(error).length === 0 ) {
      alert("thành công")
    }
  }


  return (
    <>  
        <Header />
        <div className="overlay_nav" />
        <main className="register-course" id="main">
          <section>
            <div className="container">
              <div className="wrap container">
                <div className="main-sub-title">ĐĂNG KÝ</div>
                <h1 className="main-title">Thực chiến front-end căn bản </h1>
                <div className="main-info">
                  <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                  <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                  <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                </div>
                <div className="form">
                  <label>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder="Họ và tên bạn"  onChange={inputChange} name="userName" value={form.userName}/>
                  </label>
                  {
                    error.userName ? <p className='error' style={style.inputStyle}>{error.userName}</p> : null 
                  }
                  <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone}/>
                  </label>
                  {
                    error.phone ? <p className='error' style={style.inputStyle}>{error.phone}</p> : null 
                  }
                  <label>
                    <p>Email<span>*</span></p>
                    <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                  </label>
                  {
                    error.email ? <p className='error' style={style.inputStyle}>{error.email}</p> : null 
                  }
                  <label>
                    <p>URL Facebook<span>*</span></p>
                    <input type="text" placeholder="https://facebook.com"  onChange={inputChange}  name="fb" value={form.fb}/>
                  </label>
                  {
                    error.fb ? <p className='error' style={style.inputStyle}>{error.fb}</p> : null 
                  }
                  <label className="disable">
                    <p>Sử dụng COIN</p>
                    <div className="checkcontainer">
                      Hiện có <strong>300 COIN</strong>
                      {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                      {/* Cần ít nhất 200 COIN để giảm giá */}
                      <input type="checkbox" defaultChecked="checked" />
                      <span className="checkmark" />
                    </div>
                  </label>
                  <label>
                    <p>Hình thức thanh toán</p>
                    <div className="select">
                      <div className="head">Chuyển khoản</div>
                      <div className="sub">
                        <a href="#">Chuyển khoản</a>
                        <a href="#">Thanh toán tiền mặt</a>
                      </div>
                    </div>
                  </label>
                  <label>
                    <p>Ý kiến cá nhân</p>
                    <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={form.note} />
                  </label>
                  {
                    error.note ? <p className='error' style={style.inputStyle}>{error.note}</p> : null 
                  }
                  <div className="btn main rect" onClick={submitBtn}>đăng ký</div>
                </div>
              </div>
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

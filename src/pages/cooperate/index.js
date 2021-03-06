import React, { useState } from 'react'

import PopupLogin from '../../components/PopupLogin'
import useValidateForm from '../../Hook/useValidateForm'


const style = {
  inputStyle : {color : 'red' , fontSize : 14}
}
export default function Cooperate() {
  
  let {form ,error , inputChange , submit  } = useValidateForm({
    userName: '',
    phone:'',
    email:'',
    fb: '',
    tittle: '',
  } , {
    rule : {
      userName: {
        required : true
      },
      title: {
        required : true
      },
      email: {
        pattern : 'email'
      },
      phone: {
        pattern : 'phone'
      },
      fb: {
        pattern : 'url'
      },
    },
    message : {
      userName: {
        required : 'trường này không được để trống'
      },
      title: {
        required : 'trường này không được để trống'
      },
      phone: {
        pattern : 'nhập số diện thoại không đúng định dạng'
      },
      email: {
        pattern : 'nhập email không đúng định dạng'
      },
      fb:  {
        pattern : 'nhập url không đúng định dạng'
      },
    }
  })
  
  function submitBtn() {
    let error = submit()
    console.log(error)
    if(Object.keys(error).length === 0) {
      // alert("thành công")
    }
  } 
  
  return (
    <>
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
              <input type="text" placeholder="Họ và tên bạn"  onChange={inputChange} name="userName" value={form.userName}/>
            </label>
            {
              error.userName && <p className='error' style={style.inputStyle}>{error.userName}</p>
            }
            <label>
              <p>Số điện thoại</p>
              <input type="text" placeholder="Số điện thoại"  onChange={inputChange} name="phone" value={form.phone}/>
            </label>
            {
              error.phone && <p className='error' style={style.inputStyle}>{error.phone}</p>
            }
            <label>
              <p>Email<span>*</span></p>
              <input type="text" placeholder="Email của bạn"  onChange={inputChange} name="email" value={form.email}/>
            </label>
            {
              error.email && <p className='error' style={style.inputStyle}>{error.email}</p>
            }
            <label>
              <p>Website</p>
              <input type="text" placeholder="Đường dẫn website http://"  onChange={inputChange} name="website" value={form.website}/>
            </label>
            {
              error.website && <p className='error' style={style.inputStyle}>{error.website}</p>
            }
            <label>
              <p>Tiêu đề<span>*</span></p>
              <input type="text" placeholder="Tiêu đề liên hệ"  onChange={inputChange} name="title" value={form.title}/>
            </label>
            {
              error.fb && <p className='error' style={style.inputStyle}>{error.fb}</p>
            }
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea name id cols={30} rows={10} defaultValue={""} />
            </label>
            <div className="btn main rect" onClick={submitBtn}>đăng ký</div>
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
      <PopupLogin />
    </>
  )
}

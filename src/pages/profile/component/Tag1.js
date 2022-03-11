import React, { useState } from 'react'
import useValidateForm from '../../../Hook/useValidateForm'



const style = {
  inputStyle : {color : 'red' , fontSize : 14}
}
export default function Tag1() {



  // let [form, setForm] = useState({
  //   userName: '',
  //   phone:'',
  //   email:'',
  //   fb: '',
  //   skype:''
  // })
  // let [error , setError] = useState({})


  // function inputChange (e) {
  //   let val = e.target.value
  //   let name = e.target.getAttribute('name')
  //   setForm({
  //     ...form,
  //     [name] : val
  //   })
  // }

  // function submitBtn () {
  //   let error = {} 
  //   if(!form.userName) {
  //     error['userName'] = "Username không được để trống"
  //   }
  //   if(!form.email) {
  //     error['email'] = "email không được để trống"
  //   } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
  //     error['email'] = "email không đúng định dạng"
  //   }
  //   if(!form.fb) {
  //     error['fb'] = "fb không được để trống"
  //   }
  //   if(!form.phone) {
  //     error['phone'] = "phone không được để trống"
  //   }
  //   if(!form.skype) {
  //     error['skype'] = "note không được để trống"
  //   }
  //   setError(error)
  //   if(!Object.keys(error).length === 0) {
  //     alert("thành công")
  //   }
  // }

  
  let {form ,error , inputChange , submit  } = useValidateForm({
    userName: '',
    phone:'',
    email:'',
    fb: '',
  } , {
    rule : {
      userName: {
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
    <div className="tab1" style={{display: 'block'}}>
        <label>
        <p>Họ và tên<span>*</span></p>
        <input type="text" placeholder="Nguyễn Văn A"  onChange={inputChange} name="userName" value={form.userName}/>
        </label>
        {
          error.userName && <p className='error' style={style.inputStyle}>{error.userName}</p>
        }
        <label>
        <p>Số điện thoại<span>*</span></p>
        <input type="text" placeholder="0949******"  onChange={inputChange} name="phone" value={form.phone}/>
        </label>
        {
          error.phone && <p className='error' style={style.inputStyle}>{error.phone}</p>
        }
        <label>
        <p>Email<span>*</span></p>
        <input defaultValue="vuong.dang@dna.vn" disabled type="text"  onChange={inputChange} name="email" value={form.email}/>
        </label>
        {
          error.email && <p className='error' style={style.inputStyle}>{error.email}</p>
        }
        <label>
        <p>Facebook<span>*</span></p>
        <input type="text" placeholder="Facebook url"  onChange={inputChange} name="fb" value={form.fb}/>
        </label>
        {
          error.fb && <p className='error' style={style.inputStyle}>{error.fb}</p>
        }
        <label>
        <p>Skype<span>*</span></p>
        <input type="text" placeholder="Skype url"  onChange={inputChange} name="skype" value={form.skype}/>
        </label>
        {
          error.skype && <p className='error' style={style.inputStyle}>{error.skype}</p>
        }
        <div className="btn main rect" onClick={submitBtn}>LƯU LẠI</div>
    </div>
  )
}

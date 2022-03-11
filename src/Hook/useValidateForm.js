import React, { useState } from 'react'


let patternEmail = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
let patternPhone = '/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/';
let patternUrl = '/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i';
export default function useValidateForm(initValue , validate) {

  let [form, setForm] = useState(initValue)
  let [error , setError] = useState({
    userName: '',
    phone:'',
    email:'',
    fb: '',
  })
  
  function inputChange (e) {
    let val = e.target.value
    let name = e.target.getAttribute('name')
    setForm({
      ...form,
      [name] : val
    })
  }

  function submit () {
    let errorObject = {} 

    let {rule, message} = validate;
    for(let i in rule) {
      let r = rule[i];
      console.log(r)
      if(r.required) {
        if(!form[i]) {
          errorObject[i] = message?.[i]?.required  || 'trường này không để trống'
        }
      }
      if(r.pattern) {
        let pattern = r.pattern;
        if(pattern === 'email') {
          if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form[i])) {
            errorObject[i] = message?.[i]?.pattern || 'trường này không đúng định dạng'
          }
        } ;
        if(pattern === 'phone') {
          if(!/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(form[i])) {
            errorObject[i] = message?.[i]?.pattern || 'trường này không đúng định dạng'
          }
        }  ;
        if(pattern === 'url') {
          if(!/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(form[i])) {
             errorObject[i] = message?.[i]?.pattern || 'trường này không đúng định dạng'
           }
        }   ;
      }

      if(r.min && form[i].lenght < r.min) {
        errorObject[i] = message?.[i]?.pattern || `trường này phải nhỏ hơn ${r.min} ký tự`
      }
      if(r.max && form[i].lenght < r.max) {
        errorObject[i] = message?.[i]?.pattern || `trường này phải lớn hơn ${r.max} ký tự`
      }
    }

    setError(errorObject)
    return errorObject
  }

  return {
    form ,
    inputChange,
    error,
    submit
  }
}

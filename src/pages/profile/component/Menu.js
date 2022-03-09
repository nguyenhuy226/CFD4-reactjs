import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Menu() {
  return (
    <div className="tab-title">
        <NavLink to="">Thông tin tài khoản</NavLink>
        <NavLink to="khoa-hoc">Khóa học của bạn</NavLink>
        <NavLink to="du-an">Dự án đã làm</NavLink>
        <NavLink to="thanh-toan">Lịch sử thanh toán</NavLink>
        <NavLink to="coin">Quản lý COIN của tôi</NavLink>
    </div>
  )
}

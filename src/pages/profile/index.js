import React, { useEffect } from 'react'
import { useNavigate , Route, Routes } from 'react-router-dom'

import PopupLogin from '../../components/PopupLogin'
import Menu from './component/Menu'
import Tag1 from './component/Tag1'
import Tag2 from './component/Tag2'
import Tag3 from './component/Tag3'
import Tag4 from './component/Tag4'
import Tag5 from './component/Tag5'

export default function Profile() {
  let LoggedIn = true;
  let navigate = useNavigate()

  useEffect(() => {
    if(!LoggedIn) {
      return navigate('/')
    }
  },[LoggedIn])
  return (
    <>
    <div className="overlay_nav" />
        <main className="profile" id="main">
          <section>
            <div className="top-info">
              <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src="img/avatar-lg.png" alt="" />
                <div className="camera" />
              </div>
              <div className="name">trần nghĩa</div>
              <p className="des">Thành viên của team CFD1-OFFLINE</p>
            </div>
            <div className="container">
              <div className="tab">
                <Menu />
                <div className="tab-content">
                  {/* <Outlet /> */}
                  <Routes>
                    <Route index element={<Tag1 />} />
                    <Route path='du-an' element={<Tag2 />} />
                    <Route path='khoa-hoc' element={<Tag3 />} />
                    <Route path='thanh-toan' element={<Tag4 />} />  
                    <Route path='coin' element={<Tag5 />} />
                  </Routes>
                </div>
              </div>
            </div>
          </section>
        </main>
        <PopupLogin />
    </>
  )
}

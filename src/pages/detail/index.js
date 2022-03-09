import React from 'react'

import PopupLogin from '../../components/PopupLogin'
import Banner from './component/Banner'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'

export default function Detail() {
  return (
    <>  
        <div className="overlay_nav" />
        <main className="course-detail" id="main">
          <Banner />
          <Section2 />
          <Section3 />
          <Section4 />
        </main>
        <PopupLogin />
    </>
  )
}

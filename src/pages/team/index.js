import React from 'react'

import PopupLogin from '../../components/PopupLogin'
import Member from './component/Member'
import Supporter from './component/Supporter'

export default function Team() {
  return (
    <>
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
        <PopupLogin />
    </>
  )
}

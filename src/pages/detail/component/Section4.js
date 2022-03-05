import React from 'react'
import Course from '../../../components/Course'

export default function Section4() {
  return (
    <section className="section-4">
            <div className="container">
              <div className="textbox">
                <h3 className="sub-title">Khóa học</h3>
                <h2 className="main-title">Liên quan</h2>
              </div>
              <div className="list row">
                  <Course thumbnail="img/img.png" name="Front-end căn bản" title="One of the best corporate fashion brands in Sydney"/>
                  <Course thumbnail="img/img2.png" name=" Front-end nâng cao" title="One of the best corporate fashion brands in Sydney"/>
                  <Course thumbnail="img/img3.png" name="Laravel framework" title="One of the best corporate fashion brands in Sydney"/>
              </div>
            </div>
          </section>
  )
}

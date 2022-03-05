import React from 'react'
import Course from '../../../components/Course'

export default function Section3() {
  return (
    <section className="section-3">
        <div className="container">
            <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
            </div>
            <div className="list row">
                <Course thumbnail="img/img.png" name="React JS" title="One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img2.png" name="Animation" title="One of the best corporate fashion brands in Sydney"/>
                <Course thumbnail="img/img3.png" name="Scss, Grunt JS và Boostrap 4" title="One of the best corporate fashion brands in Sydney"/>
            </div>
        </div>
    </section>
  )
}

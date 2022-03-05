import React from 'react'
import Course from '../../../components/Course'

export default function CourseList() {
  return (
    <>
    <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has
            a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <Course name="Front-end căn bản" thumbnail="/img/img1.png" title=" One of the best corporate fashion brands in Sydney"/>
            <Course name=" React JS" thumbnail="/img/img2.png" title=" One of the best corporate fashion brands in Sydney" />
            <Course name="Animation" thumbnail="/img/img3.png" title=" One of the best corporate fashion brands in Sydney"/>
            <Course name=" Scss, Grunt JS và Boostrap 4" thumbnail="/img/img4.png" title=" One of the best corporate fashion brands in Sydney"/>
            <Course name="  UX/UI Design" thumbnail="/img/img5.png" title=" One of the best corporate fashion brands in Sydney"/>
            <Course name=" Web Responsive" thumbnail="/img/img6.png" title=" One of the best corporate fashion brands in Sydney"/>
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
      <div className="container">
        <div className="textbox">
          <h2 className="main-title">Khóa học Online</h2>
        </div>
        <div className="list row">
            <Course name=" Front-end căn bản" thumbnail="/img/img7.png" title=" One of the best corporate fashion brands in Sydney"/>
            <Course name="Front-end nâng cao" thumbnail="/img/img8.png" title=" One of the best corporate fashion brands in Sydney"/>
            <Course name="Laravel framework" thumbnail="/img/img4.png" title=" One of the best corporate fashion brands in Sydney"/>
        </div>
        <div className="text-deco">C</div>
      </div>
    </section>
    </>
  )
}

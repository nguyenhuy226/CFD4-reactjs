import React from 'react'

import PopupLogin from '../../components/PopupLogin'
import ProjectItem from './component/ProjectItem'

export default function Project() {
  return (
    <>
    <div className="overlay_nav" />
        <main className="projectpage" id="main">
          <section className="section-1">
            <div className="container">
              <h2 className="main-title">dự án</h2>
              <p className="top-des">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                luctus
              </p>
              <div className="list row">
                <ProjectItem name="furnitown" thumbnail="/img/project/project (1).jpg" makeby="Hoàn thành với Trần Nghĩa"/>
                <ProjectItem name="kymco" thumbnail="/img/project/project (1).png" makeby="Hoàn thành với Huỳnh Tiến Tài"/>
                <ProjectItem name="gboxmb" thumbnail="/img/project/project (2).jpg" makeby="Hoàn thành bởi Nguyễn Văn Tuấn"/>
                <ProjectItem name="wooder" thumbnail="/img/project/project (2).png" makeby="Hoàn thành bởi Nguyễn Đức Huy"/>
                <ProjectItem name="furnitown" thumbnail="/img/project/project (3).jpg" makeby="Hoàn thành bởi Nguyễn Văn Tuấn"/>
                <ProjectItem name="" thumbnail="/img/project/project (4).jpg" makeby="Hoàn thành bởi Nguyễn Văn Tuấn"/>
                <ProjectItem name="furnitown" thumbnail="/img/project/project (5).jpg" makeby="Hoàn thành với Huỳnh Tiến Tài"/>
                <ProjectItem name="furnitown" thumbnail="/img/project/project (6).jpg" makeby="Hoàn thành với Huỳnh Tiến Tài"/>
              </div>
              <div className="bottom">
                <div className="btn overlay round btn-more">
                  tải thêm
                </div>
              </div>
            </div>
          </section>
        </main>
         <PopupLogin />
    </>
  )
}

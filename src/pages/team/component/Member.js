import React from 'react'

export default function Member(props) {
  return (
    <div className="item col-md-6 col-sm-6">
        <div className="wrap">
        <div className="cover">
            <img src={props.thumbnail} alt="" />
        </div>
        <div className="info">
            <div className="name">
            {props.name}
            </div>
            <p className="title">{props.title}</p>
        </div>
        </div>
    </div>
  )
}

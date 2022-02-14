import React from 'react'
import "./Icon.scss"
export default function Icon(props) {
  return (
    <a href = {props.url} rel="noreferrer" target = "_blank">
    <div className={"Icon" + (props.spin === 1 ? " spin" : "")}>
        <img src = {props.src}></img>
    </div>
    </a>
  )
}

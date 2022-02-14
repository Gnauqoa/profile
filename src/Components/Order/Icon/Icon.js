import React, { useState } from 'react'
import "./Icon.scss"
export default function Icon(props) {

  return (
    <a href = {props.url} rel="noreferrer" target = "_blank">
      <div style = {props.style} className={"Icon" +(props.spin === 1 ? " spin" : "")}>
            <img src = {props.src} alt = ""></img>
    </div>
    </a>
  )
}

import React from 'react'
import './BoxBorderAnimation.scss'
export default function BoxBorderAnimation(props) {

    return (
        <div className = {'BoxBorderAnimation' + " " + props.className} style={props.style}>
            <div className = "Content">
                <main>{props.children}</main>
            </div>
        </div>
    )
}

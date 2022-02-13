import React from 'react'
import './BoxBorderAnimation.scss'
export default function BoxBorderAnimation({children,style}) {
    return (
        <div className = 'BoxBorderAnimation ' style={{style}}>
            <div className = "Content">
                <main>{children}</main>
            </div>
        </div>
    )
}

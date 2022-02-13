import React from 'react';
import "./BtnEffect.scss";

export default function BtnEffect({href,value}) {
    const ClickBtn = (e) =>{
        let btn = e.target;
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        btn.appendChild(ripples);
        setTimeout(() => {
            ripples.remove();
        },1000);
    }
    return (
        <div class="BtnEffect">
            <a href={href} onClick={(e) => ClickBtn(e)}>{value}</a>
        </div>
    )
}

import React from 'react';
import "./Contact.scss";
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
export default function Contact() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className="Contact" id = "Contact">
        </div>
    )
}

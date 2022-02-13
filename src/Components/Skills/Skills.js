import React from 'react';
import './Skills.scss';
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
export default function Skills() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className = 'Skills' id = 'Skills'>
        </div>
    )
}

import React from 'react';
import './Project.scss';
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
export default function Achievements() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className = "Project Section" id = "Project">
            <div className='ItemSection'>
                
            </div>
        </div>
    )
}

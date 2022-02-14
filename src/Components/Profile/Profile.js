import React from 'react'
import './Profile.scss';
import BoxBorderAnimation from '../Order/BoxBorderAnimation/BoxBorderAnimation';
import RL from '../Order/RandomLine/RL';
import BtnEffect from '../Order/BtnEffect/BtnEffect';
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';

export default function Profile() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className="Profile" id = "Profile">
            <div className='main'>
                <p className='title'>Hi there,</p>
             <BoxBorderAnimation>
                 <p className='text'>
                 - Name: Lê Đăng Quang <br/>
                - Birth: 08/10/2003 <br/>
                - Education: University of Information Technology <br/>
                </p>
             </BoxBorderAnimation>
             <BtnEffect value = "See More" href="#"/>
            </div>
            <RL/>

        </div>
    )
}

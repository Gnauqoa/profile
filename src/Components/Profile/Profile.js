import React from 'react';
import './Profile.scss';
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
import BoxBorderAnimation from '../Order/BoxBorderAnimation/BoxBorderAnimation';
export default function Profile() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className="Section" id="Profile">
            <p className='SectionTitle'>Profile</p>
            <div className='SectionItem'>
                <BoxBorderAnimation > 
                    <div className='Timeline'>
                        <p className='TitleTimeLine' >2018</p>
                        <p className='SectionText'> Start learn code <br/> with Arduino and C++ </p>
                    </div>
                </BoxBorderAnimation>
                <div style={{padding:"10px"}}></div>
                <BoxBorderAnimation> 
                    <div className='Timeline'>
                        <p className='TitleTimeLine' >2018</p>
                        <p className='SectionText'> Start learn code <br/> with Arduino and C++ </p>
                    </div>
                </BoxBorderAnimation>
                <div style={{padding:"10px"}}></div>

                <BoxBorderAnimation> 
                    <div className='Timeline'>
                        <p className='TitleTimeLine' >2018</p>
                        <p className='SectionText'> Start learn code <br/> with Arduino and C++ </p>
                    </div>
                </BoxBorderAnimation>
            </div>

        </div>
    )
}

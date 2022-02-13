import React from 'react'
import './Intro.scss';
import BoxBorderAnimation from '../Order/BoxBorderAnimation/BoxBorderAnimation';
import RL from '../Order/RandomLine/RL';
import BtnEffect from '../Order/BtnEffect/BtnEffect';
export default function Intro() {
    return (
        <div className="Intro" id = "Intro">
            <div className='main'>
                <p className='title'>Welcome To<br/>
                My Profile Web</p>
             <BoxBorderAnimation>
                 <p className='text'>My name is Le Dang Quang, 18 years old. I'm students at the University of Information Technology 
                </p>
             </BoxBorderAnimation>
             <BtnEffect value = "See More" href="#"/>
            </div>
            <RL/>

        </div>
    )
}

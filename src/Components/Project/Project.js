import React from 'react';
import './Project.scss';
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
import BoxBorderAnimation from '../Order/BoxBorderAnimation/BoxBorderAnimation';

export default function Achievements() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className = "Project Section" id = "Project">
            <p className = "title">Project</p>
            <div className = "Section">
                <BoxBorderAnimation>
                    <p className='SectionText'>
                        - Name: Support Driver
                        <br/>- Discription: A device capable of sending a signal asking for help to app users in the surrounding area, when the user is in an accident or is robbed.
                        <br/>- The project includes an electronic device, a server to receive signals from the device, an app system on smart phones for users to receive signals to ask for help when someone has an accident around.
                        <br/>- Use: here
                        <br/>- Link: <a href="https://github.com/Gnauqoa/Support-Driver "  rel="noreferrer" target = "_blank" >here</a>
                    </p>
                </BoxBorderAnimation>
            </div>
        </div>
    )
}

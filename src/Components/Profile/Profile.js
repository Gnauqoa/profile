import React from 'react'
import './Profile.scss';
import BoxBorderAnimation from '../Order/BoxBorderAnimation/BoxBorderAnimation';
import BtnEffect from '../Order/BtnEffect/BtnEffect';
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
import {Section,SectionTitle,SectionText} from "../Theme/Theme.js"

export default function Profile() {
    return (
        <Section onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} id = "Profile">
                <SectionTitle>Hi there,</SectionTitle>
            <BoxBorderAnimation>
                 <SectionText>
                 - Name: Lê Đăng Quang <br/>
                - Birth: 08/10/2003 <br/>
                - Education: University of Information Technology <br/>
                </SectionText>
            </BoxBorderAnimation>
            <BtnEffect value = "See More" href="#Skills"/>

        </Section>
    )
}

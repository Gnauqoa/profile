import React from 'react';
import './Project.scss';
import Icon from '../Order/Icon/Icon.js'
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
import BoxBorderAnimation from '../Order/BoxBorderAnimation/BoxBorderAnimation';
import {ListSkills} from '../Skills/Skills.js'
import {Section,SectionTitle,SectionText} from "../Theme/Theme.js"

export default function Project() {
    return (
        <Section onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} id = "Project">
            <SectionTitle>Project</SectionTitle>
            <Section className = "ProjectList">
                {ProjectList.map((data) => 
                    <BoxBorderAnimation>
                        <SectionText>
                            <p className ="ProjectTitle">{data.name}</p>
                            <br/>- Description: {data.description}
                            <br/>- Link: <a href={data.url}  rel="noreferrer" target = "_blank" >here</a> 
                        </SectionText>
                        <Section className="ProjectUsed" row = "1" background = "translate">
                            {data.used.map((us)=> 
                                <Icon src = {us.src} url = {us.url}/>
                            )}
                        </Section>
                    </BoxBorderAnimation>
                )}
            </Section>
        </Section>
    )
}
function createProject(name, description, url, used){
    return {
        name: name,
        description: description,
        url: url,
        used: used
    }
}
const Cplusplus = ListSkills[0];
const Csharp = ListSkills[1];
const Arduino = ListSkills[2];
const Html = ListSkills[3];
const Css = ListSkills[4];
const Javascript = ListSkills[5];
const Nodejs = ListSkills[6];
const ReactLogo = ListSkills[7];
const ProjectList = [
    createProject(
        "Support Driver",
        "A device capable of sending a signal asking for help to app users in the surrounding area, when the user is in an accident or is robbed. The project includes an electronic device, a server to receive signals from the device, an app system on smart phones for users to receive signals to ask for help when someone has an accident around.",
        "https://github.com/Gnauqoa/Support-Driver",
        [
            Cplusplus,Arduino,ReactLogo,Nodejs,,
        ]
    ),
    createProject(
        "Control Circuit LED RGB",
        "A Control Circuit LED RGB with LCD screen, operation button, can setting number LED, color, speed, effect, mode...",
        "https://github.com/Gnauqoa/controlCircuitRGB",
        [
            Cplusplus,Arduino,
        ]
    ),

]



    
    
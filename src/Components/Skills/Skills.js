import React from 'react';
import './Skills.scss';
import '../../Assets/Image.js';
import Icon from '../Order/Icon/Icon.js'
import {moveUnderlineWhenScroll} from '../Topbar/Topbar.js';
import {Html,Css,Javascript,Cplusplus,Csharp,ReactLogo,Nodejs,Arduino}  from '../../Assets/Image.js'
const ListSkills = [
    {
        src: Cplusplus,
        url: "https://www.cplusplus.com/"
    },
    
    {
        src: Csharp,
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    }, 
    {
        src: Arduino,
        url: "https://www.arduino.cc/"
    },
    {
        src: Html,
        url: "https://docs.microsoft.com/en-us/cpp/mfc/html-basics?view=msvc-170"
    },
    {
        src: Css,
        url: "https://devdocs.io/css/"
    }, 
    {
        src: Javascript,
        url: "https://devdocs.io/javascript/"
    }, 
   
  
    {
        src: Nodejs,
        url: "https://nodejs.org/en/docs/"
    },
    {
        src: ReactLogo,
        url: "https://reactjs.org/",
        spin: 1
    }, 
];
export default function Skills() {
    return (
        <div onPointerEnter = {(e) => moveUnderlineWhenScroll(e)} className = 'Skills Section ' id = 'Skills'>
            <p className = 'title'>Skills</p>
            <div className = 'SectionRow'>
                {ListSkills.map((data) => 
                    <Icon src={data.src} url = {data.url} spin = {data.spin}/>
                )}
            </div>
        </div>
    )
}

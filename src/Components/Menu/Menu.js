import React from 'react';
import './Menu.scss';

export default function Menu({open,setOpen}) {
    return (
        <div className={"Menu " + (open && "active")}>
            <ul>
                <li>
                    <p onClick={() => goTo("#Intro")} >Home</p>
                </li>
                <li>
                    <p onClick={() => goTo("#Profile")} >Profile</p>
                </li>
                <li>
                    <p onClick={() => goTo("#Skills")} >Skills</p>
                </li>
                <li>
                    <p onClick={() => goTo("#Achievements")} >Achievements</p>
                </li>
                <li>
                    <p onClick={() => goTo("#Contact")} >Contact</p>
                </li>
            </ul>
        </div>
    )
}
const goTo = (s) => { 
    document.querySelector(s).scrollIntoView(
        { 
            behavior: 'smooth' 
        }
    );
}
import React, { useEffect } from 'react'
import "./Topbar.scss"  


function Topbar({open,setOpen}) {
    useEffect(() => {
        const a = document.querySelectorAll("div[class='itemContainerTopbar']");
        a.forEach(link => {
            link.addEventListener('click', (e) => {
                moveUnderline(e.target.getBoundingClientRect());
            })
        })
    });
    return (
        <div className={"topbar " + (!open && "active")}>
            <div className="wrapper">                   
                <p className="logo"></p>
                <div className="left">
                    <div className="underline" id = "underline" ></div>
                    <div className="itemContainerTopbar">
                            <a href="#Profile" >Profile</a>
                    </div>
                    <div className="itemContainerTopbar">
                            <a href="#Skills">Skills</a>
                    </div>
                    <div className="itemContainerTopbar">
                            <a href="#Project">Project</a>
                    </div>
                </div>
         
            
            </div>
        </div>
    )
}
function moveUnderline(data){
    let underline = document.getElementById('underline');
    const loc = document.querySelector("a[href='#Profile']").getBoundingClientRect().left;
    underline.style.width = data.width + 'px' ;
    underline.style.left = data.left-loc+15 + 'px';
}
function moveUnderlineWhenScroll(e){
    const data = document.querySelector("a[href='#"+ e.target.id + "']").getBoundingClientRect();
    moveUnderline(data);
}
export {
    Topbar,
    moveUnderlineWhenScroll
}
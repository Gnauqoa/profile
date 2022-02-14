import './App.scss'
import {Topbar} from './Components/Topbar/Topbar.js'
import Profile from './Components/Profile/Profile.js'
import Project from './Components/Project/Project.js'
import Skills from './Components/Skills/Skills.js'
import Contact from './Components/Contact/Contact.js'
import {useState} from 'react'
function App() {

  const [openTopBar,setOpenTopBar] = useState(false);
  return (
    <div className="App">
      <Topbar open = {openTopBar} setOpen={ setOpenTopBar}/>
      <div className="sections">
        <Profile />
        <Skills/>
        <Project/>
        {/* <Contact/> */}
      </div> 
    </div>
    
   
  );
}

export default App;

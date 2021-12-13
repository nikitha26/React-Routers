import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import CornerRibbon from "react-corner-ribbon";

import { Button } from './Button';
import './Navbar.css'
import zIndex from '@material-ui/core/styles/zIndex';
function Navbar() {
    const[click, setClick] = useState(false)
    const[button, setButton] = useState(true)
    const handleclick = () => setClick(!click);
    const closemobilemenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth<=960){
             setButton(false)
        }
        else{
             setButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    },[])

        window.addEventListener('resize',showButton)
    return (
    <>
    <CornerRibbon
          
          position="top-right" // OPTIONAL, default as "top-right"
          fontColor="#f0f0f0" // OPTIONAL, default as "#f0f0f0"
          backgroundColor="#2c7" // OPTIONAL, default as "#2c7"
          containerStyle={{}} // OPTIONAL, style of the ribbon
          style={{
              zIndex:"1505",
              position: "fixed"
          }} // OPTIONAL, style of ribbon content
          className="" // OPTIONAL, css class of ribbon
        >
         React-Routers-Dom
        </CornerRibbon>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closemobilemenu}>
                   TLVL <i class="fas fa-spa"></i>
              </Link>
              <div className="menu-icon" onClick={handleclick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                     <Link to="/" className='nav-links' onClick={closemobilemenu}>
                          HOME
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/services" className='nav-links' onClick={closemobilemenu}>
                          SERVICES
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/about" className='nav-links' onClick={closemobilemenu}>
                         ABOUT US
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/signup" className='nav-links-mobile' onClick={closemobilemenu}>
                          SIGN UP
                     </Link>
                  </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
      </nav>
    </>
    )
}

export default Navbar

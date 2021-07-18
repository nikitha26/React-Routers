import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
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
                     <Link to="/products" className='nav-links' onClick={closemobilemenu}>
                         PRODUCTS
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/signup" className='nav-links-mobile' onClick={closemobilemenu}>
                          SIGN UP
                     </Link>
                  </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}
          </div>
      </nav>
    </>
    )
}

export default Navbar
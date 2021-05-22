import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" style={{display: 'inline-block', width: '80%', height: '30%'}}>
                   TLVL <i class="fa fa-diamond" aria-hidden="true"></i>
              </Link>
              <Link to="" className="list-items" style={{padding:'20px'}}>
                    HOME
              </Link>
              <Link to="" className="list-items" >
                    ABOUT
              </Link>
          </div>
      </nav>
    </>
    )
}

export default Navbar

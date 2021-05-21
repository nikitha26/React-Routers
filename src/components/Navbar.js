import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                   TLVL <i class="fa fa-diamond" aria-hidden="true"></i>
              </Link>
              <Link to="" className="">
                    HOME
              </Link>
              <Link to="" className="">
                    ABOUT
              </Link>
          </div>
      </nav>
    </>
    )
}

export default Navbar

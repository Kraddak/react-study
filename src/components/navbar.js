
import logo from "../images/logo.svg"
import React from 'react'
import { pageLinks } from "../data"
import { socialLinks } from "../data"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map(item => <li key={item.id}><a href={item.link} className="nav-link"> {item.text} </a></li>)}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(item => 
            <li key={item.id}>
              <a href={item.link} target="_blank" className="nav-icon">
                <i className={item.icon}></i>
              </a>
            </li>)
          }
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import {Link} from 'react-scroll'
import './Topbar.css'

function Topbar() {
  return <>
  <div className='navbar'>
      <div className='navbar_left'>
        <h1><span>F</span>ull<span> S</span>tack  <span>D</span>eveloper</h1>
      </div>
      <div className='navbar_right'>
        <Link to='home' smooth={true} duration={800}>
             <h4>Home</h4>
        </Link>
        <Link to='about' smooth={true} duration={800}>
             <h4>About Me</h4>
        </Link>
        <Link to='skills' smooth={true} duration={800}>
             <h4>Skills</h4>
        </Link>
        <Link to='projects' smooth={true} duration={800}>
              <h4>Projects</h4>
        </Link>
        <Link to='experience' smooth={true} duration={800}>
              <h4>Experience</h4>
        </Link>
        <Link to='contact' smooth={true} duration={800}>
              <h4>Contact</h4>
        </Link>
    </div>

    
  </div>
  </>
}

export default Topbar
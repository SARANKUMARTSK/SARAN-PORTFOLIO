import React from 'react'
import './TopContent.css'
import { Link } from 'react-scroll'
import Element from 'react-scroll'

function TopContent() {
  return <>
  <div name='home' className='topContainer'>
    <div className='topContent_contaier'>
        <h1>SARAN KUMAR T</h1>
        <p>Full Stack Developer</p>
        <button className='download_button'>Download CV</button>
       <Link className='mywork_button' to='projects' smooth={true} duration={500}><button>My Work</button></Link>
    </div>  
    
  </div>
  </>
}
export default TopContent
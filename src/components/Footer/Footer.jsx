import React from 'react'
import "../Footer/Footer.css"
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope, faLink} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return <>
  <Element name='contact' className="footer">
    <h1>Contact Me</h1>
    <p><FontAwesomeIcon icon={faPhone} /> &nbsp;Phone Number : 8675750594</p>
    <p><FontAwesomeIcon icon={faEnvelope} />&nbsp; G Mail : sarankumartsk@gmail.com</p>
    <div className='icon_set'>
    <a style={{color:"white"}} href="https://github.com/SARANKUMARTSK"><FontAwesomeIcon icon={faGithub}  /></a>
    <a href="https://www.linkedin.com/in/saran-kumar-17563a250/"><FontAwesomeIcon icon={faLinkedinIn}  /></a>
    <a style={{color:"darkviolet"}} href="https://www.instagram.com/_charan_tsk_/"><FontAwesomeIcon icon={faInstagramSquare}  /></a>
    <a href="https://www.facebook.com/profile.php?id=100009111732920"><FontAwesomeIcon icon={faFacebookSquare}  /></a>
    </div>
    <div>
    </div>
  </Element>
  </>
}

export default Footer
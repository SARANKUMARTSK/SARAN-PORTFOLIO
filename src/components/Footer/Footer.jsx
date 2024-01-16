import React from 'react'
import "../Footer/Footer.css"
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return <>
  <Element name='contact' className="footer">
    <h1>Contact Me</h1>
    <p><FontAwesomeIcon icon={faPhone} /> &nbsp;Phone Number : 8675750594</p>
    <p><FontAwesomeIcon icon={faEnvelope} />&nbsp; G Mail : sarankumartsk@gmail.com</p>
  </Element>
  </>
}

export default Footer
import React from 'react'
import '../About/About.css'
import { Element } from 'react-scroll'
import MyPhoto from '/src/assets/My-images/MyPhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGraduate,faUser,faCalendarDays,faFlag,faPerson} from '@fortawesome/free-solid-svg-icons'
function About() {      
  return <>
  <Element name='about' className="about">
  <h4>ABOUT ME </h4>

     <div className='about_container'>
        <div className='my_image_container'>
           <img className='my_image' src={MyPhoto} alt="" />
        </div>
        <div className='about_content'>
            {/* <h4>Hello<span>...i am Saran , </span></h4> */}
            <p className='about_para'>  Highly motivated and recently Certified in Full Stack Web Development with a solid foundation in programming and problem-solving.
             Eager to apply academic knowledge to real-world Projects and contribute to innovative solutions .
             Possesses strong communication skill , adaptability , and a passion for continuous learning . Enthusiastic about collaborating in team environment to drive impactful results . Proficient in relevant programming languages and technologies.</p>
        <div className='personal_details'>
         <h5>My Personal Details : </h5>
         
               <div>
                  <p><span><FontAwesomeIcon icon={faUser} />&nbsp;NAME :</span>SARAN KUMAR T</p>
                  <p><span><FontAwesomeIcon icon={faCalendarDays} />&nbsp; DOB  : </span>18 AUGUST 1998</p>
                  <p><span><FontAwesomeIcon icon={faUserGraduate} />&nbsp;Education :</span>B.Sc.Mathematics</p>
                  <p><span><FontAwesomeIcon icon={faPerson} />&nbsp;Marital Status :</span> Single</p>
                  <p><span><FontAwesomeIcon icon={faFlag} />&nbsp;Nationality :</span>Indian</p>
               </div>
        
        </div>
        </div>
     </div>
  </Element>

  </>
}

export default About
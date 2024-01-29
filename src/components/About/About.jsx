import React from 'react'
import '../About/About.css'
import { Element } from 'react-scroll'

function About() {
  return <>
  <Element name='about' className="about">
     <div className='about_container'>
        <div className='my_image_container'>
           <img className='my_image' src="src/assets/My-images/SARAN IMG4.jpg" alt="" />
        </div>
        <div className='about_content'>
            <h4>Hii<span>...i am Saran , </span></h4>
            <div className='about_para'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highly motivated and recently Certified in Full Stack Web Development with a solid foundation in programming and problem-solving. Eager to apply academic knowledge to real-world Projects and contribute to innovative solutions . Possesses strong communication skill , adaptability , and a passion for continuous learning . Enthusiastic about collaborating in team environment to drive impactful results . Proficient in relevant programming languages and technologies.</div>
        </div>
     </div>

     {/* <fieldset style={{borderRadius:"10px"}}>
      <legend ><h1 style={{textShadow:"1px 1px 2px red"}}>Education</h1></legend>
      <div className='education_container'>
         <div className='college'>
            <img className="clg_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkVRitZOGp7fGIvYbBh3sO95-0kYzjJHWCw&usqp=CAU" alt="" />
            <div>
               <h4 style={{color:"Red"}}>Bachelors Degree</h4>
               <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>B.Sc.(Mathematics)</span><br/>
               <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>Sree Saraswathi Thyagaraja College , Pollachi </span><br />
               <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>2015 to 2018</span><br />
               <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>Score:74%</span>
            </div>
         </div>

         <div>
            <div className='hse'>
               <img className="school_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEu11TjM7I7X1bXx4EZV8tniehplMkqRBIxvKaCp8bcYZ5hluV2G_xHNTUaGGqZXFFtc&usqp=CAU" alt="" />
               <div>
                  <h4 style={{color:"Red"}}>Higher Secondary</h4>
                  <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>Palaniammal Higher Secondary School , Kaliyapuram , Pollachi </span><br />
                  <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>2014 to 2015</span><br />
                  <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>Score:80%</span>
               </div>
            </div>
         </div>

         <div>
            <div className='hse'>
               <img className="school_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEu11TjM7I7X1bXx4EZV8tniehplMkqRBIxvKaCp8bcYZ5hluV2G_xHNTUaGGqZXFFtc&usqp=CAU" alt="" />
               <div>
                  <h4 style={{color:"Red"}}>Secondary</h4>
                  <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>Palaniammal Higher Secondary School , Kaliyapuram , Pollachi </span><br />
                  <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>2012 to 2013</span><br />
                  <span style={{color:"black" , fontSize:"15px" , fontWeight:"bold"}}>Score:85%</span>
               </div>
            </div>
         </div>

      </div>
      
      
      
     </fieldset> */}
  </Element>

  </>
}

export default About
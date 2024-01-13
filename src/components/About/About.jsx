import React from 'react'
import '../About/About.css'
import { Element } from 'react-scroll'

function About() {
  return <>
  <Element name='about' className="about">
     <div className='about_container'>
        <div>
           <img className='my_image' src="src\assets\My-images\SARAN.JPG" alt="" />
        </div>
        <div className='about_content'>
            <h4>Hii<span>...</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laudantium, labore veritatis aliquam unde nemo perspiciatis obcaecati quo architecto, vel doloribus iste officiis accusantium molestiae, porro voluptatem! Possimus, quasi necessitatibus!</p>
        </div>
     </div>
  </Element>

  </>
}

export default About
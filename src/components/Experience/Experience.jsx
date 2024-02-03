import React from 'react'
import '../Experience/Experience.css'
import { Element } from 'react-scroll'

function Experience() {
  return <>
  <fieldset className='work_experience'>
  <legend><h1>Work Experience</h1></legend>
  <Element name='experience' className='experience'>
    <div>
      <h2><span>Technical :</span> Fresher</h2>
    </div>
    <hr />
    <h2>Non-Technical :-</h2>
    <br />
    <br />
    <div className='non-tech'>
      
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Suguna_Foods_Private_Limited_Logo.jpg" alt="" /></div>
      <div>
        <span className='company'>Suguna Foods Private Limited</span> <br />
        <span className='address'>No.25,Nehru Street Extension , Udumalpet(taluk), Tiruppur(Dist) , Tamilnadu 642126 .  </span><br />
        <span className='doj'>DOJ : 01.01.2019</span><br />
        <span className='dor'>DOR : 04.01.2024</span><br />
        <span className='dor'>Total Years Of Experience : <span>5 Years</span></span><br />
        <span className='dor'>Job Title : Senior-Supervisor Breeder Operations </span>
        <br />
        <br />
        <details>
          <summary><span>About Role</span></summary>
          <p>To Maintain a 2 Lack Capacity Of Breeder Flock By the Contract Formers</p>
          <p>Management of Labour & Supervisors</p>
          <p>SOP Implementation </p>
          <p>Weekly and Monthly Report Consolidation and Cost Management</p>
        </details>
      </div>
      
    </div>
  </Element>
  </fieldset>
  
  </>
}

export default Experience
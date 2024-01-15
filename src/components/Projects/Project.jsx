import React from 'react'
import '../Projects/Project.css'
import { Element } from 'react-scroll'
function Project() {
  return <>
  <fieldset style={{borderRadius:"10px"}}>
    <legend> <h1 className='project_heading'>Projects</h1></legend>
  <Element name='projects' className='project_page'>
   <div className='project_container'>
      <div className='project'> 
        <img className='project_img' src="src/assets/My-images/Todo_App.png" alt="" />
      </div>
      <div className='about_project'>
        <h1>Todo App</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fugiat deserunt enim voluptatum distinctio saepe placeat dolorem facere in nobis inventore sapiente libero necessitatibus?</p>
         <div>
         <i>HTML</i>&nbsp;&nbsp;
         <i>CSS</i>&nbsp;&nbsp;
         <i>JS</i>&nbsp;&nbsp;
         <i>REACT</i>&nbsp;&nbsp;
         </div>
         <br />
         <br />
        <button>View it Here</button> &nbsp;&nbsp;&nbsp;
        <button>View Github Repo</button>
      </div>
      
   </div>

   <div className='project_container'>
      <div className='project'> 
        
      </div>
      <div className='about_project'>
        <h1>Order Management</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fugiat deserunt enim voluptatum distinctio saepe placeat dolorem facere in nobis inventore sapiente libero necessitatibus?</p>
         <div>
         <i>HTML</i>&nbsp;&nbsp;
         <i>CSS</i>&nbsp;&nbsp;
         <i>JS</i>&nbsp;&nbsp;
         <i>REACT</i>&nbsp;&nbsp;
         </div>
         <br />
         <br />
        <button>View it Here</button> &nbsp;&nbsp;&nbsp;
        <button>View Github Repo</button>
      </div>
      
   </div>
  </Element>
  </fieldset>
  </>
}

export default Project
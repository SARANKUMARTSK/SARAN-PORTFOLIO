// import React from 'react'
// import '../Projects/Project.css'
// import { Element } from 'react-scroll'

// function Project() {
//   return <>
//   <fieldset style={{borderRadius:"10px"}}>
//     <legend> <h1 className='project_heading'>Projects</h1></legend>
//   <Element name='projects' className='project_page'>
//       <div className='project_container'>
//           <div className='project'> 
//             <img className='project_img' src="src/assets/My-images/Todo_App.png" alt="" />
//           </div>
//           <div className='about_project'>
//             <h1>Todo App</h1>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fugiat deserunt enim voluptatum distinctio saepe placeat dolorem facere in nobis inventore sapiente libero necessitatibus?</p>
//             <div>
//             <i>HTML</i>&nbsp;&nbsp;
//             <i>CSS</i>&nbsp;&nbsp;
//             <i>JS</i>&nbsp;&nbsp;
//             <i>REACT</i>&nbsp;&nbsp;
//             </div>
//             <br />
//             <br />
//             <button>View it Here</button> &nbsp;&nbsp;&nbsp;
//             <button>View Github Repo</button>
//           </div>
//        </div>

//    <div className='project_container'>
//       <div className='project'> 
//         <img className='project_img' src="src/assets/My-images/OrderHome.png" alt="" />
//       </div>
//       <div className='about_project'>
//         <h1>Order Management  React Application</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fugiat deserunt enim voluptatum distinctio saepe placeat dolorem facere in nobis inventore sapiente libero necessitatibus?</p>
//          <div>
//          <i>HTML</i>&nbsp;&nbsp;
//          <i>CSS</i>&nbsp;&nbsp;
//          <i>JS</i>&nbsp;&nbsp;
//          <i>REACT</i>&nbsp;&nbsp;
//          </div>
//          <br />
//          <br />
//         <button> <a className='aTag' href="https://visionary-kulfi-ecafcc.netlify.app">View it Here</a> </button> &nbsp;&nbsp;&nbsp;
//         <button> <a className='aTag' href="https://github.com/SARANKUMARTSK/Order-Management-2.git">View Github Repo</a> </button>
//       </div>
      
//    </div>
//   </Element>
//   </fieldset>
//   </>
// }

// export default Project


import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Projects/Project.css'
import { Element } from 'react-scroll';
function Project() {
   
  return <>
  <Element name ="projects" className='project_page'>
   <h4>My Projects</h4>
  <div className='project_container'>
  <Carousel data-bs-theme="dark" >
      <Carousel.Item style={{maxHeight:"500px"}}>
        <img 
          className="d-block w-100"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Project 01</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque nisi, eos aperiam facere incidunt, repellendus est dolorem quae, consequuntur quisquam architecto quaerat quam et accusamus cumque maxime tempora culpa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:"500px"}}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1294582605/photo/beautiful-view-of-the-gopuram-of-masani-amman-temple-in-anaimalai-pollachi-coimbatore.jpg?s=612x612&w=0&k=20&c=RoOQrVOwHKM0fByAHvzE9G6FOTuoOoEnpdto_8-A0GM="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Project 02</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:"500px"}}>
        <img
          className="d-block w-100"
          src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Project 03</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore a dicta necessitatibus nulla amet sit alias saepe omnis sequi ut officiis at voluptatum architecto nihil, perferendis rem veniam assumenda.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  </Element>
  
  </>
}

export default Project
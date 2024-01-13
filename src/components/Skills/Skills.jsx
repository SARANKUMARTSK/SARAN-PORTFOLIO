import React from 'react'
import './Skills.css'
import { Element } from 'react-scroll'
function Skills() {
    return <>
        <Element name='skills' className='skill_container'>
             <div className='skills'>
                 <div className='skill_list'>My Technical Skills</div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                        <li>MY SQL</li>
                        <li>MONGO DB</li>
                        <li><del>NODE JS</del></li>
                        <li><del>EXPRESS JS</del></li>
                    </ul>
             </div>
        </Element>
    </>
}

export default Skills
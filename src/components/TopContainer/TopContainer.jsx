import React from 'react'
import './TopContainer.css'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
function TopContainer() {
  return <>
  <Element name='about' className='topContainer'>
    <TopContent/>
  </Element>
  </>
}

export default TopContainer

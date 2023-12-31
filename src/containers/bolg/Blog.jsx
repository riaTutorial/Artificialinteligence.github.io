import React from 'react'
import './blog.css'
import {Article} from '../../components'
import img10 from '../../assets/blog01.png'
import img11 from '../../assets/blog02.png'
import img12 from '../../assets/blog03.png'
import img13 from '../../assets/blog04.png'
import img14 from '../../assets/blog05.png'

function Blog() {
  return (
    <>
    <div className='blog' id='blog'>
       <div className='blog-head'>
        <h1> We are blogging about it.</h1>
       </div>
       <div className='blog-container'>
          <div className='blog-container-groupA'>
           <Article imgUrl={img10} imgDate={"Apr 23, 2023"} title={"MacmaAI is the future.Let us explore how it is?"}/>
          </div>
          <div className='blog-container-groupB'>
          <Article imgUrl={img11} imgDate={"Sep 26, 2022"} title={"How to use MacmaAI?"}/>
          <Article imgUrl={img12} imgDate={"Mar 04, 2022"} title={"How to write a blog using MacmaAI?"}/>
          <Article imgUrl={img13} imgDate={"Feb 18, 2022"} title={"How to create a robot using MacmaAI?"}/>
          <Article imgUrl={img14} imgDate={"Jan 31, 2022"} title={"The world is changing, how to adapt to the changing environment?"}/>
          </div>
       </div>
    </div>
    </>
  )
}

export default Blog

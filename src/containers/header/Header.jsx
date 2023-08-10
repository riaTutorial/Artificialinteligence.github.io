import React from 'react'
import './header.css'
import img3 from '../../assets/ai.png'

function Header() {
  return (
    <>
    <div className='header' id='home'>
        <div className='header-body'>
         <h1>
         Let's Build Something amazing with MacmaAI
         </h1>
         <p>Artificial intelligence (AI) is the ability of machines to replicate or enhance human intellect, such as reasoning and learning from experience. Artificial intelligence has been used in computer programs for years</p>
        <div className='header-box'>
         <input type='email' name='' placeholder='Your Email Address'/>
         <button type='button'>Get Started</button>
        </div>
        </div>
        <div className='header-secondImg'>
         <img src={img3} alt='ai'/>
        </div>
    </div>
    </>
  )
}


export default Header

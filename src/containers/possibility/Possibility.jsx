import React from 'react'
import './possibility.css'
import img9 from '../../assets/possibility.png'

export default function Possibility() {
  return (
    <>
    <div className='possible' id='possibility'>
      <div className='possible-image'>
         <img src={img9} alt='possible'/>
      </div>
      <div className='possible-content'>
        <h1>
          The possibilities are beyond your imagination
        </h1>
        <p>Artificial intelligence is shaping the future of humanity across nearly every industry. It is already the main driver of emerging technologies like big data, robotics and IoT — not to mention generative AI.</p>
        <a href='#home'>Request Early Access to Get Started</a>
      </div>
    </div> 
    </>
  )
}

import React from 'react'
import './whatGPT3.css'
import {data} from './data'


function WhatGPT3() {
  return (
   <>
   <div className='whatgpt' id='wgpt3'>
    <div className='whatgpt-feature'>
      <div className='whatgpt-feature-title'>
        <div className='underline'></div>
        <h1>What is MacmaAI</h1>
      </div>
      <div className='whatgpt-feature-text'>
       <p>MacmaAI is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
      </div>
    </div>
    <div className='whatgpt-head'>
       <h1>The possibilities are beyond your imagination</h1>
       <a href='#blog'>Explore The Library</a>
    </div>
    <div className='whatgpt-body'>
        {
            data.map((file)=>
            {
                return(
                    <div className='whatgpt-body-part'>
                        <div className='underline2'></div>
                      <h2>{file.title}</h2>
                      <p>{file.text}</p>
                    </div>
                )
            })
        }
      
    </div>
   </div>
   </>
  )
}
export default WhatGPT3

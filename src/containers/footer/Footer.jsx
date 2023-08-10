import React from 'react'
import './footer.css'


export default function Footer() {
  return (
   <>
   <div className='footer'>
      <div className='footer-heading'>
        <h1>Do you want to step into the future before others!</h1>
      </div>
      <div className='footer-button'>
        <a href='#home'>Request Early Access</a>
      </div>
      <div className='footer-container'>
        <div className='footer-container-part'>
        <h1>Macma<span>Ai</span></h1>
        <p>Note that the development build is not optimized</p>
        </div>
        <div className='footer-container-part'>
          <h4>Links</h4>
          <ul className='ulist'>
            <li><a href='#overons'>Overons</a></li>
            <li><a href='#sc'>Social Media</a></li>
            <li><a href='#counter'>Counters</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-container-part'>
        <h4>Company</h4>
          <ul className='ulist'>
            <li><a href='#overons'>Terms & Conditions</a></li>
            <li><a href='#sc'>Privacy & Policy</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-container-part'>
        <h4>Get in touch</h4>
        <ul className='ulist'>
          <li><a href='#'>Rue Taha Hussein,Casablanca,Morocco</a></li>
          <li><a href='#'>+212666247039</a></li>
          <li><a href='#'>varyaniria@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p><sup>c</sup> 2021 MacmaAI. All rights reserved.</p>
      </div>
   </div>
   </>
  )
}

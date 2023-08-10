import React from 'react';
import {useState} from 'react';

import './navbar.css';

import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';

const Menu =()=>
    (
        <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>What is MacmaAI</a></p>
        <p><a href='#features'>Features</a></p>
        <p><a href='#possibility'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
        </>
    )

function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <>
    <div className='Navbar'>
    <div className='Navbar-bar'>
      <div className='Navbar-bar-logo'>
         
         <h1>Macma<span>Ai</span></h1>
      </div>
      <div className='Navbar-bar-menu'> 
        <Menu/>
      </div>
      </div>
      <div className='Navbar-bar-signin'>
        {/* <p>Sign in</p> */}
        <button>Documentation</button>
      </div>
      <div className='Navbar-bar-icon'>
      {toggleMenu?<RiCloseLine size={27} color='#fff' onClick={()=> setToggleMenu(false)} />:<RiMenu3Line size={27} color='#fff' onClick={()=> setToggleMenu(true)}/>}
       
       {toggleMenu&&(
       <div className='Navbar-bar-menu-container scale-up-center'>
       <div className='Navbar-bar-menu-container-link'> 
        <Menu/>
      <div className='Navbar-bar-menu-container-link-sign'>
        {/* <p>Sign in</p> */}
        <button type='button'>Docs</button>
      </div>
      </div>
      </div>
      )}
      
      </div>
      
    </div>
    
    </>
  )
}

export default Navbar

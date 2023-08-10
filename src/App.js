import React from 'react'

import './App.css'

import {Navbar,Brand,Cta} from './components'

import {Header,WhatGPT3,Feature,Possibility,Blog,Footer} from './containers'

function App() {
  return (
    <div>
      <div className='gradient__bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
      


      
    </div>
  )
}

export default App

import { useState } from 'react'
import Router from './components/Router'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { AosInit } from './lib/aos'


function App() {
  return (
    <div className='font-nunito'>
    <Navbar />
    <main>
        <AosInit>
          <Router />
        </AosInit>
      </main>
    <Footer />
    </div>
  )
}

export default App

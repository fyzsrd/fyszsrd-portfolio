import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function MainLayout() {
  return (
    <>
    <Navbar />
    <main className='scroll-pt-16'>
      <Home />
    </main>
    </>
  )
}

export default MainLayout
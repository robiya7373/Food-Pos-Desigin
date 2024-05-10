import React from 'react'
import Nav from './components/Navbar/Nav'
import HomePage from './components/Home/HomePage'
import Order from './components/Order/Order'

const App = () => {
  return (
    <div className='flex '>
    <Nav/>
    <HomePage/>
    <Order/>
    </div>
    )
}

export default App
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Sneakers() {
  return (
    <div>
      <Navbar/>
      <p className='breadcrumb'>
        <Link to="/">Home</Link> / Classic White Tennis Sneakers
      </p>

      {/* <p className='breadcrumb'>
        <Link to="/">Home</Link> / Waterproof Hiking Boots
      </p> */}


      {/* <div className='sneakers-page'>
        {}
      </div> */}
    </div>
  )
}

export default Sneakers

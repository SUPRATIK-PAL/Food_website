import React from 'react'
import Navbar from "./Navbar"
import Searchfrom from "./SearchForm"

const Header = () => {
  return (
    <div>
      <header className='header'>
        <Navbar/>

        <div className='header-content flex align-center justify-center flex-column text-center'>
          <Searchfrom />
          <h1 className='text-white header-title ls-2'>Grab your favourite dishes.</h1>
          <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p>
        </div>
        
      </header>
    </div>
  )
}

export default Header

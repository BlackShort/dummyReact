import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <h1>Logo</h1>
      <div className='links'>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </div>
        <div>
          <button>Signup</button>
          <button>Signup</button>
        </div>
      </div>
    </div>
  )
}

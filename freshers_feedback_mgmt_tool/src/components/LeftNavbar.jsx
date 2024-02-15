import React from 'react'
import logo from '../assets/jman.jpeg'

function LeftNavbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navBox'>
                <a href="/">
                    <img src={logo} alt="logo" className='w-36'/>
                </a>

                <ul className='nav-items'>
                    <li className='nav-item text-lg'>
                        <a href="/">Dashboard</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/">Feedback</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/">My Account</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default LeftNavbar
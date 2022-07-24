import React from 'react'
import CTA from './CTA'
import './header.css'
import dp2 from '../../assets/dp2.png' //import can be referenced from the element {dp2}
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome, friend!</h5>
        <h1>Prince Kuro.</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="dp">
          <img src={dp2} alt="Prince Kuro's dp" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import { BsLinkedin } from 'react-icons/bs' // bs is the initials of what we are importing from the library
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/godspower-iffitis-313086112"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/iamprincekuro" target="blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com/iamprincekuro" target="blank">
        <FaInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials

import React from 'react'
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
    <img src={Logo} alt='logo'/>
    <span>
      Made with <b> React.js</b>
    </span>
    </footer>
  )
}

export default Footer
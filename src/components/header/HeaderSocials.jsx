import React from 'react'
import "./header.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/dobariya-harsh-39898624a/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/harshdobariya013" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://medium.com/@harshdobariya093" target="_blank" rel='noreferrer'><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials
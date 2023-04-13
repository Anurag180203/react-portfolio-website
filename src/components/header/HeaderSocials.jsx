import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiCodechef } from 'react-icons/si'
export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anurag-sharma-898772248/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Anurag180203" target="_blank"><FaGithub /></a>
        <a href="https://www.codechef.com/users/anurag1802" target="_blank"><SiCodechef /></a>
    </div>
  )
}

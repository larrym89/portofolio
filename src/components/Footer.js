import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'> 
        <div className='socialMedia'>
            <InstagramIcon onClick={() => {
            window.open("https://www.instagram.com/laurentiu_costin/", '_blank')
          }}/>
            <LinkedInIcon onClick={() => {
            window.open("https://www.linkedin.com/in/laurentiu-maholea-1aa91a113/", '_blank')
          }}/>
            <GitHubIcon onClick={() => {
            window.open("https://github.com/larrym89/", '_blank')
          }}/>
            <FacebookIcon onClick={() => {
            window.open("https://facebook.com/costin.mtz.3", '_blank')
          }}/>
        </div>
        <p> &copy;2022 laurentiumaholea.one</p>
    </div>
  )
}

export default Footer
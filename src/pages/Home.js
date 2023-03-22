import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../styles/Home.css"

function Home() {

  
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Larry</h2>
        <div className="prompt">
          <p>A freelance developer with a passion for creating and learning.</p>
          <LinkedInIcon className='iconsSocial' onClick={() => {
            window.open("https://www.linkedin.com/in/laurentiu-maholea-1aa91a113/", '_blank')
          }}/>
          <EmailIcon className='iconsSocial' onClick={() => window.location = 'mailto:maholeal89@gmail.com'}/>
          <GitHubIcon className='iconsSocial' onClick={() => {
            window.open("https://github.com/larrym89", '_blank')
          }}/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS*, Angular*, Vue*, HTML, CSS, NPM,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL*, API's
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,Python*, TypeScript*,PHP*</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline  lineColor="#006666">

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2004 - 2008"
          iconStyle={{background: "#6b6b6b", color: "#fff5bb"}}
          icon={<SchoolIcon />}> 

          <h3 className='vertical-timeline-element-title'>Colegiul Tehnic Constantin Istrati</h3>
          <h4 className='vertical-timeline-element-title'> Campina,PH - Romania</h4>
          <p>High School Diploma - Computer Science</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2021 - 2022"
          iconStyle={{background: "#6b6b6b", color: "#fff5bb"}}
          icon={<SchoolIcon />}> 

          <h3 className='vertical-timeline-element-title'>Link Academy Romania</h3>
          <p>Frontend Develompent - Javascript</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2022 - Present"
          iconStyle={{background: "#6b6b6b", color: "#fff5bb"}}
          icon={<SchoolIcon />}> 

          <h3 className='vertical-timeline-element-title'>Link Academy Romania</h3>
          <p>Backend Develompent - PHP+MySQL</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2008 - 2016"
          iconStyle={{background: "#b7b7b7", color: "#006666"}}
          icon={<WorkIcon />}> 

          <h3 className='vertical-timeline-element-title'>Wingsrom Flying Quality Products SRL</h3>
          <h4 className='vertical-timeline-element-title'> Ploiesti - Romania</h4>
          <p>CNC Machinist - Milling + Turning</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2016 - Present"
          iconStyle={{background: "#b7b7b7", color: "#006666"}}
          icon={<WorkIcon />}> 

          <h3 className='vertical-timeline-element-title'>Flowserve BV</h3>
          <h4 className='vertical-timeline-element-title'> Etten-Leur, NL</h4>
          <p>CNC Machinist - Milling + Turning</p>

        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
  )
}

export default Experience
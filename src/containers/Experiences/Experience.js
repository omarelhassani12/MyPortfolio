import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import {experienceData} from './ExperienceData';



function Experience() {
  return (
    <section id="experience">
      <div className="vertical-timeline-container">
        <VerticalTimeline>
          {experienceData.map((data, index) => (
            <VerticalTimelineElement
              key={index}
              className="custom-timeline-element"
              contentStyle={{
                background: (index + 1) % 2 !== 0 ? 'linear-gradient(135deg, #333, #666)' : 'linear-gradient(135deg, #666, #333)',
              }}
              contentArrowStyle={{ borderRight: '7px solid #333' }}
              date={`${data.beginYear} - ${data.endYear}`}
              iconStyle={{
                backgroundImage: `url(${data.icon})`,
                backgroundSize: 'cover', 
                color: '#fff',
              }}
            >
              <h3 className="vertical-timeline-element-title">{data.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
              <p>{data.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;

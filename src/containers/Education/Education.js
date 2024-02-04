import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const EducationData = [
  { 
    beginYear: '06/2023', 
    endYear: '10/2023', 
    title: 'DUT in Computer Science',
    institution: 'Cadi Ayyad University | High School of Technology', 
    description: (
      <div>
        - Studied a comprehensive curriculum covering various aspects of computer science.<br />
        - Worked on projects that involved applying theoretical knowledge to real-world scenarios.<br />
        - Participated in extracurricular activities and collaborative learning experiences.<br />
        - Gained hands-on experience with the latest technologies in the field.<br />
        - Conducted research and contributed to academic discussions.
      </div>
    ),
    icon: require('../../assets/schools/EST-Safi.png') 
  },

];

function Education() {
  return (
    <section id="Education">
      <div className="vertical-timeline-container">
        <VerticalTimeline>
          {EducationData.map((data, index) => (
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
              <h4 className="vertical-timeline-element-subtitle">{data.institution}</h4>
              <p>{data.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;

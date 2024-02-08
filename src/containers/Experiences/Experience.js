import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const experienceData = [
  { 
    beginYear: '06/2023', 
    endYear: '10/2023', 
    title: 'Full Stack Developer | Freelance', 
    company: 'OFPPT', 
    description: (
      <div>
        - Executed the development and design of a comprehensive absence management application for their interns.<br />
        - Worked closely with stakeholders to gather requirements and comprehend the workflow of managing intern absences.<br />
        - Implemented a user-friendly interface for both administrators and interns to submit and track absence requests.<br />
        - Integrated advanced features, including real-time notifications and reporting tools.<br />
        - Conducted usability testing and gathered feedback to enhance the overall user experience.
      </div>
    ),
    icon: require('../../assets/companies/ofppt.png') 
  },
  { 
    beginYear: '04/2023', 
    endYear: '06/2023', 
    title: 'Full Stack Developer | Intern', 
    company: 'Medical Cabinet', 
    description: (
      <div>
        - Crafted and designed a comprehensive platform to manage medical cabinet functionality with a dedicated team.<br />
        - Collaborated with stakeholders to gather requirements and comprehend the workflow of managing various aspects of medical operations.<br />
        - Implemented a user-friendly interface for medical staff and administrators to streamline tasks, appointments, and workflows.<br />
        - Integrated advanced features, including real-time collaboration tools, appointment notifications, and a secure chat system for healthcare professionals and patients.<br />
        - Conducted usability testing, collected feedback, and iteratively improved the platform for an enhanced user experience.
      </div>
    ),
    icon: require('../../assets/companies/cabinet-medical.png') 
  },
  {
    beginYear: '12/2022',
    endYear: '04/2023',
    title: 'Mobile Developer | Project Development',
    company: 'Higher School of Technology',
    description: (
      <div>
          - Conceptualized, engineered, and designed a mobile application named "Tabibi" to streamline company operations, leveraging the collective expertise of our dedicated team.<br />
          - Collaborated closely with stakeholders to comprehensively understand the intricacies of company workflows, ensuring alignment with project goals.<br />
          - Implemented an intuitive user interface tailored to meet the needs of team members and administrators, enhancing overall task management and efficiency.<br />
          - Integrated cutting-edge features such as real-time collaboration tools, notifications, and detailed reporting mechanisms to enhance productivity and decision-making.<br />
          - Conducted rigorous usability testing and gathered user feedback to iteratively refine the application, resulting in an optimized user experience and enhanced functionality.
      </div>
    ),
    icon: require('../../assets/schools/EST-Safi.png')
  },  
  { 
    beginYear: '07/2022', 
    endYear: '08/2022', 
    title: 'Web Developer | Intern', 
    company: 'Devosoft', 
    description: (
      <div>
        - Engineered and designed a comprehensive platform to manage company functionality with a dedicated team.<br />
        - Collaborated with stakeholders to gather requirements and comprehend the workflow of managing various aspects of company operations.<br />
        - Implemented a user-friendly interface for team members and administrators to streamline tasks and workflows.<br />
        - Integrated advanced features, including real-time collaboration tools, notifications, and detailed reporting mechanisms.<br />
        - Conducted usability testing, collected feedback, and iteratively improved the platform for an enhanced user experience.
      </div>
    ),
    icon: require('../../assets/companies/devosoft.png') 
  },
];



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

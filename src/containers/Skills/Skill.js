// Skill.js
import React from 'react';
import './Skill.css';
import { skillCards } from './SkillData.js';

function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        {skillCards.map((card, index) => (
          <div className="skill-card" key={index}>
            <h3>{card.title}</h3>
            <ul>
              {card.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', level: 40 },
    { name: 'JavaScript', level: 55 },
    { name: 'Node.js', level: 45 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'MongoDB', level: 40 },
    { name: 'Express', level: 45 },
    { name: 'Git/Github', level: 55 }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
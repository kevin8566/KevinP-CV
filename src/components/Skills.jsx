import React from 'react';

const Skills = ({ data }) => {
  return (
    <div className="card">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {data.map((skill) => (
          <div key={skill.id} className="skill-item">
            <div className="skill-header">
              <div className="skill-info">
                <img src={skill.icon_url} alt={skill.name} className="skill-icon" />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.years_of_experience} years experience</p>
                </div>
              </div>
              {skill.is_main && <span className="badge-main">Main</span>}
            </div>
            
            <div className="progress-container">
              <div className="progress-label">
                <span>{skill.level}</span>
                <span>
                  {skill.level === 'advanced' ? '100%' : skill.level === 'intermediate' ? '66%' : '33%'}
                </span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: skill.level === 'advanced' ? '100%' : skill.level === 'intermediate' ? '66%' : '33%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
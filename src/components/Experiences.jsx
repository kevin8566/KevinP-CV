import React from 'react';

const Experiences = ({ data }) => {
  // Sort data: Yang 'Current' paling atas
  const sortedData = [...data].sort((a, b) => {
    if (a.is_current) return -1;
    if (b.is_current) return 1;
    return 0;
  });

  return (
    <div className="card">
      <h2>Experience</h2>
      <div className="timeline">
        {sortedData.map((exp) => (
          <div key={exp.id} className="timeline-item">
            {/* LOGIKA WARNA LOGO: */}
            {/* Jika 'Current' -> Lingkaran Biru, Icon Putih */}
            {/* Jika Tidak -> Lingkaran Abu-biru, Icon Abu-tua */}
            <div className={`timeline-icon ${exp.is_current ? 'icon-active' : 'icon-passive'}`}>
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="briefcase-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25H7.5v-2.25z" />
                <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                <path d="M1.5 9.75a3 3 0 013-3h15a3 3 0 013 3v.75h-21v-.75z" />
              </svg>
            </div>
            
            {/* KARTU KONTEN (Kotak Putih bergaris) */}
            <div className="timeline-content card-inner">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className={`badge-type ${exp.experience_type}`}>
                  {exp.experience_type}
                </span>
              </div>
              
              <p className="exp-org">{exp.organization}</p>
              
              <p className="exp-date">
                <svg className="calendar-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
                {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date} 
                {exp.is_current && <span className="badge-current">Current</span>}
              </p>
              
              <p className="exp-desc">{exp.description}</p>
              
              <div className="tech-stack">
                {exp.technologies && exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
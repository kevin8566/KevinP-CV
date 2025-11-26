import React from 'react';

const Profile = ({ data }) => {
  return (
    <div className="card profile-card">
      <div className="profile-content">
        <img src={data.photo_url} alt={data.full_name} className="profile-photo" />
        <div className="profile-text">
          <h1>{data.full_name}</h1>
          <p className="job-title">{data.headline}</p>
          
          <div className="tags">
            <span className="tag">{data.nim}</span>
            <span className="tag">{data.prodi}</span>
            <span className="tag">{data.angkatan}</span>
          </div>
          
          <p className="location">📍 {data.location} • 👁️ 127 views</p>
          <p className="bio">{data.short_bio}</p>
          
          <a href={data.portfolio_url} target="_blank" rel="noreferrer" className="btn-visit">
  {/* Ikon SVG External Link yang Akurat */}
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
  Visit Portfolio
</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
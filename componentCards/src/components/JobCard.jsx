import React from 'react';
import './JobCard.css';

const JobCard = (props) => {
  return (
    <div className="job-card">
      <div className="card-header">
        <span className="availability-badge">{props.availability}</span>
        <span className="price-tag">{props.price}</span>
      </div>
      
      <div className="card-content">
        <div className="image-container">
<img 
  src={props.image} 
  alt={props.name} 
  className="profile-img" 
/>
        </div>
        
        <h2 className="name">{props.name}</h2>
        <p className="role-text">{props.role}</p>
        
        <a href="#" className="company-link">
          <span className="company-icon">🏢</span> {props.company}
        </a>

        <div className="tags-container">
          <span className="tag">UI</span>
          <span className="tag">UX</span>
          <span className="tag">Photoshop</span>
        </div>
        
        <p className="description">
          {props.description}
        </p>
      </div>

      <div className="card-footer">
        <button className="view-btn">VIEW PROFILE</button>
      </div>
    </div>
  );
};

export default JobCard;
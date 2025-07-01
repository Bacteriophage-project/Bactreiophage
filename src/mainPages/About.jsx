import React, { useState } from 'react';
import '../styles/about.css';

import Abidha from '../profiles/Abidha.jpg';
import Daniel from '../profiles/Daniel.jpg';
import Nesh from '../profiles/Nesh.jpg';
import Dekow from '../profiles/Dekow.jpg';
import Kalii from '../profiles/Kalii.jpg';
import Cynthia from '../profiles/Cynthia.jpg';
import Cyan from '../profiles/Cyan.jpg'

import Placeholder from '../assets/logo.png';

const teamMembers = [
  {
    img: Placeholder,
    name: 'Dr Lawrence Nderu',
    role: 'Chairman Computing',
    description: 'Guides strategic direction for the project.',
  },
  {
    img: Cyan,
    name: 'DR. Cyan Julia',
    role: 'Research Lead',
    description: 'Leads scientific research and innovation.',
  },
  {
    img: Cynthia,
    name: 'Cynthia Vaati',
    role: 'Project Lead',
    description: 'Coordinates the team and project milestones.',
  },
  {
    img: Daniel,
    name: 'Daniel Bundi',
    role: 'Front-end Developer',
    description: 'Builds user-friendly interfaces and animations.',
  },
  {
    img: Placeholder,
    name: 'Victor Nduati',
    role: 'Data Analyst',
    description: 'Processes and interprets research data.',
  },
  {
    img: Kalii,
    name: 'Emmanuel Kalii',
    role: 'Data Analyst',
    description: 'Supports genomic data insights and reports.',
  },
  {
    img: Abidha,
    name: 'Kevin Abidha',
    role: 'Machine Learning',
    description: 'Implements ML models for analysis automation.',
    link: 'https://www.linkedin.com/in/kelvinabidha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    img: Nesh,
    name: 'Josephat Munene',
    role: 'Artificial Intelligence',
    description: 'Develops AI-powered tools for prediction.',
  },
  {
    img: Dekow,
    name: 'Mohamed Dekow',
    role: 'Cyber-Security Engineer',
    description: 'Assists in building interactive UIs.',
    link: 'https://www.linkedin.com/in/dekow-mohamed-56b2b3286/',
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const closePopup = () => setSelectedMember(null);

  return (
    <div className={`about ${selectedMember ? 'blurred' : ''}`} id="about">
      <h1>About Us</h1>
      <p>
        We are a passionate team of researchers and developers committed to
        advancing genomic analysis using the latest bioinformatics tools.
      </p>

      <div className="members">
        {teamMembers.map((member, index) => (
          <div className="group-member" key={index}>
            <i className="info-icon" onClick={() => setSelectedMember(member)}>
              &#9432;
            </i>

            <img src={member.img || Placeholder} alt={member.name} />
            <h3 className="name">{member.name}</h3>
            <h4 className="role">{member.role}</h4>
            <a className="link" href={member.link} target='_blank'>Get in touch</a>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="overlay" onClick={closePopup}>
          <div
            className="popup-large-card"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the popup itself
          >
            <button className="close-btn" onClick={closePopup}>×</button>
            <img src={selectedMember.img || Placeholder} alt={selectedMember.name} />
            <h3>{selectedMember.name}</h3>
            <h4>{selectedMember.role}</h4>
            <p>{selectedMember.description}</p>
            <a href={selectedMember.link} target='_blank' className="popup-link">Get in touch</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

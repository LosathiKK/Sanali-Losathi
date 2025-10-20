import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Bio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Bio Page Content */}
      <div className="bio-page-container">
        <h1 className="bio-main-title">About Me</h1>
        
        <div className="bio-content">
          {/* Left Column - Profile Image */}
          <div className="bio-image-section">
            <div className="profile-image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          
          {/* Right Column - Bio Text */}
          <div className="bio-text-section">
            <h2 className="bio-name">Sanali Losathi</h2>
            <div className="bio-paragraphs">
              <p>
                I'm a branding and web designer with over 5 years of experience creating 
                digital products for clients across various industries.
              </p>
              <p>
                My approach combines clean, functional design with robust development 
                practices to create memorable digital experiences that solve real problems.
              </p>
              <p>
                Based in New York City, I work with clients globally to bring their 
                digital visions to life.
              </p>
            </div>
          </div>
        </div>
        
        {/* Skills & Expertise Section */}
        <div className="skills-section">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">UI/UX Design</div>
            <div className="skill-item">Frontend Development</div>
            <div className="skill-item">React & React Native</div>
            <div className="skill-item">Responsive Web Design</div>
            <div className="skill-item">Brand Identity</div>
            <div className="skill-item">Web Accessibility</div>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="job-title">Senior Designer at Creative Studio</h3>
              <div className="job-dates">2020 - Present</div>
              <p className="job-description">
                Leading design for web and mobile applications, managing client projects 
                from concept to completion.
              </p>
            </div>
            
            <div className="experience-item">
              <h3 className="job-title">Brand Designer at Tech Agency</h3>
              <div className="job-dates">2018 - 2020</div>
              <p className="job-description">
                Developed brand identities and visual systems for various clients in the 
                technology sector.
              </p>
            </div>
            
            <div className="experience-item">
              <h3 className="job-title">Junior Designer at Creative Co.</h3>
              <div className="job-dates">2016 - 2018</div>
              <p className="job-description">
                Assisted in the development of brand identities and digital products for 
                small businesses and startups.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Bio;

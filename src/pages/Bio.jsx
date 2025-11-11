import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SanaliImage from '../assets/images/Sanali.jpg';

import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import php from "../assets/icons/php.svg";
import flutter from "../assets/icons/flutter.svg";
import dart from "../assets/icons/dart.svg";
import wordpress from "../assets/icons/wordpress.svg";
import mysql from "../assets/icons/mysql.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import firebase from "../assets/icons/firebase.svg";
import java from "../assets/icons/java.svg";
import python from "../assets/icons/python.svg";
import figma from "../assets/icons/figma.svg";
import nodejs from "../assets/icons/node-js.svg";
import bootstrap from "../assets/icons/bootstrap.svg";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "PHP", icon: php },
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },
  { name: "WordPress", icon: wordpress },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Firebase", icon: firebase },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Figma", icon: figma },
  { name: "Node.js", icon: nodejs },
  { name: "Bootstrap", icon: bootstrap },
];


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
            <img 
              src={SanaliImage} 
              alt="Sanali Losathi"
              className="profile-image-content"
            />
          </div>
          
          {/* Right Column - Bio Text */}
          <div className="bio-text-section">
            <h2 className="bio-name">Sanali Losathi</h2>
            <div className="bio-paragraphs">
              <p>
                I'm a final year Software Engineering undergraduate passionate about creating impactful digital 
                solutions through Web Development, Mobile Mpp Development, and UI/UX Design.
              </p>
              <p>
                My Final Year Research Project focuses on developing an Augmented Reality based Mobile
                Application for Plant Identification, integrating Flutter and ARCore to provide an intellegent, 
                offline plant recognition experience with a web-based admin dashboard.
              </p>
              <p>
                With hands-on experience in Web Development using HTML, CSS, JavaScript, PHP, React, and
                WordPress, and Mobile App Development using Flutter and Dart, I enjoy building responsive, 
                user-centered applications that blend functionality with modern design.
              </p>
              <p>
                I also have a strong interest in UI/UX Deisgn, ensuring that every interface I craft not only 
                looks appealing but also delivers an intuitive and seamless user experience.
              </p>
              <p>
                I'm constantly learning, exploring emerging technologies, and refining my skills to become a well-rounded
                software engineer capable of turning ideas into digital realities. 
              </p>
            </div>
          </div>
        </div>
        
        {/* Skills & Expertise Section */}
        <div className="skills-section">
          <h2 className="section-title">Core Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">Full-Stack Development</div>
            <div className="skill-item">Mobile App Development</div>
            <div className="skill-item">UI/UX Design</div>
            <div className="skill-item">Digital Marketing</div>
            <div className="skill-item">Search Engine Optimization</div>
            <div className="skill-item">Creative Content Writing</div>
            <div className="skill-item">Graphic Design</div>
            <div className="skill-item">Augmented Reality</div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="technical-skills-section">
          <h2 className="technical-skills-title">Technical Skills</h2>
          <div className="technical-skills-grid">
            {skills.map((skill, index) => (
              <div className="technical-skill-item" key={index} title={skill.name}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="technical-skill-icon"
                />
              </div>
            ))}
          </div>
        </div>

        
        {/* Experience Section */}
        <div className="experience-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="job-title">Web Developer & Digital Marketing Executive - MD Creations (Pvt) Ltd</h3>
              <div className="job-dates">Nov 2024 - Present</div>
              <p className="job-description">
                I have hands-on experience in Web Development and Digital Marketing, where I plan and execute cross-channel
                campaigns across social media and search platforms to boost brand awareness and generate qualifiend leands.
                I manage and maintain WordPress websites, ensuring functionality, responsiveness, and timely content updates.

                My work involves optimizing on-page SEO, web content, and metadata to improve search rankings and drive organic traffic.
                Additionally, I set up, moniot, and analyze paid advertising campaigns using Meta Ads Manager to maximize ROI and enhance
                audience engagement.
              </p>
            </div>
            
            <div className="experience-item">
              <h3 className="job-title">QA Engineer (Intern) - Amerck Technologies</h3>
              <div className="job-dates">March 2014 - Sep 2024</div>
              <p className="job-description">
                I created and executed manual test cases, reported and tracked defectes, and collaborated with the development
                team to verify fixes. I performed regression testing, maintained detailed test documentation, and assisted in
                learning and setting up basic automation testing using Selenium. Through effective communication and clear defect 
                reporting, I imporived the bug detection rate by providing accurate reproduction steps and priority tagging, ensuring
                a smoother and more efficient testing process.
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

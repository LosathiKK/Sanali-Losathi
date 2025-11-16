import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AyurScanImage from '../assets/images/AyurScan.png';
import BlinqEliteImage from '../assets/images/BlinqElite.png';
import DinlankaLogisticsImage from '../assets/images/DinlankaLogistics.png';
import MusicPlayerImage from '../assets/images/MusicPlayer.png';
import TaskItImage from '../assets/images/TaskIt.png'
import GraphicsDesignImage from '../assets/images/GraphicsDesign.png'
import '../styles/global.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm Sanali.<br />
            Web & Mobile App<br />
            Developer
          </h1>          
        </div>
      </main>
      
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">AyurScan</h3>
              <p className="project-description">
                Augmented Reality Based Ayurvedic Herbs Idetification Mobile Application.
              </p>
              <div className="project-category">Mobile App</div>
              <div className="project-year">2025</div>
              {/* <a href="#" className="project-link">View Project →</a> */}
            </div>
            <div className="project-image">
              <img 
                src={AyurScanImage} 
                alt="AyurScan Mobile Application"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">Dinlanka Logistics</h3>
              <p className="project-description">
                Website Development - Logistics Company
              </p>
              <div className="project-category">Website</div>
              <div className="project-year">2025</div>
              <a href="https://dinlankalogistics.com/" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={DinlankaLogisticsImage} 
                alt="Dinlanka Logistics Website"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">BlinqElite</h3>
              <p className="project-description">
                Website Development - Cleaning Service 
              </p>
              <div className="project-category">Website</div>
              <div className="project-year">2025</div>
              <a href="https://blinqelite.com/" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={BlinqEliteImage} 
                alt="BlinqElite Website"
                className="project-image-content"
              />
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">MusicPlayer</h3>
              <p className="project-description">
                Mobile App UI/UX - Music Player
              </p>
              <div className="project-category">Mobile App</div>
              <div className="project-year">2022</div>
              <a href="https://www.figma.com/proto/DG5pmyBNZuJUbMCCoUmIda/Music-Player?node-id=13-27&p=f&t=wjeifMdeRmEigU6Z-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A27&show-proto-sidebar=1" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={MusicPlayerImage} 
                alt="MusicPlayer Mobile App"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">TaskIt</h3>
              <p className="project-description">
                Mobile App UI/UX - ToDo List 
              </p>
              <div className="project-category">Mobile App</div>
              <div className="project-year">2022</div>
              <a href="https://www.figma.com/proto/WQgcV9mOpDhiXkbGp8tzLx/Practice_Flutter_Project?t=VLYc4fT4bYXeCAep-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=8-194&starting-point-node-id=8%3A194" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={TaskItImage} 
                alt="TaskIt Mobile App"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">Graphics Designs</h3>
              <p className="project-description">
                Creative Graphics Designs
              </p>
              <Link to="/graphic-design" className="project-link">View Project →</Link>
            </div>
            <div className="project-image">
              <img 
                src={GraphicsDesignImage} 
                alt="Graphics Designs"
                className="project-image-content"
              />
            </div>
          </div>
        
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;

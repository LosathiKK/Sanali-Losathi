import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AyurScanImage from '../assets/images/AyurScan.png';
import DinlankaImage from '../assets/images/DinlankaLogisticsImage.png';
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
          
          <div className="social-section">
            <a href="#" className="social-link">
              <span className="social-icon">Be</span>
            </a>
            <a href="#" className="social-link">
              <svg className="instagram-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
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
              <a href="#" className="project-link">View Project →</a>
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
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={DinlankaImage} 
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
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={AyurScanImage} 
                alt="BlinqElite Website"
                className="project-image-content"
              />
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">TaskIt</h3>
              <p className="project-description">
                Mobile App UI/UX - ToDo List 
              </p>
              <div className="project-category">Mobile App</div>
              <div className="project-year">2022</div>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={AyurScanImage} 
                alt="TaskIt Mobile App"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">MusicPlayer</h3>
              <p className="project-description">
                Mobile App UI/UX - Music Player
              </p>
              <div className="project-category">Mobile App</div>
              <div className="project-year">2022</div>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={AyurScanImage} 
                alt="MusicPlayer Mobile App"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">Brand Identity Design</h3>
              <p className="project-description">
                Complete brand identity and visual system for a modern tech startup.
              </p>
              <div className="project-category">Branding</div>
              <div className="project-year">2023</div>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={AyurScanImage} 
                alt="Brand Identity Design"
                className="project-image-content"
              />
            </div>
          </div>

          {/* Project 7 */}
          <div className="project-item">
            <div className="project-text">
              <h3 className="project-title">E-commerce Website</h3>
              <p className="project-description">
                Responsive web design and user experience for an online fashion retailer.
              </p>
              <div className="project-category">E-commerce</div>
              <div className="project-year">2023</div>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-image">
              <img 
                src={AyurScanImage} 
                alt="E-commerce Website"
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

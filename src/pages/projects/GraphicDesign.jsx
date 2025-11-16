import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import design1 from "../../assets/images/design1.png";
import design2 from "../../assets/images/2.png";
import design3 from "../../assets/images/3.png";
import design4 from "../../assets/images/4.png";
import design5 from "../../assets/images/5.png";

// Graphic Design Page Component
export default function GraphicDesignPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [
    { id: 1, src: design1, alt: "Graphic Design 1" },
    { id: 2, src: design2, alt: "Graphic Design 2" },
    { id: 3, src: design3, alt: "Graphic Design 3" },
    { id: 4, src: design4, alt: "Graphic Design 4" },
    { id: 5, src: design5, alt: "Graphic Design 5" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <Navbar />

      {/* Page Content */}
      <main className="graphic-design-main">
        <div className="graphic-design-container">
          <h1 className="graphic-design-title">Graphic Design Showcase</h1>

          <div className="graphic-design-grid">
            {designs.map((design) => (
              <div 
                key={design.id} 
                className="design-item"
                onClick={() => openModal(design)}
              >
                <div className="design-image-wrapper">
                  <img
                    src={design.src}
                    alt={design.alt}
                    className="design-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Image Modal/Popup */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="image-modal-image"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
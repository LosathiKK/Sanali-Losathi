import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page and scroll to projects section
    navigate('/', { replace: true });
    
    // Scroll to projects section after a short delay
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-serif text-gray-600 mb-4">Redirecting to Projects...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
};

export default WorkDetail;
